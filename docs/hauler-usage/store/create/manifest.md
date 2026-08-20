---
title: Hauler Store Create Manifest
description: Hauler Store Create Manifest Usage Documentation
sidebar_label: Manifest
---

> **Note:** This command is **experimental**. It reports what the store's metadata says, which is not always a complete record of how the store was built. Always review the generated manifest before relying on it — see [Accuracy and Limitations](#accuracy-and-limitations).

### Overview

`hauler store create manifest` reconstructs a [Hauler manifest](../../../guides-references/hauler-manifests.md) from an existing content store, producing the YAML needed to recreate that store's contents with [`hauler store sync`](../sync.md).

Hauler walks the store's OCI index and the metadata recorded alongside each artifact, then groups what it finds into `Images`, `Charts`, and `Files` documents. This is useful a store was built imperatively with [`hauler store add`](../add/image.md) and you want a declarative, version-controllable manifest after the fact, or when you've inherited a store and need to know how to rebuild it.

The manifest is written to stdout by default, or to a file with `--output`.

> **Note:** Stores created before Hauler v2.1.0 may not carry the full provenance metadata needed to reconstruct the manifest. Hauler detects this and warns, then generates the manifest on a best-effort basis. Fields such as an artifact's original (pre-rewrite) reference or a chart's `repoURL` may be missing or inaccurate. See [Stores Created Before v2.1.0](#stores-created-before-v210).

**An example with available flags...**

```bash
hauler store create manifest --store <store-directory> --output <file-name>
```

### Command Overview

```yaml
Usage:
  hauler store create manifest [flags]

Examples:
  # print a manifest for the default store to stdout
  hauler store create manifest

  # print a manifest for a specific store to stdout
  hauler store create manifest --store /path/to/my-store

  # write a manifest for a specific store to a file
  hauler store create manifest --store /path/to/store --output my-manifest.yaml

Flags:
  -h, --help            help for manifest
  -o, --output string   (Optional) Path to write the generated manifest to (defaults to stdout)

Global Flags:
      --audit-level string     Set the audit logging level (none, standard, verbose) (defaults standard)
      --blob-concurrency int   (Optional) Override the maximum number of concurrent blob writes (0 auto-derives from --concurrency where set, otherwise defaults to 16)
  -d, --haulerdir string       Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors          Warn and continue instead of failing on errors, including storing images that failed verification (defaults false)
  -l, --log-level string       Set the logging level (i.e. info, debug, warn) (defaults info)
  -r, --retries int            Set the number of retries for operations (0 uses HAULER_RETRIES, otherwise defaults to 3)
  -s, --store string           Set the directory to use for the content store
  -t, --tempdir string         (Optional) Override the default temporary directory determined by the OS
```

### Example Commands for Create Manifest

```bash
# print a manifest for the default store to stdout
hauler store create manifest

# print a manifest for a specific store to stdout
hauler store create manifest --store /path/to/my-store

# write a manifest to a file
hauler store create manifest --output hauler-manifest.yaml

# inspect a store received across the airgap, then recreate it elsewhere
hauler store load haul.tar.zst
hauler store create manifest --output recreated-manifest.yaml
hauler store sync --filename recreated-manifest.yaml --store /path/to/new-store
```

### Example Output

Given a store containing an image, a chart, and a file:

```bash
hauler store add image busybox:stable --platform linux/amd64 --store demo-store
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.2.0 --store demo-store
hauler store add file rke2-install.sh --store demo-store

hauler store create manifest --store demo-store
```

```yaml
---
apiVersion: content.hauler.cattle.io/v1
kind: Images
metadata:
    name: demo-store-images
spec:
    images:
        - name: index.docker.io/library/busybox:stable
          platform: linux/amd64
---
apiVersion: content.hauler.cattle.io/v1
kind: Charts
metadata:
    name: demo-store-charts
spec:
    charts:
        - name: hauler-helm
          repoURL: oci://ghcr.io/hauler-dev
          version: 1.2.0
---
apiVersion: content.hauler.cattle.io/v1
kind: Files
metadata:
    name: demo-store-files
spec:
    files:
        - path: /path/to/rke2-install.sh
          name: rke2-install.sh
```

Each content kind is emitted as its own document. The `metadata.name` of each document is derived from the store directory's name.

### Writing to a File vs. stdout

Without `--output`, the manifest is written to stdout so the YAML can be previewed or piped cleanly:

```bash
hauler store create manifest > hauler-manifest.yaml
```

With `--output`, the manifest is written to the given path and Hauler logs a summary of what it captured:

```bash
hauler store create manifest --output hauler-manifest.yaml
```

```text
INF wrote manifest with [1] image(s), [1] chart(s), [1] file(s) to [/path/to/hauler-manifest.yaml]
```

### Rewritten Artifacts

When an artifact was added with [`--rewrite`](../../../guides-references/rewriting-artifacts.md), the generated manifest records both halves of the relationship: `name` is the original, pullable reference and `rewrite` is the reference it is stored under. 

```bash
hauler store add image busybox:stable --rewrite custom-path/busybox:latest --store rw-store
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.2.0 --rewrite custom-path/hauler-chart:latest --store rw-store

hauler store create manifest --store rw-store
```

```yaml
---
apiVersion: content.hauler.cattle.io/v1
kind: Images
metadata:
    name: rw-store-images
spec:
    images:
        - name: index.docker.io/library/busybox:stable
          rewrite: index.docker.io/custom-path/busybox:latest
---
apiVersion: content.hauler.cattle.io/v1
kind: Charts
metadata:
    name: rw-store-charts
spec:
    charts:
        - name: hauler-helm
          repoURL: oci://ghcr.io/hauler-dev
          version: 1.2.0
          rewrite: custom-path/hauler-chart:latest
```

### How Content is Reconstructed

| Content | Behavior |
|---------|----------|
| Images | `name` is the full image reference. `platform` is set only for single-platform images; a stored multi-arch index is left unset so a later sync re-pulls every platform, matching what is actually in the store. |
| Charts | `name`, `repoURL`, and `version` are recovered from the reference recorded when the chart was added. |
| Files | `path` is the original local path or URL the file was added from, and `name` is the name it is stored under. |
| Signatures, attestations, SBOMs, and referrers | Omitted. These are rediscovered and pulled automatically when the parent image is re-added, so they do not need their own manifest entries. |

### Accuracy and Limitations

The manifest is only as good as the metadata in the store. In particular:

- **A chart's `repoURL` may not be recoverable.** When that happens, the `Charts` document is prefixed with a comment and the field must be filled in by hand before the manifest can be synced:

  ```yaml
  ---
  # NOTE: repoURL could not be recovered from the store's metadata and must be filled in below.
  apiVersion: content.hauler.cattle.io/v1
  kind: Charts
  ```

- **Add-time options are not recorded.** Flags such as `--key`, `--add-images`, `--add-dependencies`, `--values`, and `--exclude-extras` affect what ends up in the store but are not part of an artifact's metadata, so they are not reflected in the generated manifest. Re-add them yourself if a resync needs them.

Review the output and compare it against [`hauler store info`](../info.md) before using it to rebuild a store.

#### Stores Created Before v2.1.0

The provenance metadata this command relies on was introduced in **Hauler v2.1.0**. Stores written by an earlier version do not carry it, and the manifest generated from them is best-effort only.

Hauler determines this from the `hauler-version` recorded in the store's `store.json`. When the recorded version is older than v2.1.0, missing, or unparseable, an additional warning is printed.

The command still walks the store and emits a manifest, but on an older store expect:

- **Rewritten artifacts to be misrepresented.** Without the original reference, a rewritten artifact is recorded under its stored (rewritten) name with no `rewrite` field, so a resync pulls from a reference that may not exist upstream.
- **Chart `repoURL` values to be missing**, requiring the manual fill-in described above.
- **Files to list their stored name as the source `path`**, rather than the local path or URL they were originally added from.

This affects the metadata *in the store*, not the version of Hauler you run the command with. Upgrading Hauler does not backfill provenance into a store that was built by an older release. To get a more accurate manifest, rebuild the store with v2.1.0 or later.

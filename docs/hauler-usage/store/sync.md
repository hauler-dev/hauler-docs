---
title: Hauler Store Sync
description: Hauler Store Sync Usage Documentation
sidebar_label: Sync
---

### Overview

`hauler store sync` syncs content to the content store. Content can be sourced from one or more Hauler manifests (`--filename`), plain-text image lists (`--image-txt`), or RGS product collections (`--products`). All sources may be combined in a single invocation and are processed into the same store.

**An example with available flags...**

```bash
hauler store sync --filename <file-name> --platform <platform> --key <cosign-public-key> --registry <registry-url>
```

### Command Overview

```yaml
Usage:
  hauler store sync [flags]

Flags:
      --ca-file string                                  (Optional) Location of CA Bundle to enable certification verification
      --certificate-github-workflow-repository string   (Optional) Cosign certificate-github-workflow-repository option
      --certificate-identity string                     (Optional) Cosign certificate-identity (either --certificate-identity or --certificate-identity-regexp required for keyless verification)
      --certificate-identity-regexp string              (Optional) Cosign certificate-identity-regexp (either --certificate-identity or --certificate-identity-regexp required for keyless verification)
      --certificate-oidc-issuer string                  (Optional) Cosign option to validate oidc issuer
      --certificate-oidc-issuer-regexp string           (Optional) Cosign option to validate oidc issuer with regex
      --dry-run                                         (Optional) Output product manifest content to stdout instead of processing it (requires --products)
      --exclude-extras                                  (Optional) Exclude cosign signatures, attestations, SBOMs, and OCI referrers when pulling images
  -f, --filename strings                                Specify the name of manifest(s) to sync
  -h, --help                                            help for sync
  -i, --image-txt strings                               Specify local or remote image.txt file(s) to sync images
      --insecure-skip-tls-verify                        (Optional) Skip TLS certificate verification
  -k, --key string                                      (Optional) Location of public key to use for signature verification
  -p, --platform string                                 (Optional) Specify the platform of the image... i.e linux/amd64 (defaults to all)
  -c, --product-registry string                         (Optional) Specify the product registry. Defaults to RGS Carbide Registry (rgcrprod.azurecr.us)
      --products strings                                (Optional) Specify the product name to fetch collections from the product registry i.e. rancher=v2.10.1,rke2=v1.31.5+rke2r1
  -g, --registry string                                 (Optional) Specify the registry of the image for images that do not alredy define one
      --use-tlog-verify                                 (Optional) Allow transparency log verification (defaults to false)

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```

### Syncing from a Hauler Manifest

The most common way to sync content is from one or more Hauler manifests. Each manifest is a YAML document (or multi-document file) describing `Images`, `Charts`, or `Files` content. See the [Image](./add/image.md), [Chart](./add/chart.md), and [File](./add/file.md) pages for the manifest schema of each content kind.

```bash
# sync a single manifest
hauler store sync --filename hauler-manifest.yaml

# sync multiple manifests
hauler store sync --filename images.yaml --filename charts.yaml

# sync a remote manifest
hauler store sync --filename https://example.com/hauler-manifest.yaml
```

A value beginning with `http://` or `https://` is downloaded before processing, so manifests can be referenced directly by URL.

### Syncing from an images.txt File

In addition to Hauler manifests, `hauler store sync` can populate the store directly from a plain-text list of image references using the `--image-txt` (`-i`) flag. This is useful when you already have a flat list of images — for example, the `*-images.txt` files published alongside many Rancher and Kubernetes distribution releases.

The file is a newline-delimited list of image references, one per line. Blank lines and lines beginning with `#` are ignored, and leading/trailing whitespace on each line is trimmed:

```bash
# sync a local images.txt file
hauler store sync --image-txt images.txt

# sync a remote images.txt file
hauler store sync --image-txt https://example.com/path/to/images.txt

# sync multiple images.txt files (local and/or remote)
hauler store sync --image-txt images.txt --image-txt extra-images.txt

# sync a specific platform from an images.txt file
hauler store sync --image-txt images.txt --platform linux/amd64
```

> **Note:** Unlike the `Images` kind in a Hauler manifest, references listed in an `images.txt` file are pulled as-is. Per-image options such as cosign signature verification, registry relocation (`--registry`), and rewrites are **not** applied to entries sourced from an `images.txt` file. Use a Hauler manifest when you need those capabilities. The `--platform`, `--exclude-extras`, `--ca-file`, and `--insecure-skip-tls-verify` flags do apply.

### Syncing Rancher Products

The `--products` flag fetches a curated collection manifest for a Rancher product directly from a product registry, then syncs all of its content. Products are specified as `name=version`, and multiple products may be comma-separated or passed via repeated flags.

```bash
# sync a single product
hauler store sync --products rancher=v2.10.1

# sync multiple products
hauler store sync --products rancher=v2.10.1,rke2=v1.31.5+rke2r1

# sync from a custom product registry
hauler store sync --products rke2=v1.31.5+rke2r1 --product-registry <registry-url>
```

When `--product-registry` is not set, products are fetched from the RGS Carbide Registry (`rgcrprod.azurecr.us`).

> **Note:** The default registry used by `--products` and `--product-registry` will be changing in a future release; Hauler emits a warning when these flags are used.

#### Previewing a Product Manifest with `--dry-run`

Use `--dry-run` (which requires `--products`) to fetch and print a product's collection manifest to stdout **without** writing anything to the store. Log output is suppressed so the YAML can be piped or redirected cleanly.

```bash
# print a product manifest to stdout
hauler store sync --products rke2=v1.31.5+rke2r1 --dry-run

# save the resolved manifest to a file for inspection or editing
hauler store sync --products rke2=v1.31.5+rke2r1 --dry-run > rke2-manifest.yaml
```

### Excluding Extras

By default, syncing an image also pulls its associated cosign signatures, attestations, SBOMs, and OCI referrers. Pass `--exclude-extras` to fetch only the image itself, reducing the size of the resulting store:

```bash
hauler store sync --filename hauler-manifest.yaml --exclude-extras
```

### Configuring TLS for Sync Sources

`--ca-file` and `--insecure-skip-tls-verify` control how `hauler store sync` connects to registries and remote hosts for `Images`, `Charts`, and `Files` content, as well as `--image-txt` sources. Both flags can also be set via the `CA_FILE` and `INSECURE_SKIP_TLS_VERIFY` environment variables, which apply whenever the corresponding flag isn't explicitly passed.

```bash
# via flag, applied to every source synced in this run
hauler store sync --filename hauler-manifest.yaml --ca-file /path/to/ca.pem

# via environment variable
CA_FILE=/path/to/ca.pem hauler store sync --filename hauler-manifest.yaml
```

For `Images`, `Charts`, and `Files` manifests, TLS settings can also be set per-entry or manifest-wide via annotations — see the [Image](./add/image.md#configuring-tls-for-registry-connections), [Chart](./add/chart.md#configuring-tls-for-chart-repositories), and [File](./add/file.md#configuring-tls-for-remote-files) pages. Precedence is CLI flag (or environment variable) &gt; per-entry field &gt; manifest annotation, and an explicit `--insecure-skip-tls-verify=false` on the CLI always wins over a per-entry or annotation value that tries to turn it on.

> **Note:** `--ca-file`/`CA_FILE` and `--insecure-skip-tls-verify`/`INSECURE_SKIP_TLS_VERIFY` are mutually exclusive at the CLI/environment level — passing `--ca-file` (or setting `CA_FILE`) always forces certificate verification on for every entry in the sync, even if a per-entry field or annotation sets `insecure-skip-tls-verify: true`. A per-entry or annotation `ca-file` with no CLI/environment `--ca-file` does **not** override a `true` insecure-skip-tls-verify from another source for that same entry — avoid setting both on one entry. When nothing is set, the system's default CA bundle is used.

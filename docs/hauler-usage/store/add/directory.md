---
title: Hauler Store Add Directory
description: Hauler Store Add Directory Usage Documentation
sidebar_label: Directory
---

> **Note:** This command is **experimental**.

### Overview

`hauler store add directory` stores a local directory tree as a single OCI artifact in the content store, which extracts back into the same directory tree on the other side of the airgap.

Use this for content that only makes sense as a folder rather than a single file: configuration trees, offline package repositories, documentation sites, ansible playbooks, and the like. On the far side of the airgap the directory can be written back to disk with [`hauler store extract`](../extract.md) or [`hauler store copy dir://`](../copy.md), or browsed over HTTP with [`hauler store serve fileserver`](../serve/fileserver.md). Pass `--name` to store the directory under a different name than the one derived from its path. For a repeatable set of directories, list them in a [Hauler manifest](#hauler-manifest-for-directories) and run [`hauler store sync`](../sync.md).

> **Note:** Directories are local only. To add a single file, or a file from an HTTP(S) URL, use [`hauler store add file`](./file.md) instead.

**An example with available flags...**

```bash
hauler store add directory <directory> --name <name>
```

### Command Overview

```yaml
Usage:
  hauler store add directory [flags]

Examples:
  # add a local directory
  hauler store add directory ./mydir

  # add a local directory and assign a new name
  hauler store add directory ./mydir --name mydir-v2

Flags:
  -h, --help          help for directory
  -n, --name string   (Optional) Rewrite the name of the directory

Global Flags:
      --audit-level string     Set the audit logging level (none, standard, verbose) (defaults standard)
      --blob-concurrency int   (Optional) Override the maximum number of concurrent blob writes (0 auto-derives from --concurrency where set, otherwise defaults to 16)
  -d, --haulerdir string       Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors          Warn and continue instead of failing on errors, including storing images that failed verification (defaults false)
  -l, --log-level string       Set the logging level (i.e. info, debug, warn) (defaults info)
  -r, --retries int            Set the number of retries for operations (0 uses HAULER_RETRIES, otherwise defaults to 3)
  -s, --store string           Set the directory to use for the content store
  -t, --tempdir string         (Optional) Override the default temporary directory determined by the OS
  -w, --work-dir string        (Optional) Set the directory for output that commands would otherwise write to the current directory (default: current directory)
```

### Example Commands for Directories

```bash
# add a local directory
hauler store add directory ./mydir

# add a local directory and assign a new name
hauler store add directory ./mydir --name mydir-v2

# add the current directory (stored under the directory's real name, not ".")
hauler store add directory .
```

### Extracting a Directory

A directory artifact is written back to disk as a directory, named after the artifact, inside the output directory:

```bash
hauler store add directory ./configs
hauler store extract hauler/configs:latest --output out
```

```text
out
out/configs
out/configs/a.yaml
out/configs/sub
out/configs/sub/b.yaml
```

> **Note:** Extracting a directory **replaces** any existing directory of the same name in the output directory, so files that are not part of the stored directory are removed. The archive is verified and fully extracted before the existing directory is swapped out, so a failed extract never leaves a partial directory behind.

### Directory vs. File

`hauler store add file` also accepts a local directory, but stores it as a single opaque archive (i.e. `hauler/configs.tar.zst:latest`) that is extracted as that archive file. Use `hauler store add directory` when the directory should come back out as a directory.

| Command | Stored As | Store Info Type | Extracted As |
|:---:|:---:|:---:|:---:|
| `hauler store add directory ./configs` | `hauler/configs:latest` | `directory` | `configs/` |
| `hauler store add file ./configs` | `hauler/configs.tar.zst:latest` | `file` | `configs.tar.zst` |

### Hauler Manifest for Directories

Used with [`hauler store sync`](../sync.md). Relative paths are resolved against the directory containing the manifest, not the current directory.

```yaml title="hauler-directory-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Directories
metadata:
  name: hauler-content-directories-example
spec:
  directories:
    - path: <directory>
      name: <name>
```

> **Note:** A `Directories` manifest must be synced from a local manifest file. Hauler refuses a `Directories` document from a remote (`http://`/`https://`) manifest, and every `path` must be a local path rather than a URL.

### Example Manifest for Directories

```yaml title="hauler-directory-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Directories
metadata:
  name: hauler-content-directories-example
spec:
  directories:
    # add local directory (relative to this manifest)
    - path: path/to/local/configs
    # add local directory and assign new name
    - path: path/to/local/configs
      name: my-configs
    # add local directory with an absolute path
    - path: /opt/offline/repo
```

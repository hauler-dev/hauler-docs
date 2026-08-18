---
title: Hauler Store Add File
description: Hauler Store Add File Usage Documentation
sidebar_label: File
---

### Overview

`hauler store add file` stores an arbitrary file — local or fetched from an HTTP(S) URL — as an OCI artifact in the content store.

Use this to carry the bits that aren't images or charts but are still needed inside the airgap: install scripts, binaries, tarballs, RPMs, configuration, manifests, and the like. On the far side of the airgap these files can be handed out over HTTP with [`hauler store serve fileserver`](../serve/fileserver.md) or written back to disk with [`hauler store extract`](../extract.md). Pass `--name` to store the file under a friendlier name than the one derived from its path or URL (handy for URLs that don't end in a filename). For a repeatable set of files, list them in a [Hauler manifest](#hauler-manifest-for-files) and run [`hauler store sync`](../sync.md).

**An example with available flags...**

```bash
hauler store add file <file> --name <name>
```

### Command Overview

```yaml
Usage:
  hauler store add file [flags]

Examples:
# fetch local file
hauler store add file file.txt

# fetch remote file
hauler store add file https://get.rke2.io/install.sh

# fetch remote file and assign new name
hauler store add file https://get.hauler.dev --name hauler-install.sh

Flags:
  -h, --help          help for file
  -n, --name string   (Optional) Rewrite the name of the file

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```

### Example Commands for Files

```bash
# fetch local file
hauler store add file file.txt

# fetch remote file
hauler store add file https://get.rke2.io/install.sh

# fetch remote file and assign new name
hauler store add file https://get.hauler.dev --name hauler-install.sh
```

### Hauler Manifest for Files

```yaml title="hauler-file-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Files
metadata:
  name: hauler-content-files-example
spec:
  files:
    - path: <file>
      name: <name>
```

### Example Manifest for Files

```yaml title="hauler-file-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Files
metadata:
  name: hauler-content-files-example
spec:
  files:
    # fetch remote file
    - path: https://get.rke2.io
    # fetch remote file and assign new name
    - path: https://get.rke2.io
      name: install.sh
    # fetch local file
    - path: path/to/local/file.txt
    # fetch local file and assign new name
    - path: path/to/local/file.txt
      name: local-file.txt
```

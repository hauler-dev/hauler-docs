---
title: Hauler Store Add File
description: Hauler Store Add File Usage Documentation
sidebar_label: File
---

### Overview

`hauler store add file` adds a file to the store.

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
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
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
apiVersion: content.hauler.cattle.io/v1alpha1
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
apiVersion: content.hauler.cattle.io/v1alpha1
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
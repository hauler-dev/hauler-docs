---
title: Hauler Content - Files
description: Hauler Content - Files Documentation
sidebar_label: Files
---

## Hauler Command Line for Files

```bash
hauler store add file <file> --name <name>
```

## Example Commands for Files

```bash
# fetch local file
hauler store add file file.txt

# fetch remote file
hauler store add file https://get.rke2.io/install.sh

# fetch remote file and assign new name
hauler store add file https://get.hauler.dev --name hauler-install.sh
```

## Hauler Manifest for Files

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

## Example Manifest for Files

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

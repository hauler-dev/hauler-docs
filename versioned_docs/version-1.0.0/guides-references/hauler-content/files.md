---
title: Hauler Content - Files
description: Hauler Content - Files Documentation
sidebar_label: Files
---



## Hauler Command Line for Files

```bash
hauler store add file <file> --name <name>
```

## Hauler Manifest for Files

```yaml title="hauler-file-manfiest.yaml"
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

```yaml title="hauler-file-manfiest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Files
metadata:
  name: hauler-content-files-example
spec:
  files:
    # fetch remote file
    - path: https://get.rke2.io/install.sh
    # fetch remote file and new name
    - path: https://get.rke2.io
      name: remote-install.sh
    # fetch local file
    - path: rke2-install.sh
    # fetch remote file and new name
    - path: rke2-install.sh
      name: local-install.sh
```

---
title: Hauler Manifests
description: Hauler Manifests Documentation
sidebar_label: Hauler Manifests
---

## Example Manifest for Images

Please review the Hauler Content Pages for [Images](hauler-content/images.md) for more detailed information.

```yaml title="hauler-image-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: hauler-content-images-example
  annotations:
    # global flags for all images in the manifest
    # image flags override global flags
    hauler.dev/key: <cosign public key>
    hauler.dev/platform: <platform>
    hauler.dev/registry: <registry>
spec:
  images:
    # fetch image
    - name: neuvector/scanner
    # fetch image with full image reference
    - name: docker.io/neuvector/updater:latest
    # fetch image with full image reference with digest
    - name: docker.io/neuvector/updater@sha256:0076b356368c9988eec5f3cead771d29a377074b982f22800f4d9c8c3b215a56
    # fetch image with full image reference, specific version, specific platform
    - name: docker.io/longhornio/longhorn-ui:v1.6.0
      platform: linux/amd64
    # fetch image with full image reference, specific version, specific platform, and signature verification
    - name: docker.io/longhornio/longhorn-manager:v1.6.0
      key: <cosign public key>
      platform: linux/amd64
```

## Example Manifest for Charts

Please review the Hauler Content Pages for [Charts](hauler-content/charts.md) for more detailed information.

```yaml title="hauler-chart-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Charts
metadata:
  name: hauler-content-charts-example
spec:
  charts:
    # fetch helm chart
    - name: rancher
      repoURL: https://releases.rancher.com/server-charts/stable
    # fetch helm chart with specific version
    - name: rancher
      repoURL: https://releases.rancher.com/server-charts/stable
      version: 2.8.2
```

## Example Manifest for Files

Please review the Hauler Content Pages for [Files](hauler-content/files.md) for more detailed information.

```yaml title="hauler-file-manifest.yaml"
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

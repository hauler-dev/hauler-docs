---
title: Hauler Manifests
description: Hauler Manifests Documentation
sidebar_label: Hauler Manifests
---

## Example Manifest for Images

Please review the Hauler Content Pages for [Images](../hauler-usage/store/add/image.md) for more detailed information.

```yaml title="hauler-image-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Images
metadata:
  name: hauler-content-images-example
  annotations:
    # global flags for all images in the manifest
    # image flags override global flags
    # example: platform set globally, but not observed if set per image
    # example: registry set globally, but not observed if set per image
    hauler.dev/platform: <platform>
    hauler.dev/registry: <registry>
    # example: keyless signature validation set globally, but not observed if set per image
    hauler.dev/certificate-identity-regexp: <certificate-identity>
    hauler.dev/certificate-oidc-issuer: <certificate-issuer>
    # certificate repository for GH actions workflows
    hauler.dev/certificate-github-workflow-repository: <GH-repo>
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
      key: cosign-public-key.pub
      platform: linux/amd64
```

## Example Manifest for Charts

Please review the Hauler Content Pages for [Charts](../hauler-usage/store/add/chart.md) for more detailed information.

```yaml title="hauler-chart-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Charts
metadata:
  name: hauler-content-charts-example
  annotations:
  # example: key set globally, but not observed if set per image
  hauler.dev/key: <cosign-public-key>
  hauler.dev/registry: <registry>
spec:
  charts:
    # fetch helm chart
    - name: rancher
      repoURL: https://releases.rancher.com/server-charts/stable
    # fetch helm chart with specific version
    - name: rancher-cluster-templates
      repoURL: oci://ghcr.io/rancherfederal/charts
      version: 0.6.1
```

## Example Manifest for Files

Please review the Hauler Content Pages for [Files](../hauler-usage/store/add/file.md) for more detailed information.

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

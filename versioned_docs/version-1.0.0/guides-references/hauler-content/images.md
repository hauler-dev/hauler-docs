---
title: Hauler Content - Images
description: Hauler Content - Images Documentation
sidebar_label: Images
---



## Hauler Command Line for Images

```bash
hauler store add image <image reference> --platform <platform> --key <cosign public key>
```

## Hauler Manifest for Images

```yaml title="hauler-image-manfiest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: hauler-content-images-example
  annotations:
    hauler.dev/key: <cosign public key>
    hauler.dev/platform: <platform>
    hauler.dev/registry: <registry>
spec:
  images:
    - name: <image reference>
      key: <cosign public key>
      platform: <platform>
```

## Example Manifest for Images

```yaml title="hauler-image-manfiest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: hauler-content-images-example
  annotations:
    # global flags that will apply for each image
    # will be overwrote by specific image flags
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

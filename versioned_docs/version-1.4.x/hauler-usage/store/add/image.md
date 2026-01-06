---
title: Hauler Store Add Image
description: Hauler Store Add Image Usage Documentation
sidebar_label: Image
---

### Overview

`hauler store add image` adds a image to the store.

**An example with available flags...**

```bash
hauler store add image <image-reference> --platform <platform> --key <cosign-public-key>
```

### Command Overview

```yaml
Usage:
  hauler store add image [flags]

Examples:
# fetch image
hauler store add image busybox

# fetch image with repository and tag
hauler store add image library/busybox:stable

# fetch image with full image reference and specific platform
hauler store add image ghcr.io/hauler-dev/hauler-debug:v1.2.0 --platform linux/amd64

# fetch image with full image reference via digest
hauler store add image gcr.io/distroless/base@sha256:7fa7445dfbebae4f4b7ab0e6ef99276e96075ae42584af6286ba080750d6dfe5

# fetch image with full image reference, specific platform, and signature verification
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub
hauler store add image rgcrprod.azurecr.us/rancher/rke2-runtime:v1.31.5-rke2r1 --platform linux/amd64 --key carbide-key.pub

# fetch image and rewrite path
hauler store add image busybox --rewrite custom-path/busybox:latest

Flags:
  -h, --help              help for image
  -k, --key string        (Optional) Location of public key to use for signature verification
  -p, --platform string   (Optional) Specifiy the platform of the image... i.e. linux/amd64 (defaults to all)
  --use-tlog-verify bool  (Optional) Set transparency log verification (defaults false)
  --rewrite               (Optional) Rewrite the chart reference in the store (experimental)

Flags for Keyless Verification:
  --certificate-identity-regexp string               (Optional) OIDC identity tied to certificate
  --certificate-oidc-issuer string                   (Optional) OIDC issuer
  --certificate-github-workflow-repository string    (Optional) Repository claim from GH identity token for GitHub workflows

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
```

### Hauler Command Line for Images

```bash
hauler store add image <image-reference> --platform <platform> --key <cosign-public-key>
```

### Example Commands for Images

```bash
# fetch image
hauler store add image busybox

# fetch image with repository and tag
hauler store add image library/busybox:stable

# fetch image with full image reference and specific platform
hauler store add image ghcr.io/hauler-dev/hauler-debug:v1.0.7 --platform linux/amd64

# fetch image with full image reference via digest
hauler store add image gcr.io/distroless/base@sha256:7fa7445dfbebae4f4b7ab0e6ef99276e96075ae42584af6286ba080750d6dfe5

# fetch image with full image reference, specific platform, and signature verification
hauler store add image rgcrprod.azurecr.us/hauler/rke2-manifest.yaml:v1.28.12-rke2r1 --platform linux/amd64 --key carbide-key.pub

# fetch image and rewrite path
hauler store add image busybox --rewrite custom-path/busybox:latest
```

### Hauler Manifest for Images

```yaml title="hauler-image-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Images
metadata:
  name: hauler-content-images-example
  annotations:
    # global flags for all images in the manifest
    # image flags override global flags
    # example: key set globally, but not observed if set per image
    # example: platform set globally, but not observed if set per image
    # example: registry set globally, but not observed if set per image
    hauler.dev/key: <cosign-public-key>
    hauler.dev/platform: <platform>
    hauler.dev/registry: <registry>
spec:
  images:
    - name: <image-reference>
      key: <cosign-public-key>
      platform: <platform>
```

### Example Manifest for Images

```yaml title="hauler-image-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Images
metadata:
  name: hauler-content-images-example
  annotations:
    # global flags for all images in the manifest
    # image flags override global flags
    # example: key set globally, but not observed if set per image
    # example: platform set globally, but not observed if set per image
    # example: registry set globally, but not observed if set per image
    hauler.dev/key: <cosign-public-key>
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
      key: cosign-public-key.pub
      platform: linux/amd64
```

### Example Manifest with Rewrite

```yaml title="hauler-image-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Images
metadata:
  name: hauler-content-images-example
  annotations:
    # global flags for all images in the manifest
    # image flags override global flags
    # example: key set globally, but not observed if set per image
    # example: platform set globally, but not observed if set per image
    # example: registry set globally, but not observed if set per image
    hauler.dev/key: <cosign-public-key>
    hauler.dev/platform: <platform>
    hauler.dev/registry: <registry>
spec:
  images:
    - name: <image-reference>
      rewrite: <desired-image-reference>
      key: <cosign-public-key>
      platform: <platform>
```

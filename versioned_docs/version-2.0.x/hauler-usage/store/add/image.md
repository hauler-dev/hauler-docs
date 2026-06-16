---
title: Hauler Store Add Image
description: Hauler Store Add Image Usage Documentation
sidebar_label: Image
---

### Overview

`hauler store add image` pulls a container image from a registry (or the local Docker daemon) and stores it as an OCI artifact in the content store.

This is one of the imperative "collect" commands you run on the internet-connected side of an airgap. Use it to grab images one at a time while exploring or testing — for example, to confirm a reference resolves or to quickly add a single dependency. Once you know the full set of images you need, prefer a declarative [Hauler manifest](#hauler-manifest-for-images) with [`hauler store sync`](../sync.md) so the collection is reproducible and version-controlled. After images are in the store, you move them across the airgap with [`hauler store save`](../save.md) / [`hauler store load`](../load.md) and serve or push them with [`hauler store serve registry`](../serve/registry.md) or [`hauler store copy`](../copy.md).

By default each image is pulled for **all** platforms along with its cosign signatures, attestations, SBOMs, and OCI referrers. Use `--platform` to narrow the architecture and `--exclude-extras` to fetch only the image itself.

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

# add image from local Docker daemon
hauler store add image my-local-app:latest --local

Flags:
      --certificate-github-workflow-repository string   (Optional) Cosign certificate-github-workflow-repository option
      --certificate-identity string                     (Optional) Cosign certificate-identity (either --certificate-identity or --certificate-identity-regexp required for keyless verification)
      --certificate-identity-regexp string              (Optional) Cosign certificate-identity-regexp (either --certificate-identity or --certificate-identity-regexp required for keyless verification)
      --certificate-oidc-issuer string                  (Optional) Cosign option to validate oidc issuer
      --certificate-oidc-issuer-regexp string           (Optional) Cosign option to validate oidc issuer with regex
      --exclude-extras                                  (Optional) Exclude cosign signatures, attestations, SBOMs, and OCI referrers when pulling the image
  -h, --help                                            help for image
  -k, --key string                                      (Optional) Location of public key to use for signature verification
      --local                                           (Optional) Add image from the local Docker daemon instead of a remote registry
  -p, --platform string                                 (Optional) Specify the platform of the image... i.e. linux/amd64 (defaults to all)
      --rewrite string                                  (Optional) Rewrite artifact path to specified string
      --use-tlog-verify                                 (Optional) Enable transparency log verification for key-based signature verification (keyless/OIDC verification always uses the tlog)

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
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

# fetch image without its associated signatures, attestations, SBOMs, and referrers
hauler store add image busybox --exclude-extras

# add image from the local Docker daemon instead of a remote registry
hauler store add image my-local-app:latest --local
```

### Adding an Image from the Local Docker Daemon

The `--local` flag adds an image directly from the local Docker daemon instead of pulling it from a remote registry. This is useful for images you have built locally and not yet pushed anywhere.

```bash
hauler store add image my-local-app:latest --local
```

> **Note:** `--local` cannot be combined with cosign verification flags (`--key`, `--certificate-identity`, etc.) or `--platform`, since the image is read directly from the daemon.

### Excluding Extras

By default, adding an image also pulls its associated cosign signatures, attestations, SBOMs, and OCI referrers. Pass `--exclude-extras` to fetch only the image itself:

```bash
hauler store add image busybox --exclude-extras
```

### Hauler Manifest for Images

Per-image fields override manifest-level annotations, which override CLI flags. The following shows all supported per-image fields and annotations:

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
    hauler.dev/use-tlog-verify: "true"
    hauler.dev/rewrite: <rewrite-prefix>
    hauler.dev/exclude-extras: "true"
    hauler.dev/certificate-identity: <cosign-certificate-identity>
    hauler.dev/certificate-identity-regexp: <cosign-certificate-identity-regexp>
    hauler.dev/certificate-oidc-issuer: <cosign-oidc-issuer>
    hauler.dev/certificate-oidc-issuer-regexp: <cosign-oidc-issuer-regexp>
    hauler.dev/certificate-github-workflow-repository: <cosign-github-workflow-repository>
spec:
  images:
    - name: <image-reference>
      # path to the cosign public key for signature verification
      key: <cosign-public-key>
      # platform of the image to pull (defaults to all)
      platform: <platform>
      # rewrite the artifact path in the store
      rewrite: <desired-image-reference>
      # exclude cosign signatures, attestations, SBOMs, and OCI referrers
      exclude-extras: false
      # add the image from the local Docker daemon instead of a remote registry
      local: false
      # enable transparency log verification for key-based verification
      use-tlog-verify: false
      # keyless (cosign certificate) verification options
      certificate-identity: <cosign-certificate-identity>
      certificate-identity-regexp: <cosign-certificate-identity-regexp>
      certificate-oidc-issuer: <cosign-oidc-issuer>
      certificate-oidc-issuer-regexp: <cosign-oidc-issuer-regexp>
      certificate-github-workflow-repository: <cosign-github-workflow-repository>
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

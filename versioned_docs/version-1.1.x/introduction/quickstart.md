---
title: Quickstart
description: Quickstart Documentation for Hauler
sidebar_label: Quickstart
---

Skipping past most of the documentation? Here's an easy to follow Quick Start Guide:

## Quick Installation

```bash
# install latest release
curl -sfL https://get.hauler.dev | bash
```

## Getting Started with Hauler

### Add Content to the Hauler Store

<details open>
<summary><b>Using the Command Line:</b></summary>

```bash
# add a image... defaults to docker.io
hauler store add image neuvector/scanner:latest

# add a image with a specific platform and with supply chain artifacts
# may not work for all users due to the specified registry
hauler store add image rgcrprod.azurecr.us/longhornio/longhorn-ui:v1.7.1 --platform linux/amd64 --key carbide-key.pub

# add a helm chart with a specific version
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable --version 2.9.2

# add a file and assign it a new name
hauler store add file https://get.rke2.io --name install.sh
```

</details>

<details>
<summary><b>Using a Hauler Manifest:</b></summary>

```bash
# fetch the content via a declarative manifest
hauler store sync --files hauler-manifest.yaml
```

---

```yaml title="hauler-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: hauler-content-images-example
spec:
  images:
    - name: busybox
    - name: busybox:stable
      platform: linux/amd64
    - name: gcr.io/distroless/base@sha256:7fa7445dfbebae4f4b7ab0e6ef99276e96075ae42584af6286ba080750d6dfe5
---
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Charts
metadata:
  name: hauler-content-charts-example
spec:
  charts:
    - name: rancher
      repoURL: https://releases.rancher.com/server-charts/stable
      version: 2.9.2
    - name: hauler-helm
      repoURL: oci://ghcr.io/hauler-dev
---
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Files
metadata:
  name: hauler-content-files-example
spec:
  files:
    - path: https://get.rke2.io
      name: install.sh
    - path: hauler-manifest.yaml
```

</details>

### View the Hauler Store

```bash
# view and verify the content in the local hauler store
hauler store info
```

### Save the Hauler Store

```bash
# save and export the content in the local hauler store
hauler store save --filename haul.tar.zst
```

---
---
---

### Airgap the `haul.tar.zst` (aka the "haul")

For this quickstart and example use of `hauler`, we can simulate airgapping to the disconnected environment by deleting the "store" directory with the following command: `rm -rf store`

---
---
---

### Load the Airgapped Hauler Store

```bash
# load and import the airgapped content to the new local hauler store
hauler store load haul.tar.zst
```

### Serve the Hauler Store

```bash
# serve the content as a readonly registry from the hauler store
# defaults to <FQDN or IP>:5000
hauler store serve registry

# serve the file content as a fileserver from the hauler store
# defaults to <FQDN or IP>:8080
hauler store serve fileserver
```

### Copy the Hauler Store

```bash
# copy the content to a registry from the hauler store
# copies oci compliant artifacts
hauler store copy registry://registry.example.com

# copy the content to a directory from the hauler store
# copies non oci compliant artifacts
hauler store copy dir://hauler-files
```

### Extract Content from the Hauler Store

```bash
# extracts artifacts from the hauler store to disk
hauler store extract hauler/rancher:2.9.2
```

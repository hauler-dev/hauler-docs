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

## Example Use of Hauler

### Add Content to the Hauler Store

#### Using the Command Line:

```bash
# add a image: neuvector/scanner:latest
hauler store add image neuvector/scanner:latest --platform linux/amd64

# add a image with supply chain artifacts
hauler store add image rgcrprod.azurecr.us/longhornio/longhorn-ui:v1.5.2 --key carbide-key.pub --platform linux/amd64

# add a chart: rancher-stable/rancher (v2.8.2)
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable --version 2.8.2

# add a file: rke2-install.sh
hauler store add file https://get.rke2.io --name install.sh
```

#### Using a Hauler Manifest:

```bash
hauler store sync --files hauler-manfiest.yaml
```

```yaml title="hauler-manfiest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: hauler-content-images-example
spec:
  images:
    - name: neuvector/scanner:latest
    - name: rgcrprod.azurecr.us/longhornio/longhorn-ui:v1.5.1
      key: carbide-key.pub
      platform: linux/amd64
---
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Charts
metadata:
  name: hauler-content-charts-example
spec:
  charts:
    - name: rancher
      repoURL: https://releases.rancher.com/server-charts/stable
      version: 2.8.2
---
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Files
metadata:
  name: hauler-content-files-example
spec:
  files:
    - path: https://get.rke2.io
      name: install.sh
```

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

**airgap the `haul.tar.zst` to the disconnected environment**

---

### Load the Airgapped Hauler Store

```bash
# load and import the airgapped content to the new local hauler store
hauler store load haul.tar.zst
```

### Serve the Hauler Store

```bash
# serve the content as a registry from the hauler store
# defaults to <FQDN or IP>:5000
hauler store serve registry

# serve the file content as a fileserver from the hauler store
# defaults to <FQDN or IP>:8080
hauler store serve fileserver
```

### Copy the Hauler Store to a Registry

```bash
# copy the content to a registry from the hauler store
# copies oci compliant artifacts
hauler store copy registry://harbor.example.com
```

### Copy the Hauler Store to a Directory

```bash
# copy the content to a directory from the hauler store
# copies non oci compliant artifacts
hauler store copy dir://hauler-files
```

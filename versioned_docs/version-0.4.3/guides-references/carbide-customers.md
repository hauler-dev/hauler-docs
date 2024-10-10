---
title: RGS Carbide Customers
description: RGS Carbide Customers Documentation
sidebar_label: RGS Carbide Customers
---

For all supported customers of Rancher Government, under the umbrella of Rancher Government Carbide, there is addon functionality within `Hauler`.

`Hauler` has the the ability to reference pre-defined `Hauler` manifests from the Carbide Secured Registry (CSR). `Hauler` is built to allow users to fetch, store, package, and distribute content and collections, but most users may be unsure of what to fetch, store, package, and distribue and that is where our supported customers are able to leverage these pre-defined manifests for all of the Rancher products. Below are some of the available `product` flags.

RGS Carbide Setup Documentation: https://rancherfederal.github.io/carbide-docs/docs/intro

RGS Carbide Public Key: https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

### Example Workflow for Carbide

```bash
# with signature verification
hauler store sync --products carbide=v0.1.1 --key carbide-key.pub --platform linux/amd64

# without signature verification
hauler store sync --products carbide=v0.1.1 --platform linux/amd64
```

### Example Workflow for RKE2

```bash
# with signature verification
hauler store sync --products rke2=v1.26.11+rke2r1 --key carbide-key.pub --platform linux/amd64

# without signature verification
hauler store sync --products rke2=v1.26.11+rke2r1 --platform linux/amd64
```

### Example Workflow for K3S

```bash
# with signature verification
hauler store sync --products k3s=v1.26.11-k3s2 --key carbide-key.pub --platform linux/amd64

# without signature verification
hauler store sync --products k3s=v1.26.11-k3s2 --platform linux/amd64
```

### Example Workflow for Rancher

```bash
# with signature verification
hauler store sync --products rancher=v2.8.1 --key carbide-key.pub --platform linux/amd64

# without signature verification
hauler store sync --products rancher=v2.8.1 --platform linux/amd64
```

### Example Workflow for Cert-Manager

```bash
# with signature verification
hauler store sync --products cert-manager=v1.13.3 --key carbide-key.pub --platform linux/amd64

# without signature verification
hauler store sync --products cert-manager=v1.13.3 --platform linux/amd64
```

### Example Workflow for Longhorn

```bash
# with signature verification
hauler store sync --products longhorn=v1.5.3 --key carbide-key.pub --platform linux/amd64

# without signature verification
hauler store sync --products longhorn=v1.5.3 --platform linux/amd64
```

### Example Workflow for NeuVector

```bash
# with signature verification
hauler store sync --products neuvector=v2.6.6 --key carbide-key.pub --platform linux/amd64

# without signature verification
hauler store sync --products neuvector=v2.6.6 --platform linux/amd64
```

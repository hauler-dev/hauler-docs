---
title: Hauler Store Sync
description: Hauler Store Sync Usage Documentation
sidebar_label: Sync
---

### Overview

`hauler store sync` syncs content to the content store.

**An example with available flags...**

```bash

```

### Command Overview

```yaml
Usage:
  hauler store sync [flags]

Flags:
  -f, --files strings             Location of content manifests (files)... i.e. --files ./rke2-files.yaml
  -h, --help                      help for sync
  -k, --key string                (Optional) Location of public key to use for signature verification
  -p, --platform string           (Optional) Specify the platform of the image... i.e linux/amd64 (defaults to all)
  -c, --product-registry string   (Optional) Specify the product registry. Defaults to RGS Carbide Registry (rgcrprod.azurecr.us)
      --products strings          (Optional) Specify the product name to fetch collections from the product registry i.e. rancher=v2.8.5,rke2=v1.28.11+rke2r1
  -r, --registry string           (Optional) Specify the registry of the image for images that do not alredy define one

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string    (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

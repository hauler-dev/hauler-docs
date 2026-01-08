---
title: Hauler Store Sync
description: Hauler Store Sync Usage Documentation
sidebar_label: Sync
---

### Overview

`hauler store sync` syncs content to the content store.

**An example with available flags...**

```bash
hauler store sync --filename <file-name> --platform <platform> --key <cosign-public-key> --registry <registry-url>
```

### Command Overview

```yaml
Usage:
  hauler store sync [flags]

Flags:
      --certificate-github-workflow-repository string   (Optional) Cosign certificate-github-workflow-repository option
      --certificate-identity string                     (Optional) Cosign certificate-identity (either --certificate-identity or --certificate-identity-regexp required for keyless verification)
      --certificate-identity-regexp string              (Optional) Cosign certificate-identity-regexp (either --certificate-identity or --certificate-identity-regexp required for keyless verification)
      --certificate-oidc-issuer string                  (Optional) Cosign option to validate oidc issuer
      --certificate-oidc-issuer-regexp string           (Optional) Cosign option to validate oidc issuer with regex
  -f, --filename strings                                Specify the name of manifest(s) to sync (default [hauler-manifest.yaml])
  -h, --help                                            help for sync
  -k, --key string                                      (Optional) Location of public key to use for signature verification
  -p, --platform string                                 (Optional) Specify the platform of the image... i.e linux/amd64 (defaults to all)
  -c, --product-registry string                         (Optional) Specify the product registry. Defaults to RGS Carbide Registry (rgcrprod.azurecr.us)
      --products strings                                (Optional) Specify the product name to fetch collections from the product registry i.e. rancher=v2.10.1,rke2=v1.31.5+rke2r1
  -g, --registry string                                 (Optional) Specify the registry of the image for images that do not alredy define one
      --rewrite string                                  (Optional) Rewrite artifact path to specified string (EXPERIMENTAL)
      --use-tlog-verify                                 (Optional) Allow transparency log verification (defaults to false)

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```

---
title: Introduction
description: Introduction to Rancher Government Hauler
sidebar_label: Introduction
---

# Rancher Government Hauler

# Airgap Swiss Army Knife

:::caution

**Please Note:** Hauler and the Hauler Documentation are recently Generally Available (GA).

Please help us by submitting any issues via **[GitHub Issues](https://github.com/hauler-dev/hauler-docs/issues)** and make sure to review the **[Known Issues and Limitations](/docs/known-limits)**!

:::

## What's Hauler?

`Rancher Government Hauler` simplifies the airgap experience without requiring operators to adopt a specific workflow. `Hauler` simplifies the airgapping process, by representing assets (images, charts, files, etc...) as content and collections to allow operators to easily fetch, store, package, and distribute these assets with declarative manifests or through the command line.

`Hauler` does this by storing contents and collections as OCI Artifacts and allows operators to serve contents and collections with an embedded registry and fileserver. Additionally, `Hauler` has the ability to store and inspect various non-image OCI Artifacts.

## Acknowledgements

`Hauler` wouldn't be possible without the open-source community, but there are a few projects that stand out:

- [oras cli](https://github.com/oras-project/oras)
- [cosign](https://github.com/sigstore/cosign)
- [go-containerregistry](https://github.com/google/go-containerregistry)

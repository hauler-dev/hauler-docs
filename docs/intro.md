---
title: Introduction
description: Introduction to Rancher Government Hauler
sidebar_label: Introduction
sidebar_position: 1
---

# Rancher Government Hauler

## Airgap Swiss Army Knife

> ⚠️ This project is still in active development and _not_ Generally Available (GA). Most of the core functionality and features are ready, but may have breaking changes. Please review the [Release Notes](https://github.com/rancherfederal/hauler/releases) for more information!

`Rancher Government Hauler` simplifies the airgap experience without requiring users to adopt a specific workflow. **Hauler** simplifies the airgapping process, by representing assets (images, charts, files, etc...) as content and collections to allow users to easily fetch, store, package, and distribute these assets with declarative manifests or through the command line.

`Hauler` does this by storing contents and collections as OCI Artifacts and allows users to serve contents and collections with an embedded registry and fileserver. Additionally, `Hauler` has the ability to store and inspect various non-image OCI Artifacts.

## Acknowledgements

`Hauler` wouldn't be possible without the open-source community, but there are a few projects that stand out:

- [go-containerregistry](https://github.com/google/go-containerregistry)
- [oras cli](https://github.com/oras-project/oras)
- [cosign](https://github.com/sigstore/cosign)

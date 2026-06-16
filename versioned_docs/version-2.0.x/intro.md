---
title: Introduction
description: Docs for Hauler, An Airgap Swiss-Army Knife provided by Rancher Government
sidebar_label: Introduction
---

# Hauler — Airgap Swiss Army Knife

![hauler-logo](/img/rgs-hauler-logo.png)

## What is Hauler?

`Hauler` simplifies the airgap experience without forcing operators to adopt a specific workflow. It represents assets — images, charts, files, and more — as **content** and **collections**, so you can easily fetch, store, package, and distribute them using declarative manifests or the command line.

Under the hood, `Hauler` stores content and collections as OCI Artifacts and can serve them on the disconnected side through an embedded registry and fileserver. It can also store and inspect a variety of non-image OCI Artifacts.

## Why Hauler?

Moving software into an airgapped environment usually means juggling several tools and bespoke scripts. `Hauler` consolidates that work into a single binary:

- **Fetch** images, charts, and files from any OCI-compatible source.
- **Store** them together as OCI Artifacts in a portable, self-contained archive (a `Haul`).
- **Package** everything into a single tarball you can carry across the airgap.
- **Serve** the contents on the disconnected side with the built-in registry and fileserver.
- **Seed** an existing private registry with the contents of your `Haul`.
- **Verify** artifact signatures with [cosign](https://github.com/sigstore/cosign) on both sides of the airgap.

Operators can drive all of this declaratively with [manifests](guides-references/hauler-manifests.md) for a reproducible workflow, or interactively through the CLI.

## Next Steps

- New to Hauler? Start with the [Core Concepts](core-concepts.md) to learn how Hauls, Collections, and Content fit together.
- Ready to try it? Head to the [Quickstart](getting-started/quickstart.md).

## Acknowledgements

`Hauler` wouldn't be possible without the open-source community, but there are a few projects that stand out:

- [oras cli](https://github.com/oras-project/oras)
- [cosign](https://github.com/sigstore/cosign)
- [go-containerregistry](https://github.com/google/go-containerregistry)

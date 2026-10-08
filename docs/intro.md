---
title: Introduction
description: Docs for Hauler, an Airgap Swiss Army Knife, developed and maintained by Rancher Government
sidebar_label: Introduction
---

# Hauler - Airgap Swiss Army Knife

![hauler-logo](/img/hauler-logo.png)

## What is Hauler?

`Hauler` simplifies delivering software into disconnected and airgapped environments without requiring operators to adopt a specific workflow. Hauler represents artifacts (images, charts, files, and more) as content and collections, so operators can fetch, store, package, and distribute them with declarative manifests or the command line.

`Hauler` carries your artifacts and their supply chain into disconnected and airgapped environments. Every artifact keeps its signatures, attestations, and SBOMs, and can be verified before it is saved and again after it is loaded, so teams on the disconnected and airgapped side know exactly what they received and where it originated.

`Hauler` replaces the custom scripts and ad hoc tooling that disconnected and airgapped delivery usually requires. It is one binary, one archive, and one workflow, from a single file to entire product suites on Linux, macOS, or Windows, so teams spend less time moving software and more time using it.

`Hauler` is proudly developed and maintained by **[Rancher Government](https://github.com/ranchergovernment)!!**

## Why Hauler?

Moving software into disconnected and airgapped environments usually means juggling several tools and bespoke scripts. `Hauler` consolidates that work into a single binary:

- **Fetch** images, charts, and files from registries, helm repositories, and urls.
- **Validate** signatures and attestations with [cosign](https://github.com/sigstore/cosign) before anything is saved.
- **Save** everything as OCI artifacts into a single portable `haul`.
- **Airgap** the `haul` into disconnected and airgapped environments, chunked if your transfer media requires it.
- **Load** the `haul` on the disconnected and airgapped side and validate it again.
- **Distribute** the contents through the built-in registry and fileserver, or copy them into an existing registry.

Operators can drive all of this declaratively with [manifests](guides-references/hauler-manifests.md) for a reproducible workflow, or interactively through the CLI.

## Next Steps

- New to Hauler? Start with the [Core Concepts](core-concepts.md) to learn how Hauls, Collections, and Content fit together.
- Ready to try it? Head to the [Quickstart](getting-started/quickstart.md).

## Acknowledgements

`Hauler` wouldn't be possible without the open-source community, but there are a few projects that stand out:

- [containerd](https://github.com/containerd/containerd)
- [go-containerregistry](https://github.com/google/go-containerregistry)
- [cosign](https://github.com/sigstore/cosign)

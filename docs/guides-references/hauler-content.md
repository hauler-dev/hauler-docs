---
title: Hauler Content
description: Hauler Content Documentation
sidebar_label: Hauler Content
---

`Content` is the smallest unit Hauler works with — the actual artifacts you collect, carry across the airgap, and serve on the other side. Every `Haul` is ultimately just a bundle of content grouped into [collections](hauler-collections.md). For how these pieces nest together, see [Core Concepts](../core-concepts.md).

Hauler recognizes three kinds of content, and stores each one as an [OCI-compliant artifact](#oci-compliant-artifacts) in its content store.

## Content Types

### Images

Container images are pulled from a registry (or the local Docker daemon) and stored alongside their cosign signatures, attestations, SBOMs, and OCI referrers. By default an image is fetched for **all** platforms; narrow this with `--platform`, or fetch only the image itself with `--exclude-extras`.

See [Hauler Store Add Image](../hauler-usage/store/add/image.md) for the full set of flags and manifest fields.

### Charts

Helm charts are fetched from an HTTP(S) repository, an OCI registry, or a local path. A chart on its own does not bring the container images it deploys — those live in separate registries. Use `--add-images` to also collect the images referenced by a chart's templates and image lock files, and `--add-dependencies` to pull dependent (subchart) charts.

See [Hauler Store Add Chart](../hauler-usage/store/add/chart.md) for details.

### Files

Files cover everything that isn't an image or a chart but still needs to make it across the airgap — install scripts, binaries, tarballs, RPMs, configuration, and manifests. Files can be fetched from a local path or an HTTP(S) URL, and optionally stored under a friendlier name with `--name`.

See [Hauler Store Add File](../hauler-usage/store/add/file.md) for details.

## OCI Compliant Artifacts

Whatever the content type, Hauler stores it as an artifact that conforms to the [Open Container Initiative (OCI)](https://opencontainers.org/) specification. Representing images, charts, and files in a single, standardized format is what lets Hauler treat them uniformly — bundling them into a `Haul`, pushing them to any OCI registry, and serving them on the disconnected side without per-type handling.

## Adding Content

There are two ways to add content to the store:

- **Imperatively**, one artifact at a time, with the `hauler store add` commands. This is ideal for exploring or testing — confirming a reference resolves or grabbing a single dependency.
- **Declaratively**, by describing the full set of content in a [Hauler manifest](hauler-manifests.md) and applying it with [`hauler store sync`](../hauler-usage/store/sync.md). This keeps your content reproducible and version-controlled, and is the recommended approach once you know what you need.

Per-artifact fields override manifest-level annotations, which override CLI flags — so a manifest can set sensible defaults globally while still allowing per-artifact overrides.

## Signature Verification

As part of a secure supply chain, content can be verified against cosign signatures both when it is added to the store and when it is used to seed a registry on the far side of the airgap. Verification supports both public-key and keyless (certificate-based) workflows. See [Signature Verification](../core-concepts.md#signature-verification) and the [Hauler Manifests](hauler-manifests.md) guide for examples.

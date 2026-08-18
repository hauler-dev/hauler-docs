---
title: Pushing Custom Product Manifests
description: How to Push Custom Product Manifests to Your Own Registry for use with Hauler Store Sync --products
sidebar_label: Pushing Custom Products
---

### Overview

The [`--products`](../hauler-usage/store/sync.md) flag on `hauler store sync` fetches a curated [`Collection`](hauler-collections.md) manifest for a named product directly from a product registry, then syncs all of its content. By default, `Hauler` resolves these from the RGS Carbide Registry (`rgcrprod.azurecr.us`), but any OCI-compliant registry can serve product manifests as long as they are pushed using the same layout `Hauler` expects.

This guide walks through publishing your own product manifests to a custom OCI registry, and consuming them with `--products` / `--product-registry`.

### The `hauler` Namespace Requirement

`Hauler` always looks for product manifests under a fixed `hauler/` namespace (repository path) within the target registry, regardless of which registry is used. Given a registry of `<registry>`, the resolved reference is always:

```
<registry>/hauler/<product>-manifest.yaml:<tag>
```

For example, a product named `rke2` pushed to `registry.example.com` must live at:

```
registry.example.com/hauler/rke2-manifest.yaml
```

> **Note:** The `hauler/` namespace is not configurable. If a manifest is pushed to any other repository path, `hauler store sync --products` will not be able to locate it.

### Versioning via the OCI Tag

When you run `hauler store sync --products <product>=<version>`, `Hauler` maps the `<version>` portion directly to an OCI tag, with one transformation: any `+` characters are replaced with `-`, since `+` is not a valid character in an OCI tag.

| `--products` value | Resolved OCI reference |
| --- | --- |
| `rancher=v2.10.1` | `<registry>/hauler/rancher-manifest.yaml:v2.10.1` |
| `rke2=v1.31.5+rke2r1` | `<registry>/hauler/rke2-manifest.yaml:v1.31.5-rke2r1` |

This means when you push a manifest for a given product release, the tag you push it under must be the same `+`-to-`-` normalized form of the version string customers will pass to `--products`.

### Pushing the Manifest to a Registry

A product manifest is just a standard [Hauler manifest](hauler-manifests.md) (an `Images`, `Charts`, or `Files` document, or multiple documents combined) saved as `<product>-manifest.yaml`. `Hauler` reads it back as a single-file OCI artifact, so the artifact's layer must carry an `org.opencontainers.image.title` annotation matching the manifest's filename. This is exactly what `oras push` sets by default when pushing a local file.

Using [`oras`](https://oras.land):

```bash
# authenticate to your registry, if required
oras login <registry-url>

# push a product manifest
# the file name on disk must match <product>-manifest.yaml
# the tag must match the normalized version (+ replaced with -)
oras push <registry-url>/hauler/<product>-manifest.yaml:<tag> \
  ./<product>-manifest.yaml:application/yaml
```

For example, to publish version `v1.31.5+rke2r1` of an `rke2` product collection to `registry.example.com`:

```bash
oras push registry.example.com/hauler/rke2-manifest.yaml:v1.31.5-rke2r1 \
  ./rke2-manifest.yaml:application/yaml
```

> **Note:** The repository path (`hauler/rke2-manifest.yaml`) and the file pushed (`rke2-manifest.yaml`) must use the same `<product>-manifest.yaml` name. `Hauler` selects the layer to extract by matching this filename against the layer's title annotation, not by layer order.

### Using the CLI After Pushing

Once a manifest has been pushed, point `hauler store sync` at your registry with `--product-registry`, and reference the product with `--products` using the same `name=version` pair you tagged it with:

```bash
# sync a product from your custom registry
hauler store sync --products <product>=<version> --product-registry <registry-url>
```

Continuing the `rke2` example:

```bash
hauler store sync --products rke2=v1.31.5+rke2r1 --product-registry registry.example.com
```

`Hauler` will:

1. Resolve the reference to `registry.example.com/hauler/rke2-manifest.yaml:v1.31.5-rke2r1`.
2. Pull the manifest artifact and extract the `rke2-manifest.yaml` layer.
3. Process the manifest's `Images`, `Charts`, and/or `Files` content into the local store, the same as if it had been passed via `--filename`.

Multiple products from the same registry can be combined in a single invocation:

```bash
hauler store sync --products rancher=v2.10.1,rke2=v1.31.5+rke2r1 --product-registry registry.example.com
```

You can also preview the resolved manifest content before syncing it with `--dry-run` (requires `--products`):

```bash
hauler store sync --products rke2=v1.31.5+rke2r1 --product-registry registry.example.com --dry-run
```

> **Note:** `--product-registry` only changes where `--products` looks for manifests; it does not affect `--filename` or `--image-txt` sources.
---
title: Artifact References
description: Artifact Reference Behavior Documentation
sidebar_label: Artifact References
---

When you add an image to the store, the reference you type on the command line is not always the reference the store records. Missing registries, namespaces, and tags are filled in with defaults, and the resulting name is what [`hauler store info`](../hauler-usage/store/info.md) displays. This ensures that artifact references are OCI-compliant.

This guide traces how an image reference is transformed by [`hauler store add image`](../hauler-usage/store/add/image.md) or [`hauler store sync`](../hauler-usage/store/sync.md). The normalization from the argument you provide, to the annotations written on the stored [OCI artifact](hauler-content.md#oci-compliant-artifacts), to the reference shown back to you is outlined to ensure predictable behavior with Hauler.

## How It Works

Every reference passed to `hauler store add image` moves through three stages:

1. **Parsed for fetching.** A reference without a registry resolves to Docker Hub. The registry defaults to `index.docker.io`, a single-segment repository gains the `library/` namespace, and a missing tag becomes `latest`. This fully-qualified name is what Hauler pulls, allowing a command such as `hauler store add image nginx` to correctly pull the image from `index.docker.io/library/nginx:latest`.

2. **Recorded as annotations.** The stored artifact carries three annotations, all derived from the fully-qualified reference:

   | Annotation | Value |
   |---|---|
   | `org.opencontainers.image.ref.name` | The reference with the registry prefix stripped (OCI standard) |
   | `io.containerd.image.name` | The canonical form of the reference, registry included |
   | `hauler.dev/original-ref` | The full original reference, captured at add-time for provenance |

3. **Resolved for display.** `hauler store info` prefers `io.containerd.image.name`, which already holds a complete `registry/repository:tag`. It falls back to `org.opencontainers.image.ref.name` only when that annotation is absent. 

## Examples

### Example 1: Bare Image Name

```bash
hauler store add image nginx
```

| Stage | Value |
|---|---|
| Input | `nginx` |
| Fetched as | `index.docker.io/library/nginx:latest` |
| `org.opencontainers.image.ref.name` | `library/nginx:latest` |
| `io.containerd.image.name` | `docker.io/library/nginx:latest` |
| `hauler.dev/original-ref` | `index.docker.io/library/nginx:latest` |
| **Displayed by `store info`** | `docker.io/library/nginx:latest` |

The input is fully expanded to pull from the Docker Hub registry, the `library/` namespace, and the `latest` tag.

---

### Example 2: Namespaced Image Name

```bash
hauler store add image rancher/rancher
```

| Stage | Value |
|---|---|
| Input | `rancher/rancher` |
| Fetched as | `index.docker.io/rancher/rancher:latest` |
| `org.opencontainers.image.ref.name` | `rancher/rancher:latest` |
| `io.containerd.image.name` | `docker.io/rancher/rancher:latest` |
| `hauler.dev/original-ref` | `index.docker.io/rancher/rancher:latest` |
| **Displayed by `store info`** | `docker.io/rancher/rancher:latest` |

A two-segment name already has a namespace, so `library/` is not added. Only the registry and the `latest` tag are inferred.

---

### Example 3: Fully Qualified Image Name

```bash
hauler store add image private.registry.com/my-image:dev
```

| Stage | Value |
|---|---|
| Input | `private.registry.com/my-image:dev` |
| Fetched as | `private.registry.com/my-image:dev` |
| `org.opencontainers.image.ref.name` | `my-image:dev` |
| `io.containerd.image.name` | `private.registry.com/my-image:dev` |
| `hauler.dev/original-ref` | `private.registry.com/my-image:dev` |
| **Displayed by `store info`** | `private.registry.com/my-image:dev` |

Nothing is inferred, because the registry and tag are both explicit. Note that stripping the registry leaves `org.opencontainers.image.ref.name` as a single-segment `my-image:dev`. Because the regsitry is not docker.io, `library/` is not inferred.

---

### Example 4: Image Name with a Rewrite

```bash
hauler store add image nginx --rewrite custom-nginx
```

The image is stored exactly as in [Example 1](#example-1-bare-image-name), then retagged in place. Because `custom-nginx` specifies no tag, the source tag (`latest`) is carried over, and because it specifies no registry, the source registry is preserved.

| Stage | Value |
|---|---|
| Input | `nginx` with `--rewrite custom-nginx` |
| `org.opencontainers.image.ref.name` (after rewrite) | `custom-nginx:latest` |
| `io.containerd.image.name` (after rewrite) | `index.docker.io/custom-nginx:latest` |
| `hauler.dev/original-ref` (after rewrite) | `index.docker.io/library/nginx:latest` *(unchanged)* |
| **Displayed by `store info`** | `index.docker.io/custom-nginx:latest` |

`hauler.dev/original-ref` is intentionally left alone so the original pullable reference is preserved even after a rewrite. Without explicit specification, `library/` is not preserved in the rewrite since the `index.docker.io/library` path will not resolve with the new reference. See the [Rewriting Artifacts](rewriting-artifacts.md) guide for more on the `--rewrite` flag.

---

## Summary

| Command | `store info` display | Store key |
|---|---|---|
| `hauler store add image nginx` | `docker.io/library/nginx:latest` | `library/nginx:latest` |
| `hauler store add image rancher/rancher` | `docker.io/rancher/rancher:latest` | `rancher/rancher:latest` |
| `hauler store add image private.registry.com/my-image:dev` | `private.registry.com/my-image:dev` | `my-image:dev` |
| `hauler store add image nginx --rewrite custom-nginx` | `index.docker.io/custom-nginx:latest` | `custom-nginx:latest` |

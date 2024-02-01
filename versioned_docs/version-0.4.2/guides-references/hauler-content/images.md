---
title: Images (Content Type)
description: Hauler "Images" Content Documentation
sidebar_label: Images
---

Any OCI compatible image can be fetched remotely:

```yaml
# "shorthand"  image references
hauler store add image rancher/rancher:v2.7.9

# fully qualified image references
hauler store add image ghcr.io/fluxcd/flux-cli@sha256:02aa820c3a9c57d67208afcfc4bce9661658c17d15940aea369da259d2b976dd
```
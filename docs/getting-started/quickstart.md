---
title: Quickstart Guide
description: Quickstart Guide for Hauler
sidebar_label: Quickstart Guide
sidebar_position: 2
---

## Hauler Quickstart

TLDR for how to use `hauler` to fetch, store, package, validate, and distribute `contents`

```bash
# fetch some content
hauler store add file "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
hauler store add chart longhorn --repo "https://charts.longhorn.io"
hauler store add image "rancher/cowsay"

# view the content
hauler store info

# package the content
hauler store save

# <- airgap the haul.tar.zst file ->

# load the content
hauler store load

# distribute the content
hauler store serve
```

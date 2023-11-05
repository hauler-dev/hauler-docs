---
title: Quickstart Guide
description: Quickstart Documentation for Hauler
sidebar_label: Quickstart Guide
---

Skipping past most of the documentation? Here's an easy to follow Quick Start Guide:

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

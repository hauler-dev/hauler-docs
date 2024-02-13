---
title: Charts (Content Type)
description: Hauler "Charts" Content Documentation
sidebar_label: Charts
---

:::tip

Hauler supports the experimental format of Helm Chart OCI Artifacts, but can also be represented as the usual Tarball Artifact!

:::

Helm charts represented as OCI content:

```bash
# add a helm chart (defaults to latest version)
hauler store add chart loki --repo https://grafana.github.io/helm-charts

# add a specific version of a helm chart
hauler store add chart loki --repo https://grafana.github.io/helm-charts --version 5.42.2

# install directly from the oci content
helm install loki oci://localhost:3000/library/loki --version 5.42.2
```

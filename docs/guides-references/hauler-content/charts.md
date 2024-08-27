---
title: Hauler Content - Charts
description: Hauler Content - Charts Documentation
sidebar_label: Charts
---

## Hauler Command Line for Charts

```bash
hauler store add chart <chart name> --repo <chart repository> --version <chart version>
```

## Example Commands for Charts

```bash
# fetch local helm chart
hauler store add chart path/to/chart/directory

# fetch local compressed helm chart
hauler store add chart path/to/chart.tar.gz

# fetch remote oci helm chart
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev

# fetch remote oci helm chart with version
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.0.6

# fetch remote helm chart
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable

# fetch remote helm chart with specific version
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/latest --version 2.9.1
```

## Hauler Manifest for Charts

```yaml title="hauler-chart-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Charts
metadata:
  name: hauler-content-charts-example
spec:
  charts:
    # fetch helm chart
    - name: <chart name>
      repoURL: <chart repository>
      version: <chart version>
```

## Example Manifest for Charts

```yaml title="hauler-chart-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Charts
metadata:
  name: hauler-content-charts-example
spec:
  charts:
    # fetch helm chart
    - name: rancher
      repoURL: https://releases.rancher.com/server-charts/stable
    # fetch helm chart with specific version
    - name: rancher
      repoURL: https://releases.rancher.com/server-charts/stable
      version: 2.8.2
```

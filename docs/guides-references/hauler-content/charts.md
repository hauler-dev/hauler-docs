---
title: Hauler Content - Charts
description: Hauler Content - Charts Documentation
sidebar_label: Charts
---

## Hauler Command Line for Charts

```bash
hauler store add chart <chart name> --repo <chart repository> --version <chart version>
```

## Example Command for Images

```bash
# fetch helm chart
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable

# fetch helm chart with specific version
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable --version 2.8.2
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

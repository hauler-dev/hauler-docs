---
title: Hauler Store Add Chart
description: Hauler Store Add Chart Usage Documentation
sidebar_label: Chart
---

### Overview

`hauler store add chart` adds a helm chart to the store.

**An example with available flags...**

```bash
hauler store add chart <chart name> --repo <chart repository> --version <chart version>
```

### Command Overview

```yaml
Usage:
  hauler store add chart [flags]

Examples:
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

Flags:
      --ca-file string             (Optional) Location of CA Bundle to enable certification verification
      --cert-file string           (Optional) Location of the TLS Certificate to use for client authenication
  -h, --help                       help for chart
      --insecure-skip-tls-verify   (Optional) Skip TLS certificate verification
      --key-file string            (Optional) Location of the TLS Key to use for client authenication
      --password string            (Optional) Password to use for authentication
      --repo string                Location of the chart (https:// | http:// | oci://)
      --username string            (Optional) Username to use for authentication
      --verify                     (Optional) Verify the chart before fetching it
      --version string             (Optional) Specifiy the version of the chart (v1.0.0 | 2.0.0 | ^2.0.0)

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

### Example Commands for Charts

```bash
# fetch local helm chart
hauler store add chart path/to/chart/directory --repo .

# fetch local compressed helm chart
hauler store add chart path/to/chart.tar.gz --repo .

# fetch remote oci helm chart
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev

# fetch remote oci helm chart with version
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.0.6

# fetch remote helm chart
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable

# fetch remote helm chart with specific version
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/latest --version 2.9.1
```

### Hauler Manifest for Charts

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

### Example Manifest for Charts

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
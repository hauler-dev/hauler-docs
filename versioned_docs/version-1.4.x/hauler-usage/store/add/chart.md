---
title: Hauler Store Add Chart
description: Hauler Store Add Chart Usage Documentation
sidebar_label: Chart
---

### Overview

`hauler store add chart` adds a helm chart to the store.

**An example with available flags...**

```bash
hauler store add chart <chart-name> --repo <chart-repository> --version <chart version>
```

### Command Overview

```yaml
Usage:
  hauler store add chart [flags]

Examples:
# fetch local helm chart
hauler store add chart path/to/chart/directory --repo .

# fetch local compressed helm chart
hauler store add chart path/to/chart.tar.gz --repo .

# fetch remote oci helm chart
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev

# fetch remote oci helm chart with version
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.2.0

# fetch remote helm chart
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable

# fetch remote helm chart with specific version
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/latest --version 2.10.1

# fetch remote helm chart and rewrite path
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --rewrite custom-path/hauler-chart:latest

Flags:
      -h, --help                   help for chart
      --ca-file string             (Optional) Location of CA Bundle to enable certification verification
      --cert-file string           (Optional) Location of the TLS Certificate to use for client authenication
      --insecure-skip-tls-verify   (Optional) Skip TLS certificate verification
      --key-file string            (Optional) Location of the TLS Key to use for client authenication
      --password string            (Optional) Password to use for authentication
      --repo string                Location of the chart (https:// | http:// | oci://)
      --username string            (Optional) Username to use for authentication
      --verify                     (Optional) Verify the chart before fetching it
      --version string             (Optional) Specifiy the version of the chart (v1.0.0 | 2.0.0 | ^2.0.0)
      --rewrite                    (Optional) Rewrite the chart reference in the store

Flags for Keyless Verification:
  --certificate-identity-regexp string               (Optional) OIDC identity tied to certificate
  --certificate-oidc-issuer string                   (Optional) OIDC issuer
  --certificate-github-workflow-repository string    (Optional) Repository claim from GH identity token for GitHub workflows

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
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
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.1.1

# fetch remote helm chart
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable

# fetch remote helm chart with specific version
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/latest --version 2.10.1

# fetch remote helm chart and rewrite path
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --rewrite custom-path/hauler-chart:latest
```

### Hauler Manifest for Charts

```yaml title="hauler-chart-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Charts
metadata:
  name: hauler-content-charts-example
spec:
  charts:
    # fetch helm chart
    - name: <chart-name>
      # https:// or http:// or oci://
      repoURL: <chart-repository>
      # semver complaint
      version: <chart-version>
```

### Example Manifest for Charts

```yaml title="hauler-chart-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Charts
metadata:
  name: hauler-content-charts-example
spec:
  charts:
    # fetch helm chart
    - name: rancher
      repoURL: https://releases.rancher.com/server-charts/stable
    # fetch helm chart with specific version
    - name: rancher-cluster-templates
      repoURL: oci://ghcr.io/rancherfederal/charts
      version: 0.6.1
```

### Example Manifest with Rewrite

```yaml title="hauler-chart-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Charts
metadata:
  name: hauler-content-charts-example
spec:
  charts:
    # fetch helm chart
    - name: <chart-name>
      # https:// or http:// or oci://
      repoURL: <chart-repository>
      # semver complaint
      version: <chart-version>
      # rewrite in store
      rewrite: <desired-chart-reference>
```

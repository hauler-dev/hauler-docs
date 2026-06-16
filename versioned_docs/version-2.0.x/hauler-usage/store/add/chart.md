---
title: Hauler Store Add Chart
description: Hauler Store Add Chart Usage Documentation
sidebar_label: Chart
---

### Overview

`hauler store add chart` fetches a Helm chart — from an HTTP(S) repository, an OCI registry, or a local path — and stores it as an OCI artifact in the content store.

Reach for this on the internet-connected side when you need a chart available offline. Charts on their own are rarely enough, though: the container images a chart deploys live in separate registries and are **not** pulled automatically. Add `--add-images` to also collect the images referenced by the chart's templates, annotations, and image lock files, and `--add-dependencies` to pull dependent (subchart) charts as well. For a repeatable set of charts, define them in a [Hauler manifest](#hauler-manifest-for-charts) and run [`hauler store sync`](../sync.md) instead of adding them one by one.

> **Note:** Image discovery renders the chart with `helm template`, so results depend on the values and Kubernetes version used. Review the collected images with [`hauler store info`](../info.md) before relying on them.

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
      --add-dependencies           (Optional) Fetch dependent helm charts
      --add-images                 (Optional) Fetch images referenced in helm charts
      --ca-file string             (Optional) Location of CA Bundle to enable certification verification
      --cert-file string           (Optional) Location of the TLS Certificate to use for client authentication
      --exclude-extras             (Optional) Exclude cosign signatures, attestations, SBOMs, and OCI referrers when pulling images discovered via --add-images
  -h, --help                       help for chart
      --insecure-skip-tls-verify   (Optional) Skip TLS certificate verification
      --key-file string            (Optional) Location of the TLS Key to use for client authentication
      --kube-version string        (Optional) Override the kubernetes version for helm template rendering (default "v1.34.1")
      --password string            (Optional) Password to use for authentication
  -p, --platform string            (Optional) Specify the platform of the image, e.g. linux/amd64
  -g, --registry string            (Optional) Specify the registry of the image for images that do not alredy define one
      --repo string                Location of the chart (https:// | http:// | oci://)
      --rewrite string             (Optional) Rewrite artifact path to specified string
      --username string            (Optional) Username to use for authentication
      --values string              (Optional) Specify helm chart values when fetching images
      --verify                     (Optional) Verify the chart before fetching it
      --version string             (Optional) Specify the version of the chart (v1.0.0 | 2.0.0 | ^2.0.0)

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
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

# fetch remote helm chart and associated images
hauler store add chart gitea --repo https://dl.gitea.com/charts --add-images

# fetch remote helm chart and dependent chart(s)
hauler store add chart gitea --repo https://dl.gitea.com/charts --add-dependencies
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

### Example Manifest with Add Images

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
      # add associated images
      add-images: true
```

### Example Manifest with Dependent Charts

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
      # add dependent charts
      add-dependencies: true
```
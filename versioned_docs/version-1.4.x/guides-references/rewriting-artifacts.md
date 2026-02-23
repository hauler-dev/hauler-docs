---
title: Rewriting Artifacts
description: Documentation for Rewriting Artifacts
sidebar_label: Rewriting Artifacts
---

# Artifact Rewrite Guide - Hauler v1.4+

## Overview

The `--rewrite` flag on `hauler store add` commands allows you to change how an artifact is referenced **as it's added to the store**. Instead of storing the artifact with its original reference, you can specify a new registry, repository path, and tag.

**Important:** The rewrite happens at add time. The artifact is pulled from the original reference but stored under the new reference you specify.

## How It Works

When you use `--rewrite`, Hauler pulls the artifact from the original source but stores it with the rewritten reference. If you don't specify a particular component (registry or tag) in the rewrite, the original value is retained.

## Usage

```bash
# For images
hauler store add image <image> --rewrite <new-reference>

# For charts
hauler store add chart <chart-name> --repo <chart-repository> --version <chart version> --rewrite <new-reference>
```

## Examples

### Example 1: Rewrite Registry and Repository

**Original reference:** `quay.io/prometheus/prometheus:v2.45.0`

```bash
hauler store add image quay.io/prometheus/prometheus:v2.45.0 --rewrite internal.registry.io/production/monitoring/prometheus
```

**Stored as:** `internal.registry.io/production/monitoring/prometheus:v2.45.0`

The original tag (`v2.45.0`) is preserved because a new one is not specified in the rewrite reference.

---

### Example 2: Rewrite Tag Only

**Original reference:** `gcr.io/my-project/api-server:v1.2.3`

```bash
hauler store add image gcr.io/my-project/api-server:v1.2.3 --rewrite my-project/api-server:stable
```

**Stored as:** `gcr.io/my-project/api-server:stable`

The registry (`gcr.io`) is preserved because a new one is not specified in the rewrite reference.

---

### Example 3: Complete Rewrite

**Original reference:** `docker.io/library/redis:7.0-alpine`

```bash
hauler store add image docker.io/library/redis:7.0-alpine --rewrite harbor.local/apps/databases/redis:production
```

**Stored as:** `harbor.local/apps/databases/redis:production`

All components (registry, repository, tag) are changed in the rewrite reference.

---
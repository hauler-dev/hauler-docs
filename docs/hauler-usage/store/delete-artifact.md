---
title: Hauler Store Delete Artifact
description: Hauler Store Delete Artifact Usage Documentation
sidebar_label: Delete Artifact
---

### Overview

`hauler store delete-artifact` removes matching item(s) from the store using simple string matching.

> Note: `delete-artifact` is an experimental feature as of Hauler v1.4.0.

**An example...**

```bash
hauler store delete-artifact <artifact-reference> 
```

### Command Overview

```yaml
Usage:
  hauler store delete-artifact <artifact-referencce> [flags]

Examples:

# delete an image using full store reference
hauler store info
hauler store delete-artifact index.docker.io/library/busybox:stable

# delete a chart using full store reference
hauler store info
hauler store delete-artifact hauler/rancher:2.8.4

# delete a file using full store reference
hauler store info 
hauler store delete-artifact hauler/rke2-install.sh

# delete any artifacts with the latest tag
hauler store delete-artifact :latest

# delete any artifact with 'busybox' in the reference
hauler store delete-artifact busybox

# force delete without verification
hauler store delete-artifact busybox:latest --force


Flags:
  -f, --force              delete artifact(s) without verification

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
```
---
title: Hauler Store Remove
description: Hauler Store Remove Usage Documentation
sidebar_label: Remove
---

### Overview

`hauler store remove` deletes matching artifact(s) from the content store using simple substring matching, then garbage-collects the unreferenced blobs to reclaim disk space.

Use it to prune a store before saving — for example, to drop an image you added by mistake, remove an old version you no longer ship, or trim content down so the resulting `haul` is smaller. Because matching is substring-based, a reference like `:latest` or `busybox` can match several artifacts at once. Hauler lists what it found and prompts for confirmation before deleting (use `--force` to skip the prompt). Run [`hauler store info`](./info.md) first to see the exact references in the store.

**An example with available flags...**

```bash
hauler store remove <artifact-reference>
```

### Command Overview

```yaml
Usage:
  hauler store remove <artifact-ref> [flags]

Examples:
# remove an image using full store reference
hauler store info
hauler store remove index.docker.io/library/busybox:stable

# remove a chart using full store reference
hauler store info
hauler store remove hauler/rancher:2.8.4

# remove a file using full store reference
hauler store info
hauler store remove hauler/rke2-install.sh

# remove any artifact with the latest tag
hauler store remove :latest

# remove any artifact with 'busybox' in the reference
hauler store remove busybox

# force remove without verification
hauler store remove busybox:latest --force

Flags:
  -f, --force   (Optional) Remove artifact(s) without confirmation
  -h, --help    help for remove

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```
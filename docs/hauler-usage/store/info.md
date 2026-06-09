---
title: Hauler Store Info
description: Hauler Store Info Usage Documentation
sidebar_label: Info
---

### Overview

`hauler store info` prints out information about the contents of the store, including each artifact's reference, type, platform, layer count, and size. It is the primary way to inspect what a store contains before copying, saving, or removing content.

**An example with available flags...**

```bash
hauler store info --output <format> --type <content-type>
```

### Command Overview

```yaml
Usage:
  hauler store info [flags]

Aliases:
  info, i, list, ls

Flags:
      --digests           (Optional) Show digests of each artifact in the output table
  -h, --help              help for info
      --list-repos        (Optional) List all repository names
  -o, --output string     (Optional) Specify the output format (table | json) (default "table")
      --type string       (Optional) Filter on content type (image | chart | file | sigs | atts | sbom | referrer) (default "all")

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```

### Example Commands for Info

```bash
# print all store content as a table (default)
hauler store info

# use the 'list' or 'ls' alias
hauler store ls

# filter on a specific content type
hauler store info --type image
hauler store info --type chart
hauler store info --type file

# show artifact digests in the table
hauler store info --digests

# output as JSON (useful for scripting)
hauler store info --output json

# list only the unique repository names in the store
hauler store info --list-repos
```

### Content Types

The `--type` flag filters the output to a single content type. Valid values are:

| Type | Description |
|------|-------------|
| `all` | All content (default) |
| `image` | Container images (listed per-platform for multi-arch images) |
| `chart` | Helm charts |
| `file` | Files |
| `sigs` | Cosign signatures |
| `atts` | Cosign attestations |
| `sbom` | SBOMs |
| `referrer` | OCI referrers |

### Example Table Output

```bash
hauler store info
```

```text
+------------------------------------------+-------+--------------+----------+---------+
| REFERENCE                                | TYPE  | PLATFORM     | # LAYERS | SIZE    |
+------------------------------------------+-------+--------------+----------+---------+
| index.docker.io/library/busybox:stable   | image | linux/amd64  | 1        | 2.2 MB  |
| hauler/rancher:2.8.5                      | chart | -            | 1        | 28 kB   |
| hauler/rke2-install.sh                    | file  | -            | 1        | 35 kB   |
+------------------------------------------+-------+--------------+----------+---------+
|                                          |       |              |  TOTAL   | 2.3 MB  |
+------------------------------------------+-------+--------------+----------+---------+
```

### Example JSON Output

```bash
hauler store info --output json
```

```json
[
  {
    "Reference": "index.docker.io/library/busybox:stable",
    "Type": "image",
    "Platform": "linux/amd64",
    "Digest": "sha256:...",
    "Layers": 1,
    "Size": 2219949
  }
]
```

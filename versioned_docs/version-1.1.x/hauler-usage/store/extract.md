---
title: Hauler Store Extract
description: Hauler Store Extract Usage Documentation
sidebar_label: Extract
---

### Overview

`hauler store extract` extracts artifacts from the store to disk.

**An example with available flags...**

```bash
hauler store extract <artifact-name>
```

### Command Overview

```yaml
Usage:
  hauler store extract [flags]

Aliases:
  extract, x

Flags:
  -h, --help            help for extract
  -o, --output string   (Optional) Specify the directory to output (defaults to current directory)

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

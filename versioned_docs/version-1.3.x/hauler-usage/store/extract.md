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
  -o, --output string   (Optional) Set the directory to output (defaults to current directory)

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
```

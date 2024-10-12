---
title: Hauler Store Load
description: Hauler Store Load Usage Documentation
sidebar_label: Load
---

### Overview

`hauler store load` loads a content store from a store archive.

**An example with available flags...**

```bash
hauler store load <haul-name>
```

### Command Overview

```yaml
Usage:
  hauler store load [flags]

Flags:
  -h, --help             help for load
  -t, --tempdir string   (Optional) Override the default temporary directiory determined by the OS

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string    (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

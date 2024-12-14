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
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
```

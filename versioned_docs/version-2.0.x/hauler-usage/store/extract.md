---
title: Hauler Store Extract
description: Hauler Store Extract Usage Documentation
sidebar_label: Extract
---

### Overview

`hauler store extract` writes a single file or chart artifact from the content store back out to disk.

Use it when you need the raw artifact rather than a running service — for example, to pull an install script, binary, or chart `.tgz` out of the store and use it directly. It is the per-artifact counterpart to [`hauler store serve fileserver`](./serve/fileserver.md), which exposes the same files over HTTP instead. Pass `--output` to choose the destination directory (defaults to the current directory).

> **Note:** `extract` only handles files and charts. Container images cannot be extracted to disk — push them to a registry with [`hauler store copy`](./copy.md) or serve them with [`hauler store serve registry`](./serve/registry.md) instead.

**An example with available flags...**

```bash
hauler store extract <artifact-name> --output target-directory
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
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```

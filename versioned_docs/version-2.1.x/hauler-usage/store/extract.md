---
title: Hauler Store Extract
description: Hauler Store Extract Usage Documentation
sidebar_label: Extract
---

### Overview

`hauler store extract` writes a single file or chart artifact from the content store back out to disk.

Use it when you need the raw artifact rather than a running service - for example, to pull an install script, binary, or chart `.tgz` out of the store and use it directly. It is the per-artifact counterpart to [`hauler store serve fileserver`](./serve/fileserver.md), which exposes the same files over HTTP instead. Pass `--output` to choose the destination directory (defaults to the current directory).

> **Note:** `extract` only handles files and charts. Container images cannot be extracted to disk - push them to a registry with [`hauler store copy`](./copy.md) or serve them with [`hauler store serve registry`](./serve/registry.md) instead.

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
      --audit-level string     Set the audit logging level (none, standard, verbose) (defaults standard)
      --blob-concurrency int   (Optional) Override the maximum number of concurrent blob writes (0 auto-derives from --concurrency where set, otherwise defaults to 16)
  -d, --haulerdir string       Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors          Warn and continue instead of failing on errors, including storing images that failed verification (defaults false)
  -l, --log-level string       Set the logging level (i.e. info, debug, warn) (defaults info)
  -r, --retries int            Set the number of retries for operations (0 uses HAULER_RETRIES, otherwise defaults to 3)
  -s, --store string           Set the directory to use for the content store
  -t, --tempdir string         (Optional) Override the default temporary directory determined by the OS
  -w, --work-dir string        (Optional) Set the directory for output that commands would otherwise write to the current directory (default: current directory)
```

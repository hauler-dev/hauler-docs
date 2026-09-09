---
title: Hauler Store Load
description: Hauler Store Load Usage Documentation
sidebar_label: Load
---

### Overview

`hauler store load` unpacks a `haul` archive back into a content store.

This is the first step on the airgapped side of the workflow: once the archive produced by [`hauler store save`](./save.md) has been transported to the disconnected environment, `load` restores it into a usable content store. From there you can inspect it with [`hauler store info`](./info.md), serve it with [`hauler store serve`](./serve/registry.md), or push it into an existing registry with [`hauler store copy`](./copy.md). Multiple archives can be loaded into the same store, and chunked archives are rejoined automatically.

As of v1.3, Hauler also supports loading content from a Docker-saved tarball.

> Note: Podman-saved tarballs are not currently supported.

**An example with available flags...**

```bash
hauler store load --filename <haul-name>
```

### Command Overview

```yaml
Usage:
  hauler store load [flags]

Flags:
  -f, --filename strings   (Optional) Specify the name of inputted haul(s) (default [haul.tar.zst])
  -h, --help               help for load

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

### Example Commands for Load

```bash
# load the default haul (haul.tar.zst)
hauler store load

# load a specific haul
hauler store load --filename my-haul.tar.zst

# load multiple hauls into the same store
hauler store load --filename one.tar.zst --filename two.tar.zst

# load a remote haul
hauler store load --filename https://example.com/haul.tar.zst
```

### Loading a Chunked Haul

If the archive was split with [`hauler store save --chunk-size`](./save.md#splitting-the-archive-into-chunks), pass the base filename and Hauler automatically rejoins the chunks (matched by the `<base>_*<ext>` pattern) before loading:

```bash
hauler store load --filename haul.tar.zst
```

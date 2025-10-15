---
title: Hauler Store Load
description: Hauler Store Load Usage Documentation
sidebar_label: Load
---

### Overview

`hauler store load` loads a content store from a store archive.

As of v1.3, Hauler now supports loading content from a Docker-saved tarball. 

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
  -t, --tempdir string     (Optional) Override the default temporary directiory determined by the OS

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
```

---
title: Hauler Store Save
description: Hauler Store Save Usage Documentation
sidebar_label: Save
---

### Overview

`hauler store save` saves a content store to a store archive.

**An example with available flags...**

```bash
hauler store save --filename <file-name-with-extension>
```

### Command Overview

```yaml
Usage:
  hauler store save [flags]

Flags:
  -f, --filename string   (Optional) Specify the name of outputted archive (default "haul.tar.zst")
  -h, --help              help for save
  -p, --platform string   (Optional) Specify the platform for runtime imports... i.e. linux/amd64 (unspecified implies all)

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
```

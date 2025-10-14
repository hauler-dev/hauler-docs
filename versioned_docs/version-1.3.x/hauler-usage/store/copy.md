---
title: Hauler Store Copy
description: Hauler Store Copy Usage Documentation
sidebar_label: Copy
---

### Overview

`hauler store copy` copies all store content to another location.

**An example with available flags...**

```bash
hauler store copy registry://<registry-url>

hauler store copy dir://<directory-path>

# copies only image signatures and attestations
hauler store copy registry://<registry-url> --only sig, att
```

### Command Overview

```yaml
Usage:
  hauler store copy [flags]

Flags:
  -h, --help              help for copy
      --insecure          (Optional) Allow insecure connections
  -p, --password string   (Optional) Password to use for authentication
      --plain-http        (Optional) Allow plain HTTP connections
  -u, --username string   (Optional) Username to use for authentication
  -o, --only string       (Optional) Copy only signature (sig) or attestation (att) for image

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
```

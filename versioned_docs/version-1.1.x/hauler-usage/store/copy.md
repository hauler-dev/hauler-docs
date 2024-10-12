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

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

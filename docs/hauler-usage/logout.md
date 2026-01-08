---
title: Hauler Logout
description: Hauler Logout Usage Documentation
sidebar_label: Hauler Logout
---

### Overview

`hauler logout` logs out of an OCI Compliant registry that is stored at `~/.docker/config.json`.

**An example with available flags...**

```bash
hauler logout <registry-url>
```

### Command Overview

```yaml
Usage:
  hauler logout [SERVER] [flags]

Examples:
  # Log out of reg.example.com
  hauler logout reg.example.com

Flags:
  -h, --help   help for logout

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
```

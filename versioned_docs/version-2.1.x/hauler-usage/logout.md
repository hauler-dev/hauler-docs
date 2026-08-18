---
title: Hauler Logout
description: Hauler Logout Usage Documentation
sidebar_label: Hauler Logout
---

### Overview

`hauler logout` removes saved credentials for an OCI-compliant registry from the Docker config at `~/.docker/config.json`.

It's the counterpart to [`hauler login`](./login.md) — use it to clear stored credentials when you're done, when rotating secrets, or on shared/CI machines where leaving an authenticated session behind would be a risk.

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

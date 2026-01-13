---
title: Hauler Login
description: Hauler Login Usage Documentation
sidebar_label: Hauler Login
---

### Overview

`hauler login` logs into an OCI Compliant registry that is stored at `~/.docker/config.json`.

**An example with available flags...**

```bash
hauler login <registry-url> --username <username> --password <password>
```

### Command Overview

```yaml
Usage:
  hauler login [OPTIONS] [SERVER] [flags]

Examples:
  # Log in to reg.example.com
  hauler login reg.example.com -u AzureDiamond -p hunter2

Flags:
  -h, --help              help for login
  -p, --password string   Password
      --password-stdin    Take the password from stdin
  -u, --username string   Username

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
zackbradys@Zacks-MacBook-Pro hauler %
```

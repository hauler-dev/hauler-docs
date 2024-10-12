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
  hauler login [flags]

Examples:
# Log into registry.example.com
hauler login registry.example.com -u bob -p haulin

Flags:
  -h, --help              help for login
  -p, --password string   (Optional) Password to use for authentication
      --password-stdin    (Optional) Password to use for authentication (from stdin)
  -u, --username string   (Optional) Username to use for authentication

Global Flags:
  -l, --log-level string    (default "info")
```

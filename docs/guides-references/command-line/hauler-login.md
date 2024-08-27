---
title: Hauler Login (Command)
description: Hauler CLI Reference for hauler login
sidebar_label: Hauler Login
---

### Command Overview

* Login to an OCI Compliant Registry (stored at ~/.docker/config.json)

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

---
title: Hauler Login
description: Hauler Login Usage Documentation
sidebar_label: Hauler Login
---

### Overview

`hauler login` authenticates to an OCI-compliant registry and saves the credentials to the standard Docker config at `~/.docker/config.json`.

Run it before any Hauler operation that talks to a protected registry. On the connected side that means pulling private images with [`hauler store add image`](./store/add/image.md) or [`hauler store sync`](./store/sync.md); on the airgapped side it means seeding a secured registry with [`hauler store copy`](./store/copy.md). Hauler reads the same credential store that Docker and other OCI tools use, so a login you've already performed with `docker login` works too, and vice versa. For scripts and CI, prefer `--password-stdin` over `--password` so the secret never appears in your shell history or process list.

**An example with available flags...**

```bash
hauler login <registry-url> --username <username> --password <password>

# read the password from stdin instead of the command line
echo "$REGISTRY_PASSWORD" | hauler login <registry-url> --username <username> --password-stdin
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
```

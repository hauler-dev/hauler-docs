---
title: Hauler Store Copy
description: Hauler Store Copy Usage Documentation
sidebar_label: Copy
---

### Overview

`hauler store copy` pushes the entire contents of the store to another location.

It's the command you use to "unload" a store into your real infrastructure on the airgapped side — typically seeding an existing OCI registry with every image, chart, and file at once, rather than running Hauler's built-in registry long-term. Unlike [`hauler store serve registry`](./serve/registry.md), which keeps a process running, `copy` performs a one-time transfer and exits. It can also extract the store's files and charts straight to a directory. The target is given as a single argument prefixed with the destination type:

| Prefix | Behavior |
|--------|----------|
| `registry://`, `reg://`, `oci://` | Pushes the store (images, charts, files, and cosign metadata) to an OCI registry |
| `directory://`, `dir://` | Extracts the store's files and charts to a local directory (container images and cosign metadata are skipped) |

**An example with available flags...**

```bash
# push the store to an OCI registry
hauler store copy registry://<registry-url>

# extract the store to a local directory
hauler store copy dir://<directory-path>

# only copy image references containing a given string
hauler store copy registry://<registry-url> --only <substring>
```

### Command Overview

```yaml
Usage:
  hauler store copy [flags]

Examples:
  # supported copy target prefixes
	registry://  | reg:// | oci:// - Pushes the store to an OCI registry
	directory:// | dir://          - Extracts the store to a directory

Flags:
  -h, --help          help for copy
      --insecure      (Optional) Allow insecure connections
  -o, --only string   (Optional) Custom string array to only copy specific 'image' items
      --plain-http    (Optional) Allow plain HTTP connections

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```

### Filtering with `--only`

The `--only` flag restricts the copy to artifacts whose reference contains the given substring. For example, to push only images from a particular repository:

```bash
hauler store copy registry://<registry-url> --only rancher
```

### Authentication

To push to a registry that requires authentication, log in first with [`hauler login`](../login.md):

```bash
hauler login <registry-url> --username <username> --password <password>
hauler store copy registry://<registry-url>
```

> **Note:** The `--username` and `--password` flags on `hauler store copy` are deprecated in favor of `hauler login`.

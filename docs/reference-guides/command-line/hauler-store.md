---
title: Hauler Store
description: Hauler CLI Reference for hauler store
sidebar_label: Hauler Store
---

### Command Overview

```yaml
Usage:
  hauler store [flags]
  hauler store [command]

Aliases:
  store, s

Available Commands:
  add         Add content to store
  copy        Copy all store contents to another OCI registry
  extract     Extract content from the store to disk
  info        Print out information about the store
  load        Load a content store from a store archive
  save        Save a content store to a store archive
  serve       Expose the content of a local store through an OCI compliant server
  sync        Sync content to the embedded content store

Flags:
      --cache string   Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -h, --help           help for store
  -s, --store string   Location to create store at (default "store")

Global Flags:
  -l, --log-level string    (default "info")

Use "hauler store [command] --help" for more information about a command.
```

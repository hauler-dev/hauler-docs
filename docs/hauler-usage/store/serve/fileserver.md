---
title: Hauler Store Serve Fileserver
description: Hauler Store Serve Fileserver Usage Documentation
sidebar_label: Fileserver
---

### Overview

`hauler store serve fileserver` serves the fileserver.

**An example with available flags...**

```bash
hauler store serve fileserver --port <port> --timeout <timeout> --tls-cert <cert> --tls-key <key>
```

### Command Overview

```yaml
Usage:
  hauler store [flags]
  hauler store [command]

Aliases:
  store, s

Available Commands:
  add         Add content to the store
  copy        Copy all store content to another location
  extract     Extract artifacts from the content store to disk
  info        Print out information about the store
  load        Load a content store from a store archive
  save        Save a content store to a store archive
  serve       Serve the content store via an OCI Compliant Registry or Fileserver
  sync        Sync content to the content store

Flags:
  -h, --help           help for store
  -r, --retries int    Set the number of retries for operations (default 3)
  -s, --store string   Set the directory to use for the content store

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")

Use "hauler store [command] --help" for more information about a command.
```

## Example Commands for the Hauler Fileserver

```bash
# serve fileserver
hauler store serve fileserver

# serve fileserver on specific port
hauler store serve fileserver --port <port>
```

---
title: Hauler Help
description: Hauler Usage Documentation
sidebar_label: Hauler Help
---

`hauler` is the airgap swiss army knife.

### Command Overview

```yaml
Usage:
  hauler [flags]
  hauler [command]

Examples:
  View the Docs: https://docs.hauler.dev
  Environment Variables: HAULER_DIR | HAULER_TEMP_DIR | HAULER_STORE_DIR | HAULER_IGNORE_ERRORS

Available Commands:
  completion  Generate auto-completion scripts for various shells
  help        Help about any command
  login       Log in to a registry
  store       Interact with the content store
  version     Print the current version

Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
  -h, --help               help for hauler
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")

Use "hauler [command] --help" for more information about a command.
```

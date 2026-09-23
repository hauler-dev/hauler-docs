---
title: Hauler Help
description: Hauler Usage Documentation
sidebar_label: Hauler Help
---

The `hauler help` command displays help information for `hauler` and any of its commands, including available subcommands, flags, and usage examples. Run `hauler [command] --help` to get detailed help for a specific command.

### Command Overview

```yaml
Usage:
  hauler [flags]
  hauler [command]

Examples:
  View the Docs: https://docs.hauler.dev
  Environment Variables: HAULER_DIR | HAULER_TEMP_DIR | HAULER_STORE_DIR | HAULER_IGNORE_ERRORS | HAULER_RETRIES | HAULER_LOG_LEVEL | HAULER_AUDIT_LEVEL | HAULER_CONCURRENCY | HAULER_BLOB_CONCURRENCY
  Warnings: Hauler commands and flags marked with (EXPERIMENTAL) are not yet stable and may change in the future.

Available Commands:
  completion  Generate auto-completion scripts for various shells
  help        Help about any command
  login       Log in to a registry
  logout      Log out of a registry
  store       Interact with the content store
  version     Print the current version

Flags:
      --audit-level string   Set the audit logging level (none, standard, verbose) (defaults standard)
  -d, --haulerdir string     Set the location of the hauler directory (default $HOME/.hauler)
  -h, --help                 help for hauler
      --ignore-errors        Warn and continue instead of failing on errors, including storing images that failed verification (defaults false)
  -l, --log-level string     Set the logging level (i.e. info, debug, warn) (defaults info)
  -w, --work-dir string      (Optional) Set the directory for output that commands would otherwise write to the current directory (default: current directory)

Use "hauler [command] --help" for more information about a command.
```

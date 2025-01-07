---
title: Hauler Version
description: Hauler Version Usage Documentation
sidebar_label: Hauler Version
---

### Overview

`hauler version` prints the current version of `hauler`.

### Command Overview

```yaml
Usage:
  hauler version [flags]

Aliases:
  version, v

Flags:
  -h, --help   help for version
      --json   Set the output format to JSON

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
```

### Example Outputs

```bash
 __    __       ___       __    __   __       _______ .______
|  |  |  |     /   \     |  |  |  | |  |     |   ____||   _  \
|  |__|  |    /  ^  \    |  |  |  | |  |     |  |__   |  |_)  |
|   __   |   /  /_\  \   |  |  |  | |  |     |   __|  |      /
|  |  |  |  /  _____  \  |  `--'  | |  `----.|  |____ |  |\  \----.
|__|  |__| /__/     \__\  \______/  |_______||_______|| _| `._____|

hauler: Airgap Swiss Army Knife

GitVersion:    1.1.1
GitCommit:     090f4dc
GitTreeState:  clean
BuildDate:     2024-12-09T13:36:45Z
GoVersion:     go1.23.4 X:boringcrypto
Compiler:      gc
Platform:      darwin/arm64
```

```json
{
  "gitVersion": "1.1.1",
  "gitCommit": "090f4dc",
  "gitTreeState": "clean",
  "buildDate": "2024-12-09T13:36:45Z",
  "goVersion": "go1.23.4 X:boringcrypto",
  "compiler": "gc",
  "platform": "darwin/arm64"
}
```

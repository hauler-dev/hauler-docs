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

GitVersion:    1.2.0
GitCommit:     7d28df1
GitTreeState:  clean
BuildDate:     2025-02-05T18:34:07Z
GoVersion:     go1.23.5 X:boringcrypto
Compiler:      gc
Platform:      darwin/arm64
```

```json
{
  "gitVersion": "1.2.0",
  "gitCommit": "7d28df1",
  "gitTreeState": "clean",
  "buildDate": "2025-02-05T18:34:07Z",
  "goVersion": "go1.23.5 X:boringcrypto",
  "compiler": "gc",
  "platform": "darwin/arm64"
}
```

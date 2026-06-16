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

GitVersion:    v1.4.3
GitCommit:     d5a56fd
GitTreeState:  clean
BuildDate:     2026-05-05T05:27:30Z
GoVersion:     go1.25.9 X:boringcrypto
Compiler:      gc
Platform:      darwin/arm64
```

```json
{
  "gitVersion": "v1.4.3",
  "gitCommit": "d5a56fd",
  "gitTreeState": "clean",
  "buildDate": "2026-05-05T05:27:30Z",
  "goVersion": "go1.25.9 X:boringcrypto",
  "compiler": "gc",
  "platform": "darwin/arm64"
}
```

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
      --json   toggle output in JSON

Global Flags:
  -l, --log-level string    (default "info")
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

GitVersion:    1.1.0
GitCommit:     3406d54
GitTreeState:  clean
BuildDate:     2024-10-04T22:33:32Z
GoVersion:     go1.23.2 X:boringcrypto
Compiler:      gc
Platform:      linux/amd64
```

```json
{
  "gitVersion": "1.1.0",
  "gitCommit": "3406d54",
  "gitTreeState": "clean",
  "buildDate": "2024-10-04T22:33:32Z",
  "goVersion": "go1.23.2 X:boringcrypto",
  "compiler": "gc",
  "platform": "linux/amd64"
}
```

---
title: Installation
description: Installation Documentation for Hauler
sidebar_label: Installation
---

## Overview

Hauler is a purpose built to be a single binary with no prerequistes, depedencies, or runtime environment. It's installation is very simple and easy to follow. To view the latest release, please view our [GitHub Release](https://github.com/hauler-dev/hauler/releases) page.

## Supported Architectures

| Base Platform |    Architecture     |                  Latest Release                   |
| :-----------: | :-----------------: | :-----------------------------------------------: |
|     Linux     | `amd64` and `arm64` | https://github.com/hauler-dev/hauler/releases |
|    Darwin     | `amd64` and `arm64` | https://github.com/hauler-dev/hauler/releases |
|    Windows    | `amd64` and `arm64` | https://github.com/hauler-dev/hauler/releases |

## Installation Steps

### Linux/Darwin

```bash
# install latest release
curl -sfL https://get.hauler.dev | bash

# install with debug mode
curl -sfL https://get.hauler.dev | HAULER_DEBUG=true bash

# install specific release
curl -sfL https://get.hauler.dev | HAULER_VERSION=1.2.0 bash

# install at different directory
curl -sfL https://get.hauler.dev | HAULER_INSTALL_DIR=/usr/bin bash

# install with different hauler directory
curl -sfL https://get.hauler.dev | HAULER_DIR=$HOME/.hauler bash
```

### Homebrew

```bash
# install latest release
brew tap hauler-dev/homebrew-tap
brew install hauler

# install specific release
brew tap hauler-dev/homebrew-tap
brew install hauler@1.2.0
```

### Windows

```bash
# coming soon
```

## Manual Installation Steps

### Linux/Darwin

```bash
# set the hauler version (i.e. HAULER_VERSION=1.2.0)
export vHauler=HAULER_VERSION

# set the specific platform (i.e. PLATFORM=linux)
export platform=PLATFORM

# set the specific arch (i.e. ARCH=amd64)
export arch=ARCH

curl -sOL https://github.com/hauler-dev/hauler/releases/download/v${vHauler}/hauler_${vHauler}_${platform}_${arch}.tar.gz
tar -xf hauler_${vHauler}_${platform}_${arch}.tar.gz
sudo mv hauler /usr/bin/hauler
```

### Homebrew

```bash
# not applicable
```

### Windows

```bash
# coming soon
```

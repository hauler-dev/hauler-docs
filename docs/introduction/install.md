---
title: Installation
description: Installation Documentation for Hauler
sidebar_label: Installation
---

## Overview

Hauler is a purpose built to be a single binary with no specific prerequistes or depedencies. It's installation is very simple and easy to follow. To view the latest release, please view our [GitHub Release](https://github.com/rancherfederal/hauler/releases) page.

## Supported Architectures

| Base Platfor |    Architecture     |                  Latest Release                   |
| :----------: | :-----------------: | :-----------------------------------------------: |
|    Linux     | `amd64` and `arm64` | https://github.com/rancherfederal/hauler/releases |
|    Darwin    | `amd64` and `arm64` | https://github.com/rancherfederal/hauler/releases |
|    Windows   | `amd64` and `arm64` | https://github.com/rancherfederal/hauler/releases |

## Installation Steps

```bash
# set the hauler version (i.e. "0.4.0")
export vHauler=HAULER_VERSION

# set the specific platform (i.e. "linux")
export platform=PLATFORM

# set the specific arch (i.e. "amd64")
export arch=ARCH

curl -#OL https://github.com/rancherfederal/hauler/releases/download/v${vHauler}/hauler_${vHauler}_${platform}_${arch}.tar.gz
tar -xf hauler_${vHauler}_${platform}_${arch}.tar.gz
sudo mv hauler /usr/bin/hauler
```

---
title: Uninstall
description: Uninstall Documentation for Hauler
sidebar_label: Uninstall
---

## Uninstallation Steps

### Linux/Darwin

```bash
curl -sfL https://get.hauler.dev | HAULER_UNINSTALL=true bash
```

### Homebrew

```bash
brew uninstall hauler
```

### Windows

```bash
# coming soon
```

## Manual Uninstallation Steps

### Linux/Darwin

```bash
# remove the hauler binary
sudo rm -f /usr/local/bin/hauler

# remove the working/installation directory
rm -rf "$HOME/.hauler"
```

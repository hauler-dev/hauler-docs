---
title: Hauler Store Serve Fileserver
description: Hauler Store Serve Fileserver Usage Documentation
sidebar_label: Fileserver
---

### Overview

`hauler store serve fileserver` runs a simple HTTP file server backed by the file and chart artifacts in the content store.

Use it on the airgapped side to hand out the non-image content you collected — install scripts, binaries, tarballs, charts, and other files — to machines that can reach it over HTTP(S). It's the network-served counterpart to [`hauler store extract`](../extract.md), which writes the same artifacts to local disk instead. For example, you might serve `get.rke2.io`'s install script and the RKE2 binaries from one host so the rest of the airgapped fleet can `curl` them. Enable TLS with `--tls-cert`/`--tls-key`, and tune `--timeout` for large transfers.

> **Note:** The fileserver only exposes files and charts. To serve container images, use [`hauler store serve registry`](./registry.md).

**An example with available flags...**

```bash
hauler store serve fileserver --port <port> --timeout <timeout> --tls-cert <cert> --tls-key <key>
```

### Command Overview

```yaml
Usage:
  hauler store serve fileserver [flags]

Flags:
      --directory string   (Optional) Directory to use for backend. Defaults to $PWD/fileserver (default "fileserver")
  -h, --help               help for fileserver
  -p, --port int           (Optional) Set the port to use for incoming connections (default 8080)
      --timeout int        (Optional) Timeout duration for HTTP Requests in seconds for both reads/writes (default 60)
      --tls-cert string    (Optional) Location of the TLS Certificate to use for server authenication
      --tls-key string     (Optional) Location of the TLS Key to use for server authenication

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```

## Example Commands for the Hauler Fileserver

```bash
# serve fileserver
hauler store serve fileserver

# serve fileserver on specific port
hauler store serve fileserver --port <port>
```

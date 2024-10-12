---
title: Hauler Store Serve Fileserver
description: Hauler Store Serve Fileserver Usage Documentation
sidebar_label: Fileserver
---

### Overview

`hauler store serve fileserver` serves the fileserver.

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
  -p, --port int           (Optional) Specify the port to use for incoming connections (default 8080)
  -t, --timeout int        (Optional) Timeout duration for HTTP Requests in seconds for both reads/writes (default 60)
      --tls-cert string    (Optional) Location of the TLS Certificate to use for server authenication
      --tls-key string     (Optional) Location of the TLS Key to use for server authenication

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string    (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

## Example Commands for the Hauler Fileserver

```bash
# serve fileserver
hauler store serve fileserver

# serve fileserver on specific port
hauler store serve fileserver --port <port>
```

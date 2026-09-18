---
title: Hauler Store Serve Fileserver
description: Hauler Store Serve Fileserver Usage Documentation
sidebar_label: Fileserver
---

### Overview

`hauler store serve fileserver` runs a simple HTTP file server backed by the file and chart artifacts in the content store.

Use it on the airgapped side to hand out the non-image content you collected - install scripts, binaries, tarballs, charts, and other files - to machines that can reach it over HTTP(S). It's the network-served counterpart to [`hauler store extract`](../extract.md), which writes the same artifacts to local disk instead. For example, you might serve `get.rke2.io`'s install script and the RKE2 binaries from one host so the rest of the airgapped fleet can `curl` them. Enable TLS with `--tls-cert`/`--tls-key`, and tune `--timeout` for large transfers.

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
      --basic-auth string         (EXPERIMENTAL) (Optional) Location of the htpasswd file to use for basic authentication
      --basic-auth-realm string   (EXPERIMENTAL) (Optional) Realm to use for basic authentication (default "hauler-fileserver")
      --directory string          (Optional) Directory to use for backend. (defaults to $PWD/fileserver) (default "fileserver")
  -h, --help                      help for fileserver
  -p, --port int                  (Optional) Set the port to use for incoming connections (default 8080)
      --timeout int               (Optional) Timeout duration for HTTP Requests in seconds for both reads/writes (default 60)
      --tls-cert string           (Optional) Location of the TLS Certificate to use for server authenication
      --tls-key string            (Optional) Location of the TLS Key to use for server authenication

Global Flags:
      --audit-level string     Set the audit logging level (none, standard, verbose) (defaults standard)
      --blob-concurrency int   (Optional) Override the maximum number of concurrent blob writes (0 auto-derives from --concurrency where set, otherwise defaults to 16)
  -d, --haulerdir string       Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors          Warn and continue instead of failing on errors, including storing images that failed verification (defaults false)
  -l, --log-level string       Set the logging level (i.e. info, debug, warn) (defaults info)
  -r, --retries int            Set the number of retries for operations (0 uses HAULER_RETRIES, otherwise defaults to 3)
  -s, --store string           Set the directory to use for the content store
  -t, --tempdir string         (Optional) Override the default temporary directory determined by the OS
  -w, --work-dir string        (Optional) Set the directory for output that commands would otherwise write to the current directory (default: current directory)
```

### Basic Authentication

The `--basic-auth` flag points at an `htpasswd` file to require HTTP basic authentication for the fileserver and `--basic-auth-realm` overrides the realm sent in the `WWW-Authenticate` challenge (defaults to `hauler-fileserver`).

This feature is experimental and below is an example to generate the `htpasswd` file with the standard `htpasswd` utility, using bcrypt hashed passwords...

```bash
htpasswd -cB /path/to/htpasswd <username>
```

Then point the fileserver at it:

```bash
# serve fileserver with basic authentication
hauler store serve fileserver --basic-auth /path/to/htpasswd

# serve fileserver with basic authentication and a custom realm
hauler store serve fileserver --basic-auth /path/to/htpasswd --basic-auth-realm my-realm
```

## Example Commands for the Hauler Fileserver

```bash
# serve fileserver
hauler store serve fileserver

# serve fileserver on specific port
hauler store serve fileserver --port <port>
```

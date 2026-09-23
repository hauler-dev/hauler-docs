---
title: Hauler Store Serve Git
description: Hauler Store Serve Git Usage Documentation
sidebar_label: Git
---

> **Note:** This command is **experimental**.

### Overview

`hauler store serve git` runs a read-only git server over HTTP(S), backed by the git repository artifacts in the content store.

Use it on the airgapped side to hand out the repositories you collected with [`hauler store add git`](../add/git.md) to anything that can `git clone` over HTTP(S) - developer workstations, CI runners, or GitOps controllers. On startup, Hauler extracts every git repository in the store into `--directory` (one subdirectory each) and serves each one under its own path, `http://<host>:<port>/<name>`. Opening the root path lists the available repositories. Enable TLS with `--tls-cert`/`--tls-key`, require credentials with `--basic-auth`, and tune `--timeout` for large repositories.

> **Note:** The git server is read-only. Repositories can be cloned and fetched, but `git push` is rejected. To serve other content, use [`hauler store serve registry`](./registry.md) for images or [`hauler store serve fileserver`](./fileserver.md) for files, charts, and directories.

**An example with available flags...**

```bash
hauler store serve git --port <port> --timeout <timeout> --tls-cert <cert> --tls-key <key>
```

### Command Overview

```yaml
Usage:
  hauler store serve git [flags]

Flags:
      --basic-auth string         (EXPERIMENTAL) (Optional) Location of the htpasswd file to use for basic authentication
      --basic-auth-realm string   (EXPERIMENTAL) (Optional) Realm to use for basic authentication (default "hauler-git")
      --directory string          (EXPERIMENTAL) (Optional) Directory to use for backend. (defaults to $PWD/git) (default "git")
  -h, --help                      help for git
  -p, --port int                  (EXPERIMENTAL) (Optional) Set the port to use for incoming connections (default 8090)
      --timeout int               (EXPERIMENTAL) (Optional) Timeout duration for HTTP Requests in seconds for both reads/writes (default 60)
      --tls-cert string           (EXPERIMENTAL) (Optional) Location of the TLS Certificate to use for server authentication
      --tls-key string            (EXPERIMENTAL) (Optional) Location of the TLS Key to use for server authentication

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

### Cloning from the Git Server

Given a store with a few git repositories:

```bash
hauler store add git https://github.com/hauler-dev/hauler-helm.git
hauler store add git myrepo.git

hauler store serve git
```

```text
INF copied artifacts to [git]
INF found [2] git repository(s) in the store
INF starting git server on port [8090]
```

List the available repositories, then clone one by name:

```bash
curl http://localhost:8090/
```

```text
hauler git server

available repositories:
  hauler-helm
  myrepo.git
```

```bash
git clone http://localhost:8090/hauler-helm
```

> **Note:** The git server fails to start if the store contains no git repositories.

### Basic Authentication

The `--basic-auth` flag points at an `htpasswd` file to require HTTP basic authentication for the git server and `--basic-auth-realm` overrides the realm sent in the `WWW-Authenticate` challenge (defaults to `hauler-git`).

This feature is experimental and below is an example to generate the `htpasswd` file with the standard `htpasswd` utility, using bcrypt hashed passwords...

```bash
htpasswd -cB /path/to/htpasswd <username>
```

Then point the git server at it:

```bash
# serve git with basic authentication
hauler store serve git --basic-auth /path/to/htpasswd

# serve git with basic authentication and a custom realm
hauler store serve git --basic-auth /path/to/htpasswd --basic-auth-realm my-realm
```

Clients then clone with their credentials, for example `git clone http://<username>@<host>:8090/<name>`.

## Example Commands for the Hauler Git Server

```bash
# serve git
hauler store serve git

# serve git on specific port
hauler store serve git --port <port>

# serve git with tls
hauler store serve git --tls-cert /path/to/cert.pem --tls-key /path/to/key.pem

# serve git from a specific backend directory
hauler store serve git --directory /path/to/git
```

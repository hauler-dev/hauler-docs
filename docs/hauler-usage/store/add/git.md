---
title: Hauler Store Add Git
description: Hauler Store Add Git Usage Documentation
sidebar_label: Git
---

> **Note:** This command is **experimental**.

### Overview

`hauler store add git` stores a git repository - a local bare repository, a local working copy, or a remote repository cloned over HTTP(S) or SSH - as an OCI artifact in the content store.

Use this to carry source code, GitOps repositories, infrastructure as code, and anything else that tools inside the airgap expect to `git clone`. On the far side of the airgap every git repository in the store can be served for cloning with [`hauler store serve git`](../serve/git.md), or written back to disk as a bare repository with [`hauler store extract`](../extract.md). Pass `--name` to store the repository under a different name than the one derived from its path or URL. For a repeatable set of repositories, list them in a [Hauler manifest](#hauler-manifest-for-git) and run [`hauler store sync`](../sync.md).

**An example with available flags...**

```bash
hauler store add git <repository> --name <name>
```

### Command Overview

```yaml
Usage:
  hauler store add git [flags]

Examples:
  # add an existing local bare repo
  hauler store add git myrepo.git

  # clone and add a remote repo in one step
  hauler store add git https://github.com/example/myrepo.git

  # clone a private repo using a username/access token
  hauler store add git https://github.com/example/myrepo.git --username me --password $TOKEN

  # clone over SSH
  hauler store add git git@github.com:example/myrepo.git --ssh-key ~/.ssh/id_ed25519

Flags:
      --ca-file string             (Optional) Location of CA Bundle to enable certification verification for remote repositories
      --cert-file string           (Optional) Location of the TLS Certificate to use for client authentication
  -h, --help                       help for git
      --insecure-skip-tls-verify   (Optional) Skip TLS certificate verification for remote repositories
      --key-file string            (Optional) Location of the TLS Key to use for client authentication
  -n, --name string                (Optional) Rewrite the name of the git repository
      --password string            (Optional) Password or access token to use for authentication (https:// URLs)
      --ssh-key string             (Optional) Location of the SSH private key to use for authentication (git@/ssh:// URLs, defaults to ssh-agent when unset)
      --username string            (Optional) Username to use for authentication (https:// URLs)

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

### Example Commands for Git

```bash
# add a local bare repository
hauler store add git myrepo.git

# add a local working copy (mirrored into a bare repository)
hauler store add git ./myrepo

# clone and add a remote repository
hauler store add git https://github.com/hauler-dev/hauler-helm.git

# clone and add a remote repository and assign new name
hauler store add git https://github.com/hauler-dev/hauler-helm.git --name hauler-helm-chart

# clone a private repository using a username and access token
hauler store add git https://github.com/example/myrepo.git --username <username> --password <token>

# clone a private repository over SSH
hauler store add git git@github.com:example/myrepo.git --ssh-key ~/.ssh/id_ed25519

# clone a remote repository from a host with a private CA
hauler store add git https://git.example.com/example/myrepo.git --ca-file /path/to/ca.pem
```

### Repository Sources and Names

The repository is always stored as a bare repository, and its name becomes the path it is served under by [`hauler store serve git`](../serve/git.md).

| Source | Example | Behavior | Stored As |
|:---:|:---:|:---:|:---:|
| Local bare repository | `myrepo.git` | Stored as is | `hauler/myrepo.git:latest` |
| Local working copy | `./myrepo` | Mirrored into a bare repository | `hauler/myrepo:latest` |
| HTTP(S) URL | `https://github.com/example/myrepo.git` | Cloned as a bare repository | `hauler/myrepo:latest` |
| SSH URL | `git@github.com:example/myrepo.git` | Cloned as a bare repository | `hauler/myrepo:latest` |

A name derived from a URL drops the trailing `.git`, while a name derived from a local path keeps it. Names that would resolve onto or outside the serving directory (i.e. `.` or `..`) are rejected.

### Configuring Authentication for Remote Repositories

- **HTTP(S):** `--username` and `--password` (a password or access token) must be passed together. `--cert-file` and `--key-file` provide a TLS client certificate and must also be passed together.
- **SSH:** `--ssh-key` points at a private key. When it is unset, Hauler falls back to `ssh-agent` and the default SSH keys, the same as the `git` CLI.

Credentials embedded in a URL (i.e. `https://user:token@host/repo.git`) are removed from the log output, the audit log, and the stored repository's `origin` remote.

### Configuring TLS for Remote Repositories

`--ca-file` and `--insecure-skip-tls-verify` only affect repositories cloned over `https://`; they're ignored for local paths and SSH URLs.

> **Note:** Avoid setting `--ca-file` and `--insecure-skip-tls-verify` together - for git repositories, `--insecure-skip-tls-verify` takes precedence and certificate verification is skipped. When neither is set, the system's default CA bundle is used.

### Hauler Manifest for Git

Used with [`hauler store sync`](../sync.md). Relative local paths are resolved against the directory containing the manifest, not the current directory. Credentials are referenced by environment variable name, so raw values never appear in the manifest.

```yaml title="hauler-git-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Git
metadata:
  name: hauler-content-git-example
spec:
  git:
    # local path, https:// URL, or git@/ssh:// URL
    - path: <repository>
      name: <name>
      # environment variables holding the username and password/access token (https:// URLs, both or neither)
      usernameEnv: <username-env-var>
      passwordEnv: <password-env-var>
      # SSH private key (git@/ssh:// URLs)
      sshKey: <path-to-ssh-key>
      # TLS client certificate (https:// URLs)
      certFile: <path-to-cert>
      keyFile: <path-to-key>
      # TLS options for cloning this repository (avoid setting both; insecureSkipTLSVerify wins if both are set)
      caFile: <path-to-ca-bundle>
      insecureSkipTLSVerify: false
```

> **Note:** When a `Git` document comes from a remote (`http://`/`https://`) manifest, every `path` must be a remote URL and no credential or TLS file fields (`usernameEnv`, `passwordEnv`, `sshKey`, `certFile`, `keyFile`, `caFile`) are allowed. This keeps a remote manifest from reading local repositories or sending local secrets to a server of its choosing.

### Example Manifest for Git

```yaml title="hauler-git-manifest.yaml"
apiVersion: content.hauler.cattle.io/v1
kind: Git
metadata:
  name: hauler-content-git-example
spec:
  git:
    # clone remote repository
    - path: https://github.com/hauler-dev/hauler-helm.git
    # clone remote repository and assign new name
    - path: https://github.com/hauler-dev/hauler-helm.git
      name: hauler-helm-chart
    # add local bare repository (relative to this manifest)
    - path: path/to/local/myrepo.git
    # clone private repository using credentials from environment variables
    - path: https://github.com/example/private-repo.git
      usernameEnv: GIT_USERNAME
      passwordEnv: GIT_TOKEN
    # clone private repository over SSH
    - path: git@github.com:example/private-repo.git
      sshKey: /path/to/id_ed25519
```

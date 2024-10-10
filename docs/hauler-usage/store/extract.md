---
title: Hauler Store Extract
description: Hauler Store Extract Usage Documentation
sidebar_label: Extract
---

### Overview

`hauler store extract` extracts artifacts from the store to disk.

**An example with available flags...**

```bash

```

### Command Overview

```yaml
Usage:
  hauler store extract [flags]

Aliases:
  extract, x

Flags:
  -h, --help            help for extract
  -o, --output string   (Optional) Specify the directory to output (defaults to current directory)

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store info`:

* Print out information about the store

```yaml
Usage:
  hauler store info [flags]

Aliases:
  info, i, list, ls

Flags:
  -h, --help            help for info
      --list-repos      (Optional) List all repository names
  -o, --output string   (Optional) Specify the output format (table | json) (default "table")
  -t, --type string     (Optional) Filter on content type (image | chart | file | sigs | atts | sbom) (default "all")

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store load`:

* Load a content store from a store archive

```yaml
Usage:
  hauler store load [flags]

Flags:
  -h, --help             help for load
  -t, --tempdir string   (Optional) Override the default temporary directiory determined by the OS

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store save`:

* Save a content store to a store archive

```yaml
Usage:
  hauler store save [flags]

Flags:
  -f, --filename string   (Optional) Specify the name of outputted archive (default "haul.tar.zst")
  -h, --help              help for save

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store sync`:

* Sync content to the content store

```yaml
Usage:
  hauler store sync [flags]

Flags:
  -f, --files strings             Location of content manifests (files)... i.e. --files ./rke2-files.yaml
  -h, --help                      help for sync
  -k, --key string                (Optional) Location of public key to use for signature verification
  -p, --platform string           (Optional) Specify the platform of the image... i.e linux/amd64 (defaults to all)
  -c, --product-registry string   (Optional) Specify the product registry. Defaults to RGS Carbide Registry (rgcrprod.azurecr.us)
      --products strings          (Optional) Specify the product name to fetch collections from the product registry i.e. rancher=v2.8.5,rke2=v1.28.11+rke2r1
  -r, --registry string           (Optional) Specify the registry of the image for images that do not alredy define one

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store serve`:

* Expose the content store via an OCI Compliant Registry or Fileserver

```yaml
Usage:
  hauler store serve [flags]
  hauler store serve [command]

Available Commands:
  fileserver  Serve the file server
  registry    Serve the embedded registry

Flags:
  -h, --help   help for serve

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")

Use "hauler store serve [command] --help" for more information about a command.
```

#### `hauler store serve registry`:

* Expose the OCI Compliant Registry

```yaml
Usage:
  hauler store serve registry [flags]

Flags:
  -c, --config string      (Optional) Location of config file (overrides all flags)
      --directory string   (Optional) Directory to use for backend. Defaults to $PWD/registry (default "registry")
  -h, --help               help for registry
  -p, --port int           (Optional) Specify the port to use for incoming connections (default 5000)
      --readonly           (Optional) Run the registry as readonly (default true)
      --tls-cert string    (Optional) Location of the TLS Certificate to use for server authenication
      --tls-key string     (Optional) Location of the TLS Key to use for server authenication

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store serve fileserver`:

* Expose the Fileserver

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
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

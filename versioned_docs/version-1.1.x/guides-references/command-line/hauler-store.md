---
title: Hauler Store (Command)
description: Hauler CLI Reference for hauler store
sidebar_label: Hauler Store
---

### Command Overview

* Interact with Hauler's embedded content store

```yaml
Usage:
  hauler store [flags]
  hauler store [command]

Aliases:
  store, s

Available Commands:
  add         Add content to the store
  copy        Copy all content outside the store
  extract     Extract content from the store to disk
  info        Print out information about the store
  load        Load a content store from a store archive
  save        Save a content store to a store archive
  serve       Expose the content of a local store through an OCI compliant registry or file server
  sync        Sync content to the content store

Flags:
      --cache string   (deprecated flag and currently not used)
  -h, --help           help for store
  -s, --store string   (Optional) Specify the directory to use for the content store (default "store")

Global Flags:
  -l, --log-level string   (default "info")

Use "hauler store [command] --help" for more information about a command.
```


#### `hauler store add`:

* Add content to the store

```yaml
Usage:
  hauler store add [flags]
  hauler store add [command]

Available Commands:
  chart       Add a helm chart to the store
  file        Add a file to the store
  image       Add a image to the store

Flags:
  -h, --help   help for add

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")

Use "hauler store add [command] --help" for more information about a command.
```

#### `hauler store add image`:

* Add a image to the store

```yaml
Usage:
  hauler store add image [flags]

Examples:
# fetch image
hauler store add image busybox

# fetch image with repository and tag
hauler store add image library/busybox:stable

# fetch image with full image reference and specific platform
hauler store add image ghcr.io/hauler-dev/hauler-debug:v1.0.7 --platform linux/amd74

# fetch image with full image reference via digest
hauler store add image gcr.io/distroless/base@sha256:7fa7445dfbebae4f4b7ab0e6ef99276e96075ae42584af6286ba080750d6dfe5

# fetch image with full image reference, specific platform, and signature verification
hauler store add image rgcrprod.azurecr.us/hauler/rke2-manifest.yaml:v1.28.12-rke2r1 --platform linux/amd64 --key carbide-key.pub

Flags:
  -h, --help              help for image
  -k, --key string        (Optional) Location of public key to use for signature verification
  -p, --platform string   (Optional) Specifiy the platform of the image... i.e. linux/amd64 (defaults to all)

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store add chart`:

* Add a helm chart to the store

```yaml
Usage:
  hauler store add chart [flags]

Examples:
# fetch local helm chart
hauler store add chart path/to/chart/directory

# fetch local compressed helm chart
hauler store add chart path/to/chart.tar.gz

# fetch remote oci helm chart
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev

# fetch remote oci helm chart with version
hauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.0.6

# fetch remote helm chart
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable

# fetch remote helm chart with specific version
hauler store add chart rancher --repo https://releases.rancher.com/server-charts/latest --version 2.9.1

Flags:
      --ca-file string             (Optional) Location of CA Bundle to enable certification verification
      --cert-file string           (Optional) Location of the TLS Certificate to use for client authenication
  -h, --help                       help for chart
      --insecure-skip-tls-verify   (Optional) Skip TLS certificate verification
      --key-file string            (Optional) Location of the TLS Key to use for client authenication
      --password string            (Optional) Password to use for authentication
      --repo string                Location of the chart (https:// | http:// | oci://)
      --username string            (Optional) Username to use for authentication
      --verify                     (Optional) Verify the chart before fetching it
      --version string             (Optional) Specifiy the version of the chart (v1.0.0 | 2.0.0 | ^2.0.0)

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store add file`:

* Add a file to the store

```yaml
Usage:
  hauler store add file [flags]

Examples:
# fetch local file
hauler store add file file.txt

# fetch remote file
hauler store add file https://get.rke2.io/install.sh

# fetch remote file and assign new name
hauler store add file https://get.hauler.dev --name hauler-install.sh

Flags:
  -h, --help          help for file
  -n, --name string   (Optional) Rewrite the name of the file

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store copy`:

* Copy all store content to another location

```yaml
Usage:
  hauler store copy [flags]

Flags:
  -h, --help              help for copy
      --insecure          (Optional) Allow insecure connections
  -p, --password string   (Optional) Password to use for authentication
      --plain-http        (Optional) Allow plain HTTP connections
  -u, --username string   (Optional) Username to use for authentication

Global Flags:
      --cache string       (deprecated flag and currently not used)
  -l, --log-level string   (default "info")
  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")
```

#### `hauler store extract`:

* Extract artifacts from the store to disk

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

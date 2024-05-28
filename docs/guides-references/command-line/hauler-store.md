---
title: Hauler Store (Command)
description: Hauler CLI Reference for hauler store
sidebar_label: Hauler Store
---

### Command Overview

* Interact with Hauler's embedded content store.

```yaml
Interact with hauler's embedded content store

Usage:
  hauler store [flags]
  hauler store [command]

Aliases:
  store, s

Available Commands:
  add         Add content to store
  copy        Copy all store contents to another OCI registry
  extract     Extract content from the store to disk
  info        Print out information about the store
  load        Load a content store from a store archive
  save        Save a content store to a store archive
  serve       Expose the content of a local store through an OCI compliant registry or file server
  sync        Sync content to the embedded content store

Flags:
      --cache string   Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -h, --help           help for store
  -s, --store string   Location to create store at (default "store")

Global Flags:
  -l, --log-level string    (default "info")

Use "hauler store [command] --help" for more information about a command.
```


#### `hauler store add`:

* Add content to store.

```yaml
Usage:
  hauler store add [flags]
  hauler store add [command]

Available Commands:
  chart       Add a local or remote chart to the content store
  file        Add a file to the content store
  image       Add an image to the content store

Flags:
  -h, --help   help for add

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")

Use "hauler store add [command] --help" for more information about a command.
```

#### `hauler store add image`:

* Add an image to the content store.

```yaml
Usage:
  hauler store add image [flags]

Flags:
  -h, --help              help for image
  -k, --key string        (Optional) Path to the key for digital signature verification
  -p, --platform string   (Optional) Specific platform to save. i.e. linux/amd64. Defaults to all if flag is omitted.

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store add chart`:

* Add a local or remote chart to the content store.

```yaml
Usage:
  hauler store add chart [flags]

Examples:

# add a local chart
hauler store add chart path/to/chart/directory

# add a local compressed chart
hauler store add chart path/to/chart.tar.gz

# add a remote chart
hauler store add chart longhorn --repo "https://charts.longhorn.io"

# add a specific version of a chart
hauler store add chart rancher --repo "https://releases.rancher.com/server-charts/latest" --version "2.6.2"


Flags:
      --ca-file string             verify certificates of HTTPS-enabled servers using this CA bundle
      --cert-file string           identify HTTPS client using this SSL certificate file
  -h, --help                       help for chart
      --insecure-skip-tls-verify   skip tls certificate checks for the chart download
      --key-file string            identify HTTPS client using this SSL key file
      --password string            chart repository password where to locate the requested chart
      --repo string                chart repository url where to locate the requested chart
      --username string            chart repository username where to locate the requested chart
      --verify                     verify the package before using it
      --version string             specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store add file`:

* Add a file to the content store.

```yaml
Usage:
  hauler store add file [flags]

Flags:
  -h, --help          help for file
  -n, --name string   (Optional) Name to assign to file in store

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store copy`:

* Copy all store contents to another OCI registry.

```yaml
Usage:
  hauler store copy [flags]

Flags:
  -h, --help              help for copy
      --insecure          Toggle allowing insecure connections when copying to a remote registry
  -p, --password string   Password when copying to an authenticated remote registry
      --plain-http        Toggle allowing plain http connections when copying to a remote registry
  -u, --username string   Username when copying to an authenticated remote registry

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store extract`:

* Extract content from the store to disk.

```yaml
Usage:
  hauler store extract [flags]

Aliases:
  extract, x

Flags:
  -h, --help            help for extract
  -o, --output string   Directory to save contents to (defaults to current directory)

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store info`:

* Print out information about the store.

```yaml
Usage:
  hauler store info [flags]

Aliases:
  info, i, list, ls

Flags:
  -h, --help            help for info
  -o, --output string   Output format (table, json) (default "table")
  -t, --type string     Filter on type (image, chart, file, sigs, atts, sbom) (default "all")

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store load`:

* Load a content store from a store archive.

```yaml
Usage:
  hauler store load [flags]

Flags:
  -h, --help   help for load

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store save`:

* Save a content store to a store archive.

```yaml
Usage:
  hauler store save [flags]

Flags:
  -f, --filename string   Name of archive (default "haul.tar.zst")
  -h, --help              help for save

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store sync`:

* Sync content to the embedded content store.

```yaml
Usage:
  hauler store sync [flags]

Flags:
  -f, --files strings      Path to content files
  -h, --help               help for sync
  -k, --key string         (Optional) Path to the key for signature verification
  -p, --platform string    (Optional) Specific platform to save. i.e. linux/amd64. Defaults to all if flag is omitted.
      --products strings   Used for RGS Carbide customers to supply a product and version and Hauler will retrieve the images. i.e. '--product rancher=v2.7.6'
  -r, --registry string    (Optional) Default pull registry for image refs that are not specifying a registry name.

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store serve`:

* Expose the content of a local store through an OCI compliant registry or file server.

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
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")

Use "hauler store serve [command] --help" for more information about a command.
```

#### `hauler store serve registry`:

* Serve the embedded registry

```yaml
Usage:
  hauler store serve registry [flags]

Flags:
  -c, --config string      Path to a config file, will override all other configs
      --directory string   Directory to use for backend.  Defaults to $PWD/registry (default "registry")
  -h, --help               help for registry
  -p, --port int           Port to listen on. (default 5000)

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store serve fileserver`:

* Serve the fileserver

```yaml
Usage:
  hauler store serve fileserver [flags]

Flags:
      --directory string   Directory to use for backend.  Defaults to $PWD/store-files (default "store-files")
  -h, --help               help for fileserver
  -p, --port int           Port to listen on. (default 8080)
  -t, --timeout int        Set the http request timeout duration in seconds for both reads and write. (default 60)

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

---
title: Hauler Store (Command)
description: Hauler CLI Reference for hauler store
sidebar_label: Hauler Store
---

### Command Overview

* Interact with Hauler's embedded content store.

```yaml
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
  serve       Expose the content of a local store through an OCI compliant server
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
  -f, --filename string   Name of archive (default "pkg.tar.zst")
  -h, --help              help for save

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

#### `hauler store serve`:

* Expose the content of a local store through an OCI compliant server.

```yaml
Usage:
  hauler store serve [flags]

Flags:
  -c, --config string      Path to a config file, will override all other configs
  -d, --daemon             Toggle serving as a daemon
      --directory string   Directory to use for registry backend (defaults to '$PWD/registry') (default "registry")
  -h, --help               help for serve
  -p, --port int           Port to listen on (default 5000)

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
      --products strings   Used for RGS Carbide customers to supply a product and version and Hauler will retrieve the images. i.e. '--product rancher=v2.7.6'

Global Flags:
      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)
  -l, --log-level string    (default "info")
  -s, --store string       Location to create store at (default "store")
```

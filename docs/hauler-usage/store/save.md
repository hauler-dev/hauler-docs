---
title: Hauler Store Save
description: Hauler Store Save Usage Documentation
sidebar_label: Save
---

### Overview

`hauler store save` packages a content store into a single compressed archive (a `haul`, `.tar.zst` by default) that can be carried across the airgap.

This is the hand-off point between the two sides of the workflow: after you've collected everything with `add`/`sync` on the connected side, `save` produces one portable file to move onto physical media or through an approved transfer process. On the other side, [`hauler store load`](./load.md) unpacks it back into a content store. Use `--platform` to keep only the architecture you need (smaller archive), `--chunk-size` to split the output for media with file-size limits, and `--containerd` when the haul will be imported directly into containerd rather than loaded by Hauler.

**An example with available flags...**

```bash
hauler store save --filename <file-name-with-extension>
```

### Command Overview

```yaml
Usage:
  hauler store save [flags]

Flags:
      --chunk-size string   (Optional) Split the output archive into chunks of the specified size (e.g. 1G, 500M, 2048M)
      --containerd          (Optional) Enable import compatibility with containerd... filters index.json to image content, preserving the full index as a sidecar
  -f, --filename string     (Optional) Specify the name of outputted haul (default "haul.tar.zst")
  -h, --help                help for save
  -p, --platform string     (Optional) Specify the platform for runtime imports... i.e. linux/amd64 (unspecified implies all)

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

### Example for Containerd Import

>Note: Available in Hauler v1.4.1+.

If you intend to import the saved tarball directly to containerd, use the `containerd` flag to ensure the bundled artifacts are compatible, regardless of store contents. This will ensure the oci-layout file is not included, which may cause unexpected interpretation of artifact types by containerd. 

```
hauler store save --containerd --platform linux/amd64
```

### Splitting the Archive into Chunks

For large stores, use `--chunk-size` to split the output archive into multiple smaller files. This is helpful when transferring across media with file-size limits. Sizes accept binary units such as `K`/`KB`, `M`/`MB`, `G`/`GB`, and `T`/`TB`, or a raw byte count.

```bash
# split the haul into 2 GB chunks
hauler store save --chunk-size 2G
```

The chunks are produced as `<base>_*<ext>` files (e.g. `haul_0.tar.zst`, `haul_1.tar.zst`). [`hauler store load`](./load.md) automatically rejoins them when given the base filename.

> **Note:** A chunked store must be reassembled with `hauler store load` before it can be imported into containerd. Chunked output cannot be combined directly with `--containerd` for a one-step import.

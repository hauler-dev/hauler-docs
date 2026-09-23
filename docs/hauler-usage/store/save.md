---
title: Hauler Store Save
description: Hauler Store Save Usage Documentation
sidebar_label: Save
---

### Overview

`hauler store save` packages a content store into a single compressed archive (a `haul`, `.tar.zst` by default) that can be carried across the airgap.

This is the hand-off point between the two sides of the workflow: after you've collected everything with `add`/`sync` on the connected side, `save` produces one portable file to move onto physical media or through an approved transfer process. On the other side, [`hauler store load`](./load.md) unpacks it back into a content store. Use `--platform` to keep only the architecture you need (smaller archive), `--chunk-size` to split the output for media with file-size limits (with `--redundancy-percent` to add recovery chunks), and `--containerd` when the haul will be imported directly into containerd rather than loaded by Hauler.

**An example with available flags...**

```bash
hauler store save --filename <file-name-with-extension>
```

### Command Overview

```yaml
Usage:
  hauler store save [flags]

Flags:
      --chunk-size string        (Optional) Split the output archive into chunks of the specified size (i.e. 1G, 500M, 2048M)
      --containerd               (Optional) Enable import compatibility with containerd... filters index.json to image content, preserving the full index as a sidecar
  -f, --filename string          (Optional) Specify the name of outputted haul (default "haul.tar.zst")
  -h, --help                     help for save
  -p, --platform string          (Optional) Specify the platform for runtime imports... i.e. linux/amd64 (unspecified implies all)
      --redundancy-percent int   (EXPERIMENTAL) (Optional) Percentage of recovery chunks for rebuilding lost/corrupted chunks (requires --chunk-size)

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

The chunks are produced as `<filename>.<number>` files (i.e. `haul.tar.zst.001`, `haul.tar.zst.002`). [`hauler store load`](./load.md) automatically rejoins them when given the base filename. Saving again with fewer chunks removes any higher-numbered chunks left behind by the previous save.

> **Note:** A chunked store must be reassembled with `hauler store load` before it can be imported into containerd. Chunked output cannot be combined directly with `--containerd` for a one-step import.

### Adding Recovery Chunks

>Note: This feature is experimental.

Media fails, and transfers drop or corrupt files. Use `--redundancy-percent` with `--chunk-size` to add recovery chunks to a chunked haul, so [`hauler store load`](./load.md) can rebuild lost or corrupted chunks instead of failing. The value is the percentage of recovery chunks to add relative to the data chunks, between `0` and `100`. Any recovery percentage above `0` always adds at least one recovery chunk.

```bash
# split the haul into 1 GB chunks with 20% recovery chunks
hauler store save --chunk-size 1G --redundancy-percent 20
```

For example, saving a store that splits into 5 data chunks with `--redundancy-percent 20` adds 1 recovery chunk:

```bash
hauler store save --chunk-size 1M --redundancy-percent 20
```

```text
INF split [haul.tar.zst] into 6 chunk(s) with 1 recovery chunk(s)
INF haul can recover up to [1] lost or corrupted chunk(s)
```

The haul can then be loaded as long as no more chunks are lost or corrupted than there are recovery chunks. Each chunk carries a checksum, so a corrupted chunk is detected and rebuilt the same way as a missing one. Recovery chunks are named and moved like any other chunk (i.e. `haul.tar.zst.006`) and must be carried across the airgap with the rest of the set.

| Data Chunks | Redundancy Percent | Recovery Chunks | Total Chunks | Chunks That Can Be Lost |
|:---:|:---:|:---:|:---:|:---:|
| 5 | 20 | 1 | 6 | 1 |
| 5 | 50 | 3 | 8 | 3 |
| 10 | 30 | 3 | 13 | 3 |
| 10 | 100 | 10 | 20 | 10 |

> **Note:** `--redundancy-percent` requires `--chunk-size`, and a haul with recovery chunks is limited to 256 total chunks. If a save exceeds the limit, use a larger `--chunk-size` or a lower `--redundancy-percent`.

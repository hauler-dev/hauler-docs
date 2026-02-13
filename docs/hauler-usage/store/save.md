---
title: Hauler Store Save
description: Hauler Store Save Usage Documentation
sidebar_label: Save
---

### Overview

`hauler store save` saves a content store to a store archive.

**An example with available flags...**

```bash
hauler store save --filename <file-name-with-extension>
```

### Command Overview

```yaml
Usage:
  hauler store save [flags]

Flags:
  -f, --filename string    (Optional) Specify the name of outputted haul (default "haul.tar.zst")
  -h, --help                help for save
  -p, --platform string    (Optional) Specify the platform for runtime imports... i.e. linux/amd64 (unspecified implies all)
      --containerd string  (Optional) Enable import directly to containerd

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
  -t, --tempdir string     (Optional) Override the default temporary directory determined by the OS
```

### Example for Containerd Import

>Note: Available in Hauler v1.4.1+.

If you intend to import the saved tarball directly to containerd, use the `containerd` flag to ensure the bundled artifacts are compatible, regardless of store contents. This will ensure the oci-layout file is not included, which may cause unexpected interpretation of artifact types by containerd. 

```
hauler store save --containerd --platform linux/amd64
```

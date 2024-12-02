---
title: Known Issues and Limits
description: Known Issues and Limitations for Hauler
sidebar_label: Known Issues/Limits
---

## Issues

- No Issues at this time.

## Limitations

- `Hauler` may error when fetching a helm chart when using a `store` with the same name of the `helm chart`.
  - For example, if you tried to use a custom `store` name of `rancher` when fetching a `helm chart` named `rancher`, it will fail due to the fact that `helm` defaults to fetching charts from an exisiting local directory.
  - https://github.com/helm/helm/blob/main/pkg/action/install.go#L730-L831
---
- `Hauler` will default to write temporary directories and files to `/tmp`. If you do not have the same (or more) amount of space available in your `/tmp` compared to the size of the `store` or `haul`, then `hauler` may error.
  - **Recommendation:** Ensure there is enough space availabe in `/tmp` or change the default temporary directory with `--tempdir`, before running the command `hauler store load <haul.tar.zst>`.
---
- `Hauler` may error when trying to run multiple commands (procceses) concurrently...
  - Currently we leverage `cosign` for some functionality within `hauler`. If you try to run multiple proccesses at the same time that use the embedded `cosign`, then `hauler` may error on one or more of the procceses.

## Notices

- No Notices at this time.

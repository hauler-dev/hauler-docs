---
title: Known Issues and Limits
description: Known Issues and Limitations for Hauler
sidebar_label: Known Issues/Limits
---

## Issues

No known critical issues at this time. Please see our GitHub Issues for more information...
- `Hauler` - https://github.com/hauler-dev/hauler/issues
- `Hauler Helm` - https://github.com/hauler-dev/hauler-helm/issues
- `Hauler Docs` - https://github.com/hauler-dev/hauler-docs/issues

## Limitations

### Limitation for `Hauler Store Load`
- When loading a `podman` generated `tarball` with `hauler store load -f <podman tar>` it may fail to load all of the images contained in `tarball`. Please note that at this time this is not supported, but may change in the future.

### Limitation for `Hauler Store Copy`
- When copying artifacts from your `store` to a specific path on an existing and authenicated registry using `hauler store copy`, you first must use `hauler login`, without the `<path>`, only the `<registry-url>`. Please see the example below...
  - https://github.com/hauler-dev/hauler/issues/409

```bash
hauler login <registry-url> --username <username> --password <password>
hauler store copy registry://<registry-url>/<path>
```

### Limitation for `Helm Chart Names`
- `Hauler` may error when fetching a helm chart when using a `store` with the same name of the `helm chart`.
  - For example, if you tried to use a custom `store` name of `rancher` when fetching a `helm chart` named `rancher`, it will fail due to the fact that `helm` defaults to fetching charts from an exisiting local directory.
  - https://github.com/helm/helm/blob/main/pkg/action/install.go#L730-L831

### Limitation for `Hauler Temp Directory`
- `Hauler` will default to write temporary directories and files to `/tmp`. If you do not have the same (or more) amount of space available in your `/tmp` compared to the size of the `store` or `haul`, then `hauler` may error.
  - **Recommendation:** Ensure there is enough space availabe in `/tmp` or change the default temporary directory with `--tempdir`, before running the command `hauler store load --filename haul.tar.zst`.

## Notices

### In Hauler v1.4.0...

- Added a notice to `hauler store sync --products/--product-registry` to warn users the default registry will be updated in a future release.
  - Users will see logging notices when using the `--products/--product-registry` such as...
  - `!!! WARNING !!! [--products] will be updating its default registry in a future release...`
  - `!!! WARNING !!! [--product-registry] will be updating its default registry in a future release...`

### In Hauler v1.2.0...

- Upgraded the `apiVersion` to `v1` from `v1alpha1`
  - Users are able to use `v1` and `v1alpha1`, but `v1alpha1` is now deprecated and will be removed in a future release. We will update the community when we fully deprecate and remove the functionality of `v1alpha1`
  - Users will see logging notices when using the old `apiVersion` such as...
  - `!!! DEPRECATION WARNING !!! apiVersion [v1alpha1] will be removed in a future release...`
---
- Updated the behavior of `hauler store load` to default to loading a `haul` with the name of `haul.tar.zst` and requires the flag of `--filename/-f` to load a `haul` with a different name
- Users can load multiple `hauls` by specifying multiple flags of `--filename/-f`
  - updated command usage: `hauler store load --filename hauling-hauls.tar.zst`
  - previous command usage (do not use): `hauler store load hauling-hauls.tar.zst`
---
- Updated the behavior of `hauler store sync` to default to syncing a `manifest` with the name of `hauler-manifest.yaml` and requires the flag of `--filename/-f` to sync a `manifest` with a different name
- Users can sync multiple `manifests` by specifying multiple flags of `--filename/-f`
  - updated command usage: `hauler store sync --filename hauling-hauls-manifest.yaml`
  - previous command usage (do not use): `hauler store sync --files hauling-hauls-manifest.yaml`

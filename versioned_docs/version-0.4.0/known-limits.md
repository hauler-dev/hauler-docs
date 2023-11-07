---
title: Known Issues and Limits
description: Known Issues and Limitations for Hauler
sidebar_label: Known Issues/Limits
---

## Issues

- Copying SBOMS to AWS Elastic Container Registry (AWS ECR):
  - When using `hauler store copy` to AWS ECR, the Software Bill of Materials (SBOM) attachement will fail to copy due to changes in the way `cosign` handles attachments. **We are investigating a way forward to address this issue.**
  - https://github.com/sigstore/cosign/blob/main/specs/SBOM_SPEC.md
  - https://github.com/sigstore/cosign/issues/2755

## Limitations

- Display of Information in the Hauler Store:
  - When using `hauler store info` with signature verification, you may encounter errors in the presentation of the number layers and size of layers in the store. Hauler is correctly fetching, storing, packaging, and distributing each image, but the presentation and display can error. **We are actively working to address and fix this issue.**

## Notices

#### Upcoming Deprecated Command(s):

- `hauler download` (alternatively `hauler dl`) is deprecated and will be removed in a future release.
- `hauler serve` is deprecated and will be removed in a future release.

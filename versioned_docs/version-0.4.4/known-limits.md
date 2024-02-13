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

- No "known" limitations at this time but as a reminder, Hauler and the Hauler Documentation are in active development and not Generally Available (GA).

## Notices

#### Upcoming Deprecated Command(s):

- `hauler download` (alternatively `hauler dl`) is deprecated and will be removed in a future release.
- `hauler serve` is deprecated and will be removed in a future release.

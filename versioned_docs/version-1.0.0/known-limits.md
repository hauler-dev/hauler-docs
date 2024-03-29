---
title: Known Issues and Limits
description: Known Issues and Limitations for Hauler
sidebar_label: Known Issues/Limits
---

## Issues

- No Issues at this time.

## Limitations

- When using a `store` for `hauler` that has the same name of a `helm` chart, `hauler` will fail to fetch the chart.
  - For example, if you tried to use a `store` name of `rancher` with a `helm` chart name `rancher`, the fetch will fail due to the fact that `helm` defaults to using an exisiting local directory, if it matches the name of the chart.
  - https://github.com/helm/helm/blob/e81f6140ddb22bc99a08f7409522a8dbe5338ee3/pkg/action/install.go#L714-L815

## Notices

- No Notices at this time.

---
title: RGS Carbide Customers
description: RGS Carbide Customers Documentation
sidebar_label: RGS Carbide Customers
---

For all supported customers of Rancher Government, under the umbrella of Rancher Government Carbide, there is included add-on functionality within `Hauler`.

`Hauler` can reference [`Collections`](hauler-collections.md) from various registries, including the `Carbide Secured Registry (CSR)`.

`Hauler` is built to let operators fetch, store, package, and distribute artifacts — but knowing exactly *what* to fetch is often the hard part. That's where supported customers benefit: rather than assembling manifests by hand, they can leverage predefined `Collections` for all Rancher Government products and solutions, pulled from the `Carbide Secured Registry (CSR)` via the `--products` flag.

```bash
hauler store sync --products <product>=<product-version>
```

Please see the **[Carbide Documentation](http://docs.ranchercarbide.dev)** for more on fetching, packing, and distributing Carbide content. We are actively working to improve this workflow, and your feedback is appreciated!

- Carbide Docs for [Connected Environments](https://rancherfederal.github.io/carbide-docs/docs/registry-docs/copying-images)
- Carbide Docs for [Disconnected Environments](https://rancherfederal.github.io/carbide-docs/docs/registry-docs/downloading-images)

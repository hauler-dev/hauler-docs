---
title: Hauler Collections
description: Hauler Collections Documentation
sidebar_label: Hauler Collections
---

`Collections` are the building blocks of Hauler. A collection is a grouping of one or more pieces of [content](hauler-content.md) — images, charts, and files — that together represent a desired end result, such as everything needed to stand up a particular application. One or more collections, in turn, make up the `Haul` you carry across the airgap. See [Core Concepts](../core-concepts.md) for how content, collections, and hauls nest together.

Grouping content into collections means you describe an outcome ("the artifacts for product X at version Y") once, then fetch, store, and distribute that whole set as a unit rather than tracking each artifact by hand.

## Community Collections

While collections and content are built into Hauler, the goal is to empower operators to define and share their own. A community collection is just a curated [Hauler manifest](hauler-manifests.md) — a version-controlled YAML description of the images, charts, and files an application needs — that anyone can apply with [`hauler store sync`](../hauler-usage/store/sync.md):

```bash
hauler store sync --filename collection.yaml
```

Because a collection is plain YAML, it can be checked into source control, reviewed, and reused across teams and environments, giving you full control over your artifacts.

> **Note:** Community Collections are an evolving area of Hauler. Defining and sharing reusable collections is an active focus, and your feedback is appreciated!

## RGS Carbide Collections

For supported customers of Rancher Government, under the umbrella of Rancher Government Carbide, Hauler can import predefined collections for Rancher products directly — making it seamless to airgap any of the Rancher products or projects.

These collections are fetched from a product registry (the [Carbide Secured Registry (CSR)](carbide-customers.md) by default) using the `--products` flag, specified as `name=version`:

```bash
# sync a single product collection
hauler store sync --products rancher=v2.10.1

# sync multiple product collections
hauler store sync --products rancher=v2.10.1,rke2=v1.31.5+rke2r1
```

You can preview a product's resolved collection manifest without writing anything to the store by adding `--dry-run`:

```bash
hauler store sync --products rke2=v1.31.5+rke2r1 --dry-run
```

See the [`hauler store sync`](../hauler-usage/store/sync.md#syncing-rancher-products) reference for the full workflow, and [RGS Carbide Customers](carbide-customers.md) for more on the Carbide Secured Registry. If you haven't heard of Rancher Government Carbide, check it out [here](https://ranchergovernment.com/carbide)!

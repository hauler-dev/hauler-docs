---
title: Core Concepts
description: Core Concepts Documentation for Hauler
sidebar_label: Core Concepts
---

Hauler is built around a small set of concepts that work together to move artifacts across an airgap. Understanding how they nest makes everything else in these docs easier to follow:

- A **Haul** is the portable archive you carry across the airgap.
- It contains one or more **Collections**.
- Each Collection groups one or more pieces of **Content** (the actual artifacts).

![hauler-diagram](/img/hauler-diagram.png)

## Haul

:::tip SUMMARY:

`Hauls` are a compressed archive (tarball) of Hauler Collections and Content.

:::

At the heart of Hauler lies the concept of a `Haul`. A `Haul` is a compressed archive in the form of a tarball, containing Hauler collections and content. It serves as a convenient method for grouping and transporting various data types, making it a fundamental element in the Hauler ecosystem.

Because a `Haul` is a single, self-contained tarball, it is the unit you actually move across the airgap. You build it on the connected side, transfer the file by whatever means your environment allows (physical media, one-way transfer, etc.), and then unpack and serve its contents on the disconnected side.

## Collections

:::tip SUMMARY:

`Collections` are a grouping of one or more Hauler Contents.

:::

`Collections` are the building blocks of Hauler. These are groupings of one or more Hauler `contents`. Think of `collections` as organized sets of data that collectively represent a desired end result — for example, every image, chart, and file needed to stand up a particular application.

### Community Collections

While `collections` (and `contents`) are built into Hauler, our goal is to empower operators to define their own `collections`. This way, you can tailor Hauler to your unique requirements and take full control of your artifacts. See [Hauler Collections](guides-references/hauler-collections.md) for details on defining your own.

### RGS Carbide Collections

`Hauler` provides the ability to import `collections` for the Rancher products, making it seamless for RGS Supported Customers to airgap any of the Rancher products or projects. If you haven't heard of Rancher Government Carbide, check it out [here](https://ranchergovernment.com/carbide)!

## Content

:::tip SUMMARY:

`Contents` are artifacts such as images, charts, or files.

:::

In Hauler's terminology, `content` refers to artifacts such as **container images, helm charts, or files.** These are the fundamental types of artifacts for `Hauler`. To understand it a little bit better, let's break it down:

- `Content`: The fundamental type of artifacts that Hauler recognizes (images, charts, and files).
- `Artifact`: Anything that can be represented as an OCI (Open Container Initiative) Compliant Artifact.
  - OCI Compliant Artifacts provide a standardized way to store arbitrary files, making it easier to manage content efficiently.

For a closer look at each content type and how it's handled, see [Hauler Content](guides-references/hauler-content.md).

### Declarative Content

While manually adding content to `Hauler` is an easy way to get started, `Hauler` also provides a declarative and programmatic approach by allowing operators to define `content` within a configuration file, known as a manifest. This approach ensures a more reproducible workflow for managing the lifecycle of your `hauls`. Check it out [here](guides-references/hauler-manifests.md)!

## Signature Verification

:::tip SUMMARY:

As part of a secure supply chain, you can set Hauler to verify artifact signatures on both sides of the airgap, when adding to store and seeding registry.

:::

Hauler uses [cosign](https://github.com/sigstore/cosign) under the hood to verify artifact signatures. Verification can happen on both sides of the airgap — when adding content to the store on the connected side, and when seeding a registry on the disconnected side — so you can trust that artifacts haven't been tampered with in transit.

### Public Key

The cosign public key can be set via the command line flag `--key` (`-k`) or as an annotation in the Hauler Manifest.

### Keyless Verification

As of Hauler v1.2.3+, keyless verification can also be performed. The flags `--certificate-identity-regexp`, `--certificate-oidc-issuer`, and `--certificate-github-workflow-repository` can be set or annotations added in the Hauler Manifest. Check out some examples [here](https://docs.hauler.dev/docs/guides-references/hauler-manifests)!

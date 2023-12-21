---
title: Core Concepts
description: Core Concepts Documentation for Hauler
sidebar_label: Core Concepts
---

![hauler-diagram](/img/hauler-diagram.png)

## Haul

:::tip SUMMARY:

`Hauls` are Compressed Archive (Tarball) of Hauler Collections and Content.

:::

At the heart of Hauler lies the concept of a `Haul`. A `Haul` is a compressed archive, often in the form of a tarball, containing Hauler collections and content. It serves as a container for grouping and transporting various data types, making it a fundamental element in the Hauler ecosystem.

## Collections

:::tip SUMMARY:

`Collections` are Grouping of one or more Hauler Contents.

:::

`Collections` are the building blocks of Hauler. These are groupings of one or more Hauler `contents`. Think of `collections` as organized sets of data that collectively represent something desirable.

### Community Collections

While `collections` (and `contents`) are built into Hauler, our goal is to empower users to define their own `collections`. This way, you can tailor Hauler to your unique requirements and take full control of your artifacts.

### RGS Carbide Collections

`Hauler` provides the ability to import `collections` for the Rancher products, making it seamless for RGS Supported Customers to airgap any of the Rancher products or projects. If you haven't heard of Rancher Government Carbide, check it out [here](https://ranchergovernment.com/carbide)!

## Content

:::tip SUMMARY:

`Contents` are Artifacts such as Images, Charts, or Files.

:::

In Hauler's terminology, `content` refers to artifacts such as images, charts, or files. These are the fundamental types of resources that Hauler understands and manages. To understand the term better, let's break it down:

* `Content`: The fundamental type of artifacts that Hauler recognizes (images, charts, and files).
* `Artifact`: Anything that can be represented as an OCI (Open Container Initiative) artifact.
  * OCI Artifacts provide a standardized way to store arbitrary files, making it easier to manage content efficiently.

### Declaritive Content

While manually adding content to `Hauler` is a straightforward way to get started, we recommend a much more sustainable approach. `Hauler` provides a declaritive approach for each `content` type, allowing you to define all the `content` within a manifest. This approach ensures a more reproducable workflow for managing the lifecycle of your `hauls`.

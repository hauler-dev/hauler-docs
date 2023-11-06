---
title: Introduction to Collections
description: Hauler Collections Documentation
sidebar_label: Introduction
---

Earlier we referred to `content` as the fundamental types of `Hauler`. We call it that because they can be used to build groups of `content`, which we call `collections`.

`collections` are groups of one or more `contents` that collectively represent something desirable. Just like `content`, there are a handful that are built in to `Hauler`.

Since `collections` usually contain more purposefully crafted `contents`, we restrict their use to the declarative commands:

```bash
# sync a collection
hauler store sync -f my-collection.yaml

# sync sets of content/collection
hauler store sync -f collection.yaml -f content.yaml
```

#### User Defined `Collections`

Although `collections` (and `content`) can only be used when they are baked in to `Hauler`, the goal is to allow these to be securely user-defined, allowing you to define your own desirable `collection` types, and leave the heavy lifting to `Hauler`.

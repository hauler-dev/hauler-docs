---
title: Introduction to Content
description: Hauler Content Documentation
sidebar_label: Introduction
---

At this point you're probably wondering: what is `content`? In `Hauler` land, there are a few important terms given to its resources:

* `content`: the fundamental types of `artifacts` that `Hauler` understands
  * `artifact`: anything that can be represented as an `oci artifact`

`OCI Artifacts` are a way of leveraging OCI Registries (container registries) that are compliant with specifications set by the [Open Container Initiative]((https://github.com/opencontainers)), to store arbitrary files.

As of today, `Hauler` understands three types of `content` objects, one with a strong legacy of community support and consensus `image-spec`, one with a finalized spec and experimental support `chart-spec`, and one generic type created just for `Hauler`.

These `content` objects are outlined in the next sections in documentations

### Content API

While imperatively adding `content` to `Hauler` is a simple way to get started, the recommended long term approach is to use the provided api that each `content` has, in conjunction with the `sync` command.

```bash
# create a haul from declaratively defined content
hauler store sync -f testdata/contents.yaml
```

The API for each type of `content` allows you to easily and declaratively define all the `content` that exist within a `haul`, and ensures a more gitops compatible workflow for managing the lifecycle of your `hauls`.

It's also easy to imperatively generate a declarative contents.yaml
* This will generate a list of all images running in your cluster, store it in an environment variable, then echo the environment variable to show the list.
```bash
export IMAGE_LIST=$(kubectl get pods --all-namespaces -o jsonpath="{.items[*].spec.containers[*].image}" |tr -s '[[:space:]]' '\n' |sort |uniq -c | cut -c 9-)
echo "$IMAGE_LIST"
```

* Example Output
```yaml
index.docker.io/rancher/hardened-etcd:v3.5.1-k3s1-build20220112
index.docker.io/rancher/hardened-kubernetes:v1.23.5-rke2r1-build20220316
index.docker.io/rancher/rke2-cloud-provider:v0.0.3-build20211118
rancher/hardened-calico:v3.21.4-build20220228
rancher/hardened-cluster-autoscaler:v1.8.5-build20211119
rancher/hardened-coredns:v1.9.1-build20220318
rancher/hardened-flannel:v0.17.0-build20220317
rancher/hardened-k8s-metrics-server:v0.5.0-build20211119
rancher/klipper-helm:v0.7.0-build20220315
rancher/nginx-ingress-controller:nginx-1.0.2-hardened4
```

* The generated list of images can then be used to easily generate a hauler config file by using the following logic:
```yaml
temp=$(cat "$IMAGE_LIST" | sed 's/^/  - name: /')
# sed, stream editor, appends 2 spaces of indentation denotes
# an entry in a list, then adds name: to match expected syntax
cat << EOF | tee contents.yaml
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: myimage
spec:
  images:
$temp
EOF

cat contents.yaml
```

* The result would look like this
```yaml
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: myimage
spec:
  images:
  - name: index.docker.io/rancher/hardened-etcd:v3.5.1-k3s1-build20220112
  - name: index.docker.io/rancher/hardened-kubernetes:v1.23.5-rke2r1-build20220316
  - name: index.docker.io/rancher/rke2-cloud-provider:v0.0.3-build20211118
  - name: rancher/hardened-calico:v3.21.4-build20220228
  - name: rancher/hardened-cluster-autoscaler:v1.8.5-build20211119
  - name: rancher/hardened-coredns:v1.9.1-build20220318
  - name: rancher/hardened-flannel:v0.17.0-build20220317
  - name: rancher/hardened-k8s-metrics-server:v0.5.0-build20211119
  - name: rancher/klipper-helm:v0.7.0-build20220315
  - name: rancher/nginx-ingress-controller:nginx-1.0.2-hardened4
```

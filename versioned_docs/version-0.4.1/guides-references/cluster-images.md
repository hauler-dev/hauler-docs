---
title: Fetching Cluster Images
description: Fetching Images on a Cluster Documentation
sidebar_label: Fetch Cluster Images
---

It may be difficult to understand exactly what `content` is actively within your environment. Below is a simple way to generate a list of all images running in your environment, store it as an environment variable, and show the list by echoing the environment variable.

```bash
export IMAGE_LIST=$(kubectl get pods --all-namespaces -o jsonpath="{.items[*].spec.containers[*].image}" |tr -s '[[:space:]]' '\n' |sort |uniq -c | cut -c 9-)
echo "$IMAGE_LIST"
```

### Example Output

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

### Hauler Manifest using the Images

```yaml
IMAGE_LIST_MODIFIED=$(cat "$IMAGE_LIST" | sed 's/^/  - name: /')
# sed, stream editor, appends 2 spaces of indentation denotes
# an entry in a list, then adds name: to match expected syntax
```

```yaml title="hauler-manfiest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: hauler-cluster-images-example
spec:
  images:
$IMAGE_LIST_MODIFIED
```

### Resulting Hauler Manifest

```yaml title="hauler-manfiest.yaml"
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: hauler-cluster-images-example
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

"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[3412],{2748:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(4848),t=r(8453);const s={title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",sidebar_label:"Fetch Cluster Images"},i=void 0,l={id:"guides-references/cluster-images",title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",source:"@site/versioned_docs/version-1.0.x/guides-references/cluster-images.md",sourceDirName:"guides-references",slug:"/guides-references/cluster-images",permalink:"/docs/1.0.x/guides-references/cluster-images",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.0.x/guides-references/cluster-images.md",tags:[],version:"1.0.x",frontMatter:{title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",sidebar_label:"Fetch Cluster Images"},sidebar:"haulerSidebar",previous:{title:"Overview",permalink:"/docs/1.0.x/guides-references/overview"},next:{title:"RGS Carbide Customers",permalink:"/docs/1.0.x/guides-references/carbide-customers"}},c={},d=[{value:"Fetch Cluster Images",id:"fetch-cluster-images",level:2},{value:"Example Output",id:"example-output",level:2},{value:"Generate Hauler Manifest",id:"generate-hauler-manifest",level:2},{value:"Resulting Hauler Manifest",id:"resulting-hauler-manifest",level:2}];function o(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["It may be difficult to understand exactly what ",(0,a.jsx)(n.code,{children:"content"})," is actively within your environment. Below is a simple way to generate a list of all images running in your environment, store it as an environment variable, and show the list by echoing the environment variable."]}),"\n",(0,a.jsx)(n.h2,{id:"fetch-cluster-images",children:"Fetch Cluster Images"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# fetch all images in the cluster, remove duplicates, alphabetize, and put on a newline\nexport IMAGE_LIST=$(kubectl get pods --all-namespaces -o jsonpath=\"{.items[*].spec.containers[*].image}\" | sed 's/ /\\n/g' | sort | uniq)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-output",children:"Example Output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# view the list of images from the cluster\necho $IMAGE_LIST\nindex.docker.io/rancher/hardened-etcd:v3.5.1-k3s1-build20220112\nindex.docker.io/rancher/hardened-kubernetes:v1.23.5-rke2r1-build20220316\nindex.docker.io/rancher/rke2-cloud-provider:v0.0.3-build20211118\nrancher/hardened-calico:v3.21.4-build20220228\nrancher/hardened-cluster-autoscaler:v1.8.5-build20211119\nrancher/hardened-coredns:v1.9.1-build20220318\nrancher/hardened-flannel:v0.17.0-build20220317\nrancher/hardened-k8s-metrics-server:v0.5.0-build20211119\nrancher/klipper-helm:v0.7.0-build20220315\nrancher/nginx-ingress-controller:nginx-1.0.2-hardened4\n"})}),"\n",(0,a.jsx)(n.h2,{id:"generate-hauler-manifest",children:"Generate Hauler Manifest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# add the required formatting for the image list\nexport IMAGE_LIST_MODIFIED=$(echo \"${IMAGE_LIST} | sed 's/^/    - name: /'\")\n\n# create the hauler manifest with the updated image list\ncat << EOF >> hauler-manifest.yaml\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-cluster-images\nspec:\n  images:\n$IMAGE_LIST_MODIFIED\nEOF\n"})}),"\n",(0,a.jsx)(n.h2,{id:"resulting-hauler-manifest",children:"Resulting Hauler Manifest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="hauler-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-cluster-images\nspec:\n  images:\n    - name: index.docker.io/rancher/hardened-etcd:v3.5.1-k3s1-build20220112\n    - name: index.docker.io/rancher/hardened-kubernetes:v1.23.5-rke2r1-build20220316\n    - name: index.docker.io/rancher/rke2-cloud-provider:v0.0.3-build20211118\n    - name: rancher/hardened-calico:v3.21.4-build20220228\n    - name: rancher/hardened-cluster-autoscaler:v1.8.5-build20211119\n    - name: rancher/hardened-coredns:v1.9.1-build20220318\n    - name: rancher/hardened-flannel:v0.17.0-build20220317\n    - name: rancher/hardened-k8s-metrics-server:v0.5.0-build20211119\n    - name: rancher/klipper-helm:v0.7.0-build20220315\n    - name: rancher/nginx-ingress-controller:nginx-1.0.2-hardened4\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var a=r(6540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
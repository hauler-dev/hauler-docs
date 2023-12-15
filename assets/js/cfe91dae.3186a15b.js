"use strict";(self.webpackChunkhauler=self.webpackChunkhauler||[]).push([[5158],{4137:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>h});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),o=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=o(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(r),p=a,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return r?t.createElement(h,l(l({ref:n},u),{},{components:r})):t.createElement(h,l({ref:n},u))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6111:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=r(7462),a=(r(7294),r(4137));const i={title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",sidebar_label:"Fetch Cluster Images"},l=void 0,s={unversionedId:"guides-references/cluster-images",id:"version-0.4.0/guides-references/cluster-images",title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",source:"@site/versioned_docs/version-0.4.0/guides-references/cluster-images.md",sourceDirName:"guides-references",slug:"/guides-references/cluster-images",permalink:"/hauler-docs/docs/0.4.0/guides-references/cluster-images",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.0/guides-references/cluster-images.md",tags:[],version:"0.4.0",frontMatter:{title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",sidebar_label:"Fetch Cluster Images"},sidebar:"haulerSidebar",previous:{title:"Content Validation",permalink:"/hauler-docs/docs/0.4.0/guides-references/validation"},next:{title:"Overview",permalink:"/hauler-docs/docs/0.4.0/guides-references/hauler-collections/overview"}},c={},o=[{value:"Example Output",id:"example-output",level:3},{value:"Hauler Manifest using the Images",id:"hauler-manifest-using-the-images",level:3},{value:"Resulting Hauler Manifest",id:"resulting-hauler-manifest",level:3}],u={toc:o},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It may be difficult to understand exactly what ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," is actively within your environment. Below is a simple way to generate a list of all images running in your environment, store it as an environment variable, and show the list by echoing the environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export IMAGE_LIST=$(kubectl get pods --all-namespaces -o jsonpath=\"{.items[*].spec.containers[*].image}\" |tr -s '[[:space:]]' '\\n' |sort |uniq -c | cut -c 9-)\necho \"$IMAGE_LIST\"\n")),(0,a.kt)("h3",{id:"example-output"},"Example Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"index.docker.io/rancher/hardened-etcd:v3.5.1-k3s1-build20220112\nindex.docker.io/rancher/hardened-kubernetes:v1.23.5-rke2r1-build20220316\nindex.docker.io/rancher/rke2-cloud-provider:v0.0.3-build20211118\nrancher/hardened-calico:v3.21.4-build20220228\nrancher/hardened-cluster-autoscaler:v1.8.5-build20211119\nrancher/hardened-coredns:v1.9.1-build20220318\nrancher/hardened-flannel:v0.17.0-build20220317\nrancher/hardened-k8s-metrics-server:v0.5.0-build20211119\nrancher/klipper-helm:v0.7.0-build20220315\nrancher/nginx-ingress-controller:nginx-1.0.2-hardened4\n")),(0,a.kt)("h3",{id:"hauler-manifest-using-the-images"},"Hauler Manifest using the Images"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"IMAGE_LIST_MODIFIED=$(cat \"$IMAGE_LIST\" | sed 's/^/  - name: /')\n# sed, stream editor, appends 2 spaces of indentation denotes\n# an entry in a list, then adds name: to match expected syntax\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hauler-manfiest.yaml"',title:'"hauler-manfiest.yaml"'},"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-cluster-images-example\nspec:\n  images:\n$IMAGE_LIST_MODIFIED\n")),(0,a.kt)("h3",{id:"resulting-hauler-manifest"},"Resulting Hauler Manifest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hauler-manfiest.yaml"',title:'"hauler-manfiest.yaml"'},"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-cluster-images-example\nspec:\n  images:\n    - name: index.docker.io/rancher/hardened-etcd:v3.5.1-k3s1-build20220112\n    - name: index.docker.io/rancher/hardened-kubernetes:v1.23.5-rke2r1-build20220316\n    - name: index.docker.io/rancher/rke2-cloud-provider:v0.0.3-build20211118\n    - name: rancher/hardened-calico:v3.21.4-build20220228\n    - name: rancher/hardened-cluster-autoscaler:v1.8.5-build20211119\n    - name: rancher/hardened-coredns:v1.9.1-build20220318\n    - name: rancher/hardened-flannel:v0.17.0-build20220317\n    - name: rancher/hardened-k8s-metrics-server:v0.5.0-build20211119\n    - name: rancher/klipper-helm:v0.7.0-build20220315\n    - name: rancher/nginx-ingress-controller:nginx-1.0.2-hardened4\n")))}m.isMDXComponent=!0}}]);
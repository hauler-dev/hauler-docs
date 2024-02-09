"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[2228],{5788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>g});var a=r(1504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),o=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(r),p=t,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return r?a.createElement(g,l(l({ref:n},u),{},{components:r})):a.createElement(g,l({ref:n},u))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:t,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5620:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=r(5072),t=(r(1504),r(5788));const i={title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",sidebar_label:"Fetch Cluster Images"},l=void 0,s={unversionedId:"guides-references/cluster-images",id:"version-0.4.1/guides-references/cluster-images",title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",source:"@site/versioned_docs/version-0.4.1/guides-references/cluster-images.md",sourceDirName:"guides-references",slug:"/guides-references/cluster-images",permalink:"/hauler-docs/docs/0.4.1/guides-references/cluster-images",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.1/guides-references/cluster-images.md",tags:[],version:"0.4.1",frontMatter:{title:"Fetching Cluster Images",description:"Fetching Images on a Cluster Documentation",sidebar_label:"Fetch Cluster Images"},sidebar:"haulerSidebar",previous:{title:"Content Validation",permalink:"/hauler-docs/docs/0.4.1/guides-references/validation"},next:{title:"Overview",permalink:"/hauler-docs/docs/0.4.1/guides-references/hauler-collections/overview"}},c={},o=[{value:"Example Output",id:"example-output",level:3},{value:"Hauler Manifest using the Images",id:"hauler-manifest-using-the-images",level:3},{value:"Resulting Hauler Manifest",id:"resulting-hauler-manifest",level:3}],u={toc:o},d="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(d,(0,a.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"It may be difficult to understand exactly what ",(0,t.yg)("inlineCode",{parentName:"p"},"content")," is actively within your environment. Below is a simple way to generate a list of all images running in your environment, store it as an environment variable, and show the list by echoing the environment variable."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"export IMAGE_LIST=$(kubectl get pods --all-namespaces -o jsonpath=\"{.items[*].spec.containers[*].image}\" |tr -s '[[:space:]]' '\\n' |sort |uniq -c | cut -c 9-)\necho \"$IMAGE_LIST\"\n")),(0,t.yg)("h3",{id:"example-output"},"Example Output"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"index.docker.io/rancher/hardened-etcd:v3.5.1-k3s1-build20220112\nindex.docker.io/rancher/hardened-kubernetes:v1.23.5-rke2r1-build20220316\nindex.docker.io/rancher/rke2-cloud-provider:v0.0.3-build20211118\nrancher/hardened-calico:v3.21.4-build20220228\nrancher/hardened-cluster-autoscaler:v1.8.5-build20211119\nrancher/hardened-coredns:v1.9.1-build20220318\nrancher/hardened-flannel:v0.17.0-build20220317\nrancher/hardened-k8s-metrics-server:v0.5.0-build20211119\nrancher/klipper-helm:v0.7.0-build20220315\nrancher/nginx-ingress-controller:nginx-1.0.2-hardened4\n")),(0,t.yg)("h3",{id:"hauler-manifest-using-the-images"},"Hauler Manifest using the Images"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"IMAGE_LIST_MODIFIED=$(cat \"$IMAGE_LIST\" | sed 's/^/  - name: /')\n# sed, stream editor, appends 2 spaces of indentation denotes\n# an entry in a list, then adds name: to match expected syntax\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hauler-manfiest.yaml"',title:'"hauler-manfiest.yaml"'},"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-cluster-images-example\nspec:\n  images:\n$IMAGE_LIST_MODIFIED\n")),(0,t.yg)("h3",{id:"resulting-hauler-manifest"},"Resulting Hauler Manifest"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hauler-manfiest.yaml"',title:'"hauler-manfiest.yaml"'},"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-cluster-images-example\nspec:\n  images:\n    - name: index.docker.io/rancher/hardened-etcd:v3.5.1-k3s1-build20220112\n    - name: index.docker.io/rancher/hardened-kubernetes:v1.23.5-rke2r1-build20220316\n    - name: index.docker.io/rancher/rke2-cloud-provider:v0.0.3-build20211118\n    - name: rancher/hardened-calico:v3.21.4-build20220228\n    - name: rancher/hardened-cluster-autoscaler:v1.8.5-build20211119\n    - name: rancher/hardened-coredns:v1.9.1-build20220318\n    - name: rancher/hardened-flannel:v0.17.0-build20220317\n    - name: rancher/hardened-k8s-metrics-server:v0.5.0-build20211119\n    - name: rancher/klipper-helm:v0.7.0-build20220315\n    - name: rancher/nginx-ingress-controller:nginx-1.0.2-hardened4\n")))}m.isMDXComponent=!0}}]);
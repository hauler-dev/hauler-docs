"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[7446],{5209:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=a(4848),r=a(8453);const s={title:"Hauler Manifests",description:"Hauler Manifests Documentation",sidebar_label:"Hauler Manifests"},i=void 0,l={id:"guides-references/manifests",title:"Hauler Manifests",description:"Hauler Manifests Documentation",source:"@site/versioned_docs/version-1.0.x/guides-references/manifests.md",sourceDirName:"guides-references",slug:"/guides-references/manifests",permalink:"/docs/1.0.x/guides-references/manifests",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.0.x/guides-references/manifests.md",tags:[],version:"1.0.x",frontMatter:{title:"Hauler Manifests",description:"Hauler Manifests Documentation",sidebar_label:"Hauler Manifests"},sidebar:"haulerSidebar",previous:{title:"Hauler Fileserver",permalink:"/docs/1.0.x/guides-references/utilities/fileserver"},next:{title:"Community Collections",permalink:"/docs/1.0.x/guides-references/hauler-collections/community-collections"}},o={},c=[{value:"Example Manifest for Images",id:"example-manifest-for-images",level:2},{value:"Example Manifest for Charts",id:"example-manifest-for-charts",level:2},{value:"Example Manifest for Files",id:"example-manifest-for-files",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-manifest-for-images",children:"Example Manifest for Images"}),"\n",(0,t.jsxs)(n.p,{children:["Please review the Hauler Content Pages for ",(0,t.jsx)(n.a,{href:"/docs/1.0.x/guides-references/hauler-content/images",children:"Images"})," for more detailed information."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="hauler-image-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-content-images-example\n  annotations:\n    # global flags for all images in the manifest\n    # image flags override global flags\n    hauler.dev/key: <cosign public key>\n    hauler.dev/platform: <platform>\n    hauler.dev/registry: <registry>\nspec:\n  images:\n    # fetch image\n    - name: neuvector/scanner\n    # fetch image with full image reference\n    - name: docker.io/neuvector/updater:latest\n    # fetch image with full image reference with digest\n    - name: docker.io/neuvector/updater@sha256:0076b356368c9988eec5f3cead771d29a377074b982f22800f4d9c8c3b215a56\n    # fetch image with full image reference, specific version, specific platform\n    - name: docker.io/longhornio/longhorn-ui:v1.6.0\n      platform: linux/amd64\n    # fetch image with full image reference, specific version, specific platform, and signature verification\n    - name: docker.io/longhornio/longhorn-manager:v1.6.0\n      key: cosign-public-key.pub\n      platform: linux/amd64\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-manifest-for-charts",children:"Example Manifest for Charts"}),"\n",(0,t.jsxs)(n.p,{children:["Please review the Hauler Content Pages for ",(0,t.jsx)(n.a,{href:"/docs/1.0.x/guides-references/hauler-content/charts",children:"Charts"})," for more detailed information."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="hauler-chart-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: hauler-content-charts-example\nspec:\n  charts:\n    # fetch helm chart\n    - name: rancher\n      repoURL: https://releases.rancher.com/server-charts/stable\n    # fetch helm chart with specific version\n    - name: rancher\n      repoURL: https://releases.rancher.com/server-charts/stable\n      version: 2.8.2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-manifest-for-files",children:"Example Manifest for Files"}),"\n",(0,t.jsxs)(n.p,{children:["Please review the Hauler Content Pages for ",(0,t.jsx)(n.a,{href:"/docs/1.0.x/guides-references/hauler-content/files",children:"Files"})," for more detailed information."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="hauler-file-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Files\nmetadata:\n  name: hauler-content-files-example\nspec:\n  files:\n    # fetch remote file\n    - path: https://get.rke2.io\n    # fetch remote file and assign new name\n    - path: https://get.rke2.io\n      name: install.sh\n    # fetch local file\n    - path: path/to/local/file.txt\n    # fetch local file and assign new name\n    - path: path/to/local/file.txt\n      name: local-file.txt\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(6540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
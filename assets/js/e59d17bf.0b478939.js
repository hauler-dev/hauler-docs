"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[1246],{1948:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=a(4848),i=a(8453);const t={title:"Hauler Content - Images",description:"Hauler Content - Images Documentation",sidebar_label:"Images"},o=void 0,l={id:"guides-references/hauler-content/images",title:"Hauler Content - Images",description:"Hauler Content - Images Documentation",source:"@site/versioned_docs/version-1.0.0/guides-references/hauler-content/images.md",sourceDirName:"guides-references/hauler-content",slug:"/guides-references/hauler-content/images",permalink:"/docs/1.0.0/guides-references/hauler-content/images",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.0.0/guides-references/hauler-content/images.md",tags:[],version:"1.0.0",frontMatter:{title:"Hauler Content - Images",description:"Hauler Content - Images Documentation",sidebar_label:"Images"},sidebar:"haulerSidebar",previous:{title:"Community Collections",permalink:"/docs/1.0.0/guides-references/hauler-collections/community-collections"},next:{title:"Charts",permalink:"/docs/1.0.0/guides-references/hauler-content/charts"}},s={},c=[{value:"Hauler Command Line for Images",id:"hauler-command-line-for-images",level:2},{value:"Example Commands for Images",id:"example-commands-for-images",level:2},{value:"Hauler Manifest for Images",id:"hauler-manifest-for-images",level:2},{value:"Example Manifest for Images",id:"example-manifest-for-images",level:2}];function m(e){const n={code:"code",h2:"h2",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"hauler-command-line-for-images",children:"Hauler Command Line for Images"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hauler store add image <image reference> --platform <platform> --key <cosign public key>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-commands-for-images",children:"Example Commands for Images"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# fetch image\nhauler store add image neuvector/scanner\n\n# fetch image with full image reference\nhauler store add image name: docker.io/neuvector/updater:latest\n\n# fetch image with full image reference with digest\nhauler store add image docker.io/neuvector/updater@sha256:0076b356368c9988eec5f3cead771d29a377074b982f22800f4d9c8c3b215a56\n\n# fetch image with full image reference, specific version, specific platform\nhauler store add image docker.io/longhornio/longhorn-ui:v1.6.0 --platform: linux/amd64\n\n# fetch image with full image reference, specific version, specific platform, and signature verification\nhauler store add image docker.io/longhornio/longhorn-manager:v1.6.0 --platform linux/amd64 --key cosign-public-key.pub\n"})}),"\n",(0,r.jsx)(n.h2,{id:"hauler-manifest-for-images",children:"Hauler Manifest for Images"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="hauler-image-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-content-images-example\n  annotations:\n    # global flags for all images in the manifest\n    # image flags override global flags\n    hauler.dev/key: <cosign public key>\n    hauler.dev/platform: <platform>\n    hauler.dev/registry: <registry>\nspec:\n  images:\n    - name: <image reference>\n      key: <cosign public key>\n      platform: <platform>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-manifest-for-images",children:"Example Manifest for Images"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="hauler-image-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-content-images-example\n  annotations:\n    # global flags for all images in the manifest\n    # image flags override global flags\n    hauler.dev/key: <cosign public key>\n    hauler.dev/platform: <platform>\n    hauler.dev/registry: <registry>\nspec:\n  images:\n    # fetch image\n    - name: neuvector/scanner\n    # fetch image with full image reference\n    - name: docker.io/neuvector/updater:latest\n    # fetch image with full image reference with digest\n    - name: docker.io/neuvector/updater@sha256:0076b356368c9988eec5f3cead771d29a377074b982f22800f4d9c8c3b215a56\n    # fetch image with full image reference, specific version, specific platform\n    - name: docker.io/longhornio/longhorn-ui:v1.6.0\n      platform: linux/amd64\n    # fetch image with full image reference, specific version, specific platform, and signature verification\n    - name: docker.io/longhornio/longhorn-manager:v1.6.0\n      key: cosign-public-key.pub\n      platform: linux/amd64\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var r=a(6540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
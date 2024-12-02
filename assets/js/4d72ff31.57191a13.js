"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[8432],{1032:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"hauler-usage/store/add/image","title":"Hauler Store Add Image","description":"Hauler Store Add Image Usage Documentation","source":"@site/versioned_docs/version-1.1.x/hauler-usage/store/add/image.md","sourceDirName":"hauler-usage/store/add","slug":"/hauler-usage/store/add/image","permalink":"/docs/hauler-usage/store/add/image","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.1.x/hauler-usage/store/add/image.md","tags":[],"version":"1.1.x","frontMatter":{"title":"Hauler Store Add Image","description":"Hauler Store Add Image Usage Documentation","sidebar_label":"Image"},"sidebar":"haulerSidebar","previous":{"title":"Overview","permalink":"/docs/hauler-usage/store/overview"},"next":{"title":"Chart","permalink":"/docs/hauler-usage/store/add/chart"}}');var i=r(4848),l=r(8453);const t={title:"Hauler Store Add Image",description:"Hauler Store Add Image Usage Documentation",sidebar_label:"Image"},s=void 0,o={},m=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3},{value:"Hauler Command Line for Images",id:"hauler-command-line-for-images",level:3},{value:"Example Commands for Images",id:"example-commands-for-images",level:3},{value:"Hauler Manifest for Images",id:"hauler-manifest-for-images",level:3},{value:"Example Manifest for Images",id:"example-manifest-for-images",level:3}];function d(e){const a={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"hauler store add image"})," adds a image to the store."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"An example with available flags..."})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"hauler store add image <image-reference> --platform <platform> --key <cosign-public-key>\n"})}),"\n",(0,i.jsx)(a.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-yaml",children:'Usage:\n  hauler store add image [flags]\n\nExamples:\n# fetch image\nhauler store add image busybox\n\n# fetch image with repository and tag\nhauler store add image library/busybox:stable\n\n# fetch image with full image reference and specific platform\nhauler store add image ghcr.io/hauler-dev/hauler-debug:v1.0.7 --platform linux/amd74\n\n# fetch image with full image reference via digest\nhauler store add image gcr.io/distroless/base@sha256:7fa7445dfbebae4f4b7ab0e6ef99276e96075ae42584af6286ba080750d6dfe5\n\n# fetch image with full image reference, specific platform, and signature verification\nhauler store add image rgcrprod.azurecr.us/hauler/rke2-manifest.yaml:v1.28.12-rke2r1 --platform linux/amd64 --key carbide-key.pub\n\nFlags:\n  -h, --help              help for image\n  -k, --key string        (Optional) Location of public key to use for signature verification\n  -p, --platform string   (Optional) Specifiy the platform of the image... i.e. linux/amd64 (defaults to all)\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string   (default "info")\n  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")\n'})}),"\n",(0,i.jsx)(a.h3,{id:"hauler-command-line-for-images",children:"Hauler Command Line for Images"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"hauler store add image <image-reference> --platform <platform> --key <cosign-public-key>\n"})}),"\n",(0,i.jsx)(a.h3,{id:"example-commands-for-images",children:"Example Commands for Images"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"# fetch image\nhauler store add image busybox\n\n# fetch image with repository and tag\nhauler store add image library/busybox:stable\n\n# fetch image with full image reference and specific platform\nhauler store add image ghcr.io/hauler-dev/hauler-debug:v1.0.7 --platform linux/amd74\n\n# fetch image with full image reference via digest\nhauler store add image gcr.io/distroless/base@sha256:7fa7445dfbebae4f4b7ab0e6ef99276e96075ae42584af6286ba080750d6dfe5\n\n# fetch image with full image reference, specific platform, and signature verification\nhauler store add image rgcrprod.azurecr.us/hauler/rke2-manifest.yaml:v1.28.12-rke2r1 --platform linux/amd64 --key carbide-key.pub\n"})}),"\n",(0,i.jsx)(a.h3,{id:"hauler-manifest-for-images",children:"Hauler Manifest for Images"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-yaml",metastring:'title="hauler-image-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-content-images-example\n  annotations:\n    # global flags for all images in the manifest\n    # image flags override global flags\n    # example: key set globally, but not observed if set per image\n    # example: platform set globally, but not observed if set per image\n    # example: registry set globally, but not observed if set per image\n    hauler.dev/key: <cosign-public-key>\n    hauler.dev/platform: <platform>\n    hauler.dev/registry: <registry>\nspec:\n  images:\n    - name: <image-reference>\n      key: <cosign-public-key>\n      platform: <platform>\n"})}),"\n",(0,i.jsx)(a.h3,{id:"example-manifest-for-images",children:"Example Manifest for Images"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-yaml",metastring:'title="hauler-image-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-content-images-example\n  annotations:\n    # global flags for all images in the manifest\n    # image flags override global flags\n    # example: key set globally, but not observed if set per image\n    # example: platform set globally, but not observed if set per image\n    # example: registry set globally, but not observed if set per image\n    hauler.dev/key: <cosign-public-key>\n    hauler.dev/platform: <platform>\n    hauler.dev/registry: <registry>\nspec:\n  images:\n    # fetch image\n    - name: neuvector/scanner\n    # fetch image with full image reference\n    - name: docker.io/neuvector/updater:latest\n    # fetch image with full image reference with digest\n    - name: docker.io/neuvector/updater@sha256:0076b356368c9988eec5f3cead771d29a377074b982f22800f4d9c8c3b215a56\n    # fetch image with full image reference, specific version, specific platform\n    - name: docker.io/longhornio/longhorn-ui:v1.6.0\n      platform: linux/amd64\n    # fetch image with full image reference, specific version, specific platform, and signature verification\n    - name: docker.io/longhornio/longhorn-manager:v1.6.0\n      key: cosign-public-key.pub\n      platform: linux/amd64\n"})})]})}function c(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>t,x:()=>s});var n=r(6540);const i={},l=n.createContext(i);function t(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);
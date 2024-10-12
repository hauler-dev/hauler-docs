"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[974],{5787:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(4848),s=t(8453);const o={title:"Hauler Store Sync",description:"Hauler Store Sync Usage Documentation",sidebar_label:"Sync"},i=void 0,a={id:"hauler-usage/store/sync",title:"Hauler Store Sync",description:"Hauler Store Sync Usage Documentation",source:"@site/versioned_docs/version-1.1.x/hauler-usage/store/sync.md",sourceDirName:"hauler-usage/store",slug:"/hauler-usage/store/sync",permalink:"/docs/hauler-usage/store/sync",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.1.x/hauler-usage/store/sync.md",tags:[],version:"1.1.x",frontMatter:{title:"Hauler Store Sync",description:"Hauler Store Sync Usage Documentation",sidebar_label:"Sync"},sidebar:"haulerSidebar",previous:{title:"Fileserver",permalink:"/docs/hauler-usage/store/serve/fileserver"},next:{title:"Hauler Completion",permalink:"/docs/hauler-usage/completion"}},l={},c=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3}];function u(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"hauler store sync"})," syncs content to the content store."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"An example with available flags..."})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"hauler store sync --files <file-name> --platform <platform> --key <cosign-public-key> --registry <registry-url>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store sync [flags]\n\nFlags:\n  -f, --files strings             Location of content manifests (files)... i.e. --files ./rke2-files.yaml\n  -h, --help                      help for sync\n  -k, --key string                (Optional) Location of public key to use for signature verification\n  -p, --platform string           (Optional) Specify the platform of the image... i.e linux/amd64 (defaults to all)\n  -c, --product-registry string   (Optional) Specify the product registry. Defaults to RGS Carbide Registry (rgcrprod.azurecr.us)\n      --products strings          (Optional) Specify the product name to fetch collections from the product registry i.e. rancher=v2.9.2,rke2=v1.29.9+rke2r1\n  -r, --registry string           (Optional) Specify the registry of the image for images that do not alredy define one\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")\n'})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(6540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
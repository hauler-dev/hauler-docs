"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[5184],{6324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"hauler-usage/store/sync","title":"Hauler Store Sync","description":"Hauler Store Sync Usage Documentation","source":"@site/docs/hauler-usage/store/sync.md","sourceDirName":"hauler-usage/store","slug":"/hauler-usage/store/sync","permalink":"/docs/next/hauler-usage/store/sync","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/docs/hauler-usage/store/sync.md","tags":[],"version":"current","frontMatter":{"title":"Hauler Store Sync","description":"Hauler Store Sync Usage Documentation","sidebar_label":"Sync"},"sidebar":"haulerSidebar","previous":{"title":"Fileserver","permalink":"/docs/next/hauler-usage/store/serve/fileserver"},"next":{"title":"Hauler Completion","permalink":"/docs/next/hauler-usage/completion"}}');var s=r(4848),o=r(8453);const a={title:"Hauler Store Sync",description:"Hauler Store Sync Usage Documentation",sidebar_label:"Sync"},i=void 0,l={},c=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"hauler store sync"})," syncs content to the content store."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"An example with available flags..."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"hauler store sync --files <file-name> --platform <platform> --key <cosign-public-key> --registry <registry-url>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'Usage:\n  hauler store sync [flags]\n\nFlags:\n  -f, --files strings             Location of content manifests (files)... i.e. --files ./rke2-files.yaml\n  -h, --help                      help for sync\n  -k, --key string                (Optional) Location of public key to use for signature verification\n  -p, --platform string           (Optional) Specify the platform of the image... i.e linux/amd64 (defaults to all)\n  -c, --product-registry string   (Optional) Specify the product registry. Defaults to RGS Carbide Registry (rgcrprod.azurecr.us)\n      --products strings          (Optional) Specify the product name to fetch collections from the product registry i.e. rancher=v2.9.2,rke2=v1.29.9+rke2r1\n  -r, --registry string           (Optional) Specify the registry of the image for images that do not alredy define one\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
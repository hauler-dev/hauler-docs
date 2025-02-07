"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[5184],{7500:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"hauler-usage/store/sync","title":"Hauler Store Sync","description":"Hauler Store Sync Usage Documentation","source":"@site/docs/hauler-usage/store/sync.md","sourceDirName":"hauler-usage/store","slug":"/hauler-usage/store/sync","permalink":"/docs/next/hauler-usage/store/sync","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/docs/hauler-usage/store/sync.md","tags":[],"version":"current","frontMatter":{"title":"Hauler Store Sync","description":"Hauler Store Sync Usage Documentation","sidebar_label":"Sync"},"sidebar":"haulerSidebar","previous":{"title":"Fileserver","permalink":"/docs/next/hauler-usage/store/serve/fileserver"},"next":{"title":"Hauler Completion","permalink":"/docs/next/hauler-usage/completion"}}');var o=t(4848),s=t(8453);const a={title:"Hauler Store Sync",description:"Hauler Store Sync Usage Documentation",sidebar_label:"Sync"},i=void 0,l={},c=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3}];function u(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"hauler store sync"})," syncs content to the content store."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"An example with available flags..."})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"hauler store sync --filename <file-name> --platform <platform> --key <cosign-public-key> --registry <registry-url>\n"})}),"\n",(0,o.jsx)(r.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store sync [flags]\n\nFlags:\n  -f, --filename strings          Specify the name of manifest(s) to sync (default [hauler-manifest.yaml])\n  -h, --help                      help for sync\n  -k, --key string                (Optional) Location of public key to use for signature verification\n  -p, --platform string           (Optional) Specify the platform of the image... i.e linux/amd64 (defaults to all)\n  -c, --product-registry string   (Optional) Specify the product registry. Defaults to RGS Carbide Registry (rgcrprod.azurecr.us)\n      --products strings          (Optional) Specify the product name to fetch collections from the product registry i.e. rancher=v2.10.1,rke2=v1.31.5+rke2r1\n  -g, --registry string           (Optional) Specify the registry of the image for images that do not alredy define one\n  -t, --tempdir string            (Optional) Override the default temporary directiory determined by the OS\n\nGlobal Flags:\n  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)\n      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)\n  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")\n  -r, --retries int        Set the number of retries for operations (default 3)\n  -s, --store string       Set the directory to use for the content store\n'})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(6540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
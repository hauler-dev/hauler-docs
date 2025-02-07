"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[8908],{8603:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"hauler-usage/store/serve/fileserver","title":"Hauler Store Serve Fileserver","description":"Hauler Store Serve Fileserver Usage Documentation","source":"@site/versioned_docs/version-1.2.x/hauler-usage/store/serve/fileserver.md","sourceDirName":"hauler-usage/store/serve","slug":"/hauler-usage/store/serve/fileserver","permalink":"/docs/hauler-usage/store/serve/fileserver","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.2.x/hauler-usage/store/serve/fileserver.md","tags":[],"version":"1.2.x","frontMatter":{"title":"Hauler Store Serve Fileserver","description":"Hauler Store Serve Fileserver Usage Documentation","sidebar_label":"Fileserver"},"sidebar":"haulerSidebar","previous":{"title":"Registry","permalink":"/docs/hauler-usage/store/serve/registry"},"next":{"title":"Sync","permalink":"/docs/hauler-usage/store/sync"}}');var o=t(4848),n=t(8453);const i={title:"Hauler Store Serve Fileserver",description:"Hauler Store Serve Fileserver Usage Documentation",sidebar_label:"Fileserver"},l=void 0,a={},u=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3},{value:"Example Commands for the Hauler Fileserver",id:"example-commands-for-the-hauler-fileserver",level:2}];function c(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"hauler store serve fileserver"})," serves the fileserver."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"An example with available flags..."})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"hauler store serve fileserver --port <port> --timeout <timeout> --tls-cert <cert> --tls-key <key>\n"})}),"\n",(0,o.jsx)(r.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store serve fileserver [flags]\n\nFlags:\n      --directory string   (Optional) Directory to use for backend. Defaults to $PWD/fileserver (default "fileserver")\n  -h, --help               help for fileserver\n  -p, --port int           (Optional) Set the port to use for incoming connections (default 8080)\n  -t, --timeout int        (Optional) Timeout duration for HTTP Requests in seconds for both reads/writes (default 60)\n      --tls-cert string    (Optional) Location of the TLS Certificate to use for server authenication\n      --tls-key string     (Optional) Location of the TLS Key to use for server authenication\n\nGlobal Flags:\n  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)\n      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)\n  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")\n  -r, --retries int        Set the number of retries for operations (default 3)\n  -s, --store string       Set the directory to use for the content store\n'})}),"\n",(0,o.jsx)(r.h2,{id:"example-commands-for-the-hauler-fileserver",children:"Example Commands for the Hauler Fileserver"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# serve fileserver\nhauler store serve fileserver\n\n# serve fileserver on specific port\nhauler store serve fileserver --port <port>\n"})})]})}function v(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(6540);const o={},n=s.createContext(o);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[3965],{3388:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>u});var r=o(4848),a=o(8453);const s={title:"Hauler Login",description:"Hauler Login Usage Documentation",sidebar_label:"Hauler Login"},i=void 0,t={id:"hauler-usage/login",title:"Hauler Login",description:"Hauler Login Usage Documentation",source:"@site/versioned_docs/version-1.1.x/hauler-usage/login.md",sourceDirName:"hauler-usage",slug:"/hauler-usage/login",permalink:"/docs/hauler-usage/login",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.1.x/hauler-usage/login.md",tags:[],version:"1.1.x",frontMatter:{title:"Hauler Login",description:"Hauler Login Usage Documentation",sidebar_label:"Hauler Login"},sidebar:"haulerSidebar",previous:{title:"Hauler Help",permalink:"/docs/hauler-usage/help"},next:{title:"Overview",permalink:"/docs/hauler-usage/store/overview"}},l={},u=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3}];function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hauler login"})," logs into an OCI Compliant registry that is stored at ",(0,r.jsx)(n.code,{children:"~/.docker/config.json"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"An example with available flags..."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hauler login <registry-url> --username <username> --password <password>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler login [flags]\n\nExamples:\n# Log into registry.example.com\nhauler login registry.example.com -u bob -p haulin\n\nFlags:\n  -h, --help              help for login\n  -p, --password string   (Optional) Password to use for authentication\n      --password-stdin    (Optional) Password to use for authentication (from stdin)\n  -u, --username string   (Optional) Username to use for authentication\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>t});var r=o(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
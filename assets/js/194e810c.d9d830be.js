"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[902],{6990:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(4848),t=n(8453);const o={title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",sidebar_label:"Known Issues/Limits"},r=void 0,l={id:"known-limits",title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",source:"@site/versioned_docs/version-0.4.4/known-limits.md",sourceDirName:".",slug:"/known-limits",permalink:"/docs/0.4.4/known-limits",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-0.4.4/known-limits.md",tags:[],version:"0.4.4",frontMatter:{title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",sidebar_label:"Known Issues/Limits"},sidebar:"haulerSidebar",previous:{title:"Hauler Version",permalink:"/docs/0.4.4/guides-references/command-line/hauler-version"}},a={},d=[{value:"Issues",id:"issues",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Notices",id:"notices",level:2},{value:"Upcoming Deprecated Command(s):",id:"upcoming-deprecated-commands",level:4}];function c(e){const s={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Copying SBOMS to AWS Elastic Container Registry (AWS ECR):","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["When using ",(0,i.jsx)(s.code,{children:"hauler store copy"})," to AWS ECR, the Software Bill of Materials (SBOM) attachement will fail to copy due to changes in the way ",(0,i.jsx)(s.code,{children:"cosign"})," handles attachments. ",(0,i.jsx)(s.strong,{children:"We are investigating a way forward to address this issue."})]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/sigstore/cosign/blob/main/specs/SBOM_SPEC.md",children:"https://github.com/sigstore/cosign/blob/main/specs/SBOM_SPEC.md"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/sigstore/cosign/issues/2755",children:"https://github.com/sigstore/cosign/issues/2755"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'No "known" limitations at this time but as a reminder, Hauler and the Hauler Documentation are in active development and not Generally Available (GA).'}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"notices",children:"Notices"}),"\n",(0,i.jsx)(s.h4,{id:"upcoming-deprecated-commands",children:"Upcoming Deprecated Command(s):"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"hauler download"})," (alternatively ",(0,i.jsx)(s.code,{children:"hauler dl"}),") is deprecated and will be removed in a future release."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"hauler serve"})," is deprecated and will be removed in a future release."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var i=n(6540);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);
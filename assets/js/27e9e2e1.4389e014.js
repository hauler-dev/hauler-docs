"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[8191],{8403:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=s(4848),t=s(8453);const o={title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",sidebar_label:"Known Issues/Limits"},l=void 0,r={id:"known-limits",title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",source:"@site/versioned_docs/version-1.0.0/known-limits.md",sourceDirName:".",slug:"/known-limits",permalink:"/docs/1.0.0/known-limits",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.0.0/known-limits.md",tags:[],version:"1.0.0",frontMatter:{title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",sidebar_label:"Known Issues/Limits"},sidebar:"haulerSidebar",previous:{title:"Hauler Version",permalink:"/docs/1.0.0/guides-references/command-line/hauler-version"},next:{title:"Feedback",permalink:"/docs/1.0.0/feedback"}},c={},a=[{value:"Issues",id:"issues",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Notices",id:"notices",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No Issues at this time."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When using a ",(0,i.jsx)(n.code,{children:"store"})," for ",(0,i.jsx)(n.code,{children:"hauler"})," that has the same name of a ",(0,i.jsx)(n.code,{children:"helm"})," chart, ",(0,i.jsx)(n.code,{children:"hauler"})," will fail to fetch the chart.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For example, if you tried to use a ",(0,i.jsx)(n.code,{children:"store"})," name of ",(0,i.jsx)(n.code,{children:"rancher"})," with a ",(0,i.jsx)(n.code,{children:"helm"})," chart name ",(0,i.jsx)(n.code,{children:"rancher"}),", the fetch will fail due to the fact that ",(0,i.jsx)(n.code,{children:"helm"})," defaults to using an exisiting local directory, if it matches the name of the chart."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/helm/helm/blob/e81f6140ddb22bc99a08f7409522a8dbe5338ee3/pkg/action/install.go#L714-L815",children:"https://github.com/helm/helm/blob/e81f6140ddb22bc99a08f7409522a8dbe5338ee3/pkg/action/install.go#L714-L815"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notices",children:"Notices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No Notices at this time."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(6540);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
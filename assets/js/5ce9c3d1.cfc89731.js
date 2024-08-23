"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[5722],{6806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(4848),s=n(8453);const a={title:"Charts (Content Type)",description:'Hauler "Charts" Content Documentation',sidebar_label:"Charts"},o=void 0,i={id:"guides-references/hauler-content/charts",title:"Charts (Content Type)",description:'Hauler "Charts" Content Documentation',source:"@site/versioned_docs/version-0.4.2/guides-references/hauler-content/charts.md",sourceDirName:"guides-references/hauler-content",slug:"/guides-references/hauler-content/charts",permalink:"/docs/0.4.2/guides-references/hauler-content/charts",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-0.4.2/guides-references/hauler-content/charts.md",tags:[],version:"0.4.2",frontMatter:{title:"Charts (Content Type)",description:'Hauler "Charts" Content Documentation',sidebar_label:"Charts"},sidebar:"haulerSidebar",previous:{title:"Images",permalink:"/docs/0.4.2/guides-references/hauler-content/images"},next:{title:"Files",permalink:"/docs/0.4.2/guides-references/hauler-content/files"}},c={},l=[];function d(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Hauler supports the experimental format of Helm Chart OCI Artifacts, but can also be represented as the usual Tarball Artifact!"})}),"\n",(0,r.jsx)(t.p,{children:"Helm charts represented as OCI content:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# add a helm chart (defaults to latest version)\nhauler store add chart loki --repo "https://grafana.github.io/helm-charts"\n\n# add a specific version of a helm chart\nhauler store add chart loki --repo "https://grafana.github.io/helm-charts" --version 2.8.1\n\n# install directly from the oci content\nHELM_EXPERIMENTAL_OCI=1 helm install loki oci://localhost:3000/library/loki --version 2.8.1\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
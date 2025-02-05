"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[5861],{166:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"guides-references/hauler-content/charts","title":"Hauler Content - Charts","description":"Hauler Content - Charts Documentation","source":"@site/versioned_docs/version-1.0.0/guides-references/hauler-content/charts.md","sourceDirName":"guides-references/hauler-content","slug":"/guides-references/hauler-content/charts","permalink":"/docs/1.0.0/guides-references/hauler-content/charts","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.0.0/guides-references/hauler-content/charts.md","tags":[],"version":"1.0.0","frontMatter":{"title":"Hauler Content - Charts","description":"Hauler Content - Charts Documentation","sidebar_label":"Charts"},"sidebar":"haulerSidebar","previous":{"title":"Images","permalink":"/docs/1.0.0/guides-references/hauler-content/images"},"next":{"title":"Files","permalink":"/docs/1.0.0/guides-references/hauler-content/files"}}');var n=a(4848),s=a(8453);const c={title:"Hauler Content - Charts",description:"Hauler Content - Charts Documentation",sidebar_label:"Charts"},o=void 0,h={},l=[{value:"Hauler Command Line for Charts",id:"hauler-command-line-for-charts",level:2},{value:"Example Commands for Charts",id:"example-commands-for-charts",level:2},{value:"Hauler Manifest for Charts",id:"hauler-manifest-for-charts",level:2},{value:"Example Manifest for Charts",id:"example-manifest-for-charts",level:2}];function i(e){const r={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"hauler-command-line-for-charts",children:"Hauler Command Line for Charts"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"hauler store add chart <chart name> --repo <chart repository> --version <chart version>\n"})}),"\n",(0,n.jsx)(r.h2,{id:"example-commands-for-charts",children:"Example Commands for Charts"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch helm chart\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable\n\n# fetch helm chart with specific version\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable --version 2.8.2\n"})}),"\n",(0,n.jsx)(r.h2,{id:"hauler-manifest-for-charts",children:"Hauler Manifest for Charts"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:'title="hauler-chart-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: hauler-content-charts-example\nspec:\n  charts:\n    # fetch helm chart\n    - name: <chart name>\n      repoURL: <chart repository>\n      version: <chart version>\n"})}),"\n",(0,n.jsx)(r.h2,{id:"example-manifest-for-charts",children:"Example Manifest for Charts"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:'title="hauler-chart-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: hauler-content-charts-example\nspec:\n  charts:\n    # fetch helm chart\n    - name: rancher\n      repoURL: https://releases.rancher.com/server-charts/stable\n    # fetch helm chart with specific version\n    - name: rancher\n      repoURL: https://releases.rancher.com/server-charts/stable\n      version: 2.8.2\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>c,x:()=>o});var t=a(6540);const n={},s=t.createContext(n);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
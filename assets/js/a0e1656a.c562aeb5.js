"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[6506],{3303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(4848),a=t(8453);const s={title:"Images (Content Type)",description:'Hauler "Images" Content Documentation',sidebar_label:"Images"},o=void 0,c={id:"guides-references/hauler-content/images",title:"Images (Content Type)",description:'Hauler "Images" Content Documentation',source:"@site/versioned_docs/version-0.4.4/guides-references/hauler-content/images.md",sourceDirName:"guides-references/hauler-content",slug:"/guides-references/hauler-content/images",permalink:"/docs/0.4.4/guides-references/hauler-content/images",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-0.4.4/guides-references/hauler-content/images.md",tags:[],version:"0.4.4",frontMatter:{title:"Images (Content Type)",description:'Hauler "Images" Content Documentation',sidebar_label:"Images"},sidebar:"haulerSidebar",previous:{title:"Overview",permalink:"/docs/0.4.4/guides-references/hauler-content/overview"},next:{title:"Charts",permalink:"/docs/0.4.4/guides-references/hauler-content/charts"}},i={},l=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Any OCI compatible image can be fetched remotely:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# "shorthand"  image references\nhauler store add image rancher/rancher:v2.8.2\n\n# fully qualified image references\nhauler store add image ghcr.io/fluxcd/flux-cli@sha256:02aa820c3a9c57d67208afcfc4bce9661658c17d15940aea369da259d2b976dd\n\n# adds an arch/platform specific version of a multi-arch image to the haul/store.  by default, hauler will pull and save all archs/platforms contained in the image manifest.\nhauler store add image rancher/rancher:v2.8.2 --platform linux/amd64\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(6540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
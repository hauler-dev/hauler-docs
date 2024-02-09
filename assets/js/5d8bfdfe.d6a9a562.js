"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[4100],{5788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>m});var n=t(1504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2532:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(5072),a=(t(1504),t(5788));const o={title:"Images (Content Type)",description:'Hauler "Images" Content Documentation',sidebar_label:"Images"},c=void 0,i={unversionedId:"guides-references/hauler-content/images",id:"version-0.4.1/guides-references/hauler-content/images",title:"Images (Content Type)",description:'Hauler "Images" Content Documentation',source:"@site/versioned_docs/version-0.4.1/guides-references/hauler-content/images.md",sourceDirName:"guides-references/hauler-content",slug:"/guides-references/hauler-content/images",permalink:"/hauler-docs/docs/0.4.1/guides-references/hauler-content/images",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.1/guides-references/hauler-content/images.md",tags:[],version:"0.4.1",frontMatter:{title:"Images (Content Type)",description:'Hauler "Images" Content Documentation',sidebar_label:"Images"},sidebar:"haulerSidebar",previous:{title:"Overview",permalink:"/hauler-docs/docs/0.4.1/guides-references/hauler-content/overview"},next:{title:"Charts",permalink:"/hauler-docs/docs/0.4.1/guides-references/hauler-content/charts"}},s={},l=[],u={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,a.yg)(d,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Any OCI compatible image can be fetched remotely:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'# "shorthand"  image references\nhauler store add image rancher/rancher:v2.7.9\n\n# fully qualified image references\nhauler store add image ghcr.io/fluxcd/flux-cli@sha256:02aa820c3a9c57d67208afcfc4bce9661658c17d15940aea369da259d2b976dd\n')))}p.isMDXComponent=!0}}]);
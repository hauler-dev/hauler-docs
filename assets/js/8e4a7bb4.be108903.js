"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[4612],{5788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var r=t(1504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=i,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(5072),i=(t(1504),t(5788));const a={title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",sidebar_label:"Known Issues/Limits"},o=void 0,s={unversionedId:"known-limits",id:"version-0.4.2/known-limits",title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",source:"@site/versioned_docs/version-0.4.2/known-limits.md",sourceDirName:".",slug:"/known-limits",permalink:"/hauler-docs/docs/0.4.2/known-limits",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.2/known-limits.md",tags:[],version:"0.4.2",frontMatter:{title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",sidebar_label:"Known Issues/Limits"},sidebar:"haulerSidebar",previous:{title:"Hauler Version",permalink:"/hauler-docs/docs/0.4.2/guides-references/command-line/hauler-version"}},l={},u=[{value:"Issues",id:"issues",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Notices",id:"notices",level:2},{value:"Upcoming Deprecated Command(s):",id:"upcoming-deprecated-commands",level:4}],c={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"issues"},"Issues"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Copying SBOMS to AWS Elastic Container Registry (AWS ECR):",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"When using ",(0,i.yg)("inlineCode",{parentName:"li"},"hauler store copy")," to AWS ECR, the Software Bill of Materials (SBOM) attachement will fail to copy due to changes in the way ",(0,i.yg)("inlineCode",{parentName:"li"},"cosign")," handles attachments. ",(0,i.yg)("strong",{parentName:"li"},"We are investigating a way forward to address this issue.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/sigstore/cosign/blob/main/specs/SBOM_SPEC.md"},"https://github.com/sigstore/cosign/blob/main/specs/SBOM_SPEC.md")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/sigstore/cosign/issues/2755"},"https://github.com/sigstore/cosign/issues/2755"))))),(0,i.yg)("h2",{id:"limitations"},"Limitations"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Display of Information in the Hauler Store:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"When using ",(0,i.yg)("inlineCode",{parentName:"li"},"hauler store info")," with signature verification, you may encounter errors in the presentation of the number layers and size of layers in the store. Hauler is correctly fetching, storing, packaging, and distributing each image, but the presentation and display can error. ",(0,i.yg)("strong",{parentName:"li"},"We are actively working to address and fix this issue."))))),(0,i.yg)("h2",{id:"notices"},"Notices"),(0,i.yg)("h4",{id:"upcoming-deprecated-commands"},"Upcoming Deprecated Command(s):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hauler download")," (alternatively ",(0,i.yg)("inlineCode",{parentName:"li"},"hauler dl"),") is deprecated and will be removed in a future release."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hauler serve")," is deprecated and will be removed in a future release.")))}m.isMDXComponent=!0}}]);
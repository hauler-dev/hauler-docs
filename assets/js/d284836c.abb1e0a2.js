"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[6807],{8617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"guides-references/overview","title":"Overview","description":"Reference Guides Overview Documentation for Hauler","source":"@site/versioned_docs/version-1.1.x/guides-references/overview.md","sourceDirName":"guides-references","slug":"/guides-references/overview","permalink":"/docs/guides-references/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.1.x/guides-references/overview.md","tags":[],"version":"1.1.x","frontMatter":{"title":"Overview","sidebar_label":"Overview","description":"Reference Guides Overview Documentation for Hauler"},"sidebar":"haulerSidebar","previous":{"title":"Hauler Version","permalink":"/docs/hauler-usage/version"},"next":{"title":"Fetch Cluster Images","permalink":"/docs/guides-references/cluster-images"}}');var s=r(4848),i=r(8453),o=r(5871);const c={title:"Overview",sidebar_label:"Overview",description:"Reference Guides Overview Documentation for Hauler"},l=void 0,a={},u=[];function d(e){return(0,s.jsx)(o.A,{})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},5871:(e,t,r)=>{r.d(t,{A:()=>N});var n=r(6540),s=r(4164),i=r(4718),o=r(8774),c=r(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function f(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,t,e)}}var m=r(6654),h=r(1312),p=r(1107);const v={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=r(4848);function x(e){let{href:t,children:r}=e;return(0,g.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",v.cardContainer),children:r})}function w(e){let{href:t,icon:r,title:n,description:i}=e;return(0,g.jsxs)(x,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,s.A)("text--truncate",v.cardTitle),title:n,children:[r," ",n]}),i&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",v.cardDescription),title:i,children:i})]})}function j(e){let{item:t}=e;const r=(0,i.Nr)(t),n=function(){const{selectMessage:e}=f();return t=>e(t,(0,h.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,g.jsx)(w,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function b(e){let{item:t}=e;const r=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,g.jsx)(w,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(b,{item:t});case"category":return(0,g.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function C(e){let{className:t}=e;const r=(0,i.$S)();return(0,g.jsx)(N,{items:r.items,className:t})}function N(e){const{items:t,className:r}=e;if(!t)return(0,g.jsx)(C,{...e});const n=(0,i.d1)(t);return(0,g.jsx)("section",{className:(0,s.A)("row",r),children:n.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(y,{item:e})},t)))})}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
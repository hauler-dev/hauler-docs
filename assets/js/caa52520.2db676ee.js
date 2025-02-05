"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[8020],{1330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"hauler-usage/store/overview","title":"Overview","description":"Usage Documentation for Hauler Store","source":"@site/docs/hauler-usage/store/overview.md","sourceDirName":"hauler-usage/store","slug":"/hauler-usage/store/overview","permalink":"/docs/next/hauler-usage/store/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/docs/hauler-usage/store/overview.md","tags":[],"version":"current","frontMatter":{"title":"Overview","sidebar_label":"Overview","description":"Usage Documentation for Hauler Store"},"sidebar":"haulerSidebar","previous":{"title":"Hauler Login","permalink":"/docs/next/hauler-usage/login"},"next":{"title":"Image","permalink":"/docs/next/hauler-usage/store/add/image"}}');var o=r(4848),s=r(8453),i=r(7473);const a={title:"Overview",sidebar_label:"Overview",description:"Usage Documentation for Hauler Store"},c=void 0,l={},u=[];function d(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},7473:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(6540),o=r(4164),s=r(102),i=r(6289),a=r(797);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}var h=r(2887),f=r(539),p=r(9303);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var v=r(4848);function x(e){let{href:t,children:r}=e;return(0,v.jsx)(i.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:r})}function w(e){let{href:t,icon:r,title:n,description:s}=e;return(0,v.jsxs)(x,{href:t,children:[(0,v.jsxs)(p.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:n,children:[r," ",n]}),s&&(0,v.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function j(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=m();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,v.jsx)(w,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function b(e){let{item:t}=e;const r=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,v.jsx)(w,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,v.jsx)(b,{item:t});case"category":return(0,v.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const r=(0,s.$S)();return(0,v.jsx)(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return(0,v.jsx)(N,{...e});const n=(0,s.d1)(t);return(0,v.jsx)("section",{className:(0,o.A)("row",r),children:n.map(((e,t)=>(0,v.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,v.jsx)(y,{item:e})},t)))})}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
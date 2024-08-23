"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[1897],{1142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(4848),r=t(8453);const i={title:"Core Concepts",description:"Core Concepts Documentation for Hauler",sidebar_label:"Core Concepts"},s=void 0,c={id:"core-concepts",title:"Core Concepts",description:"Core Concepts Documentation for Hauler",source:"@site/versioned_docs/version-0.4.1/core-concepts.md",sourceDirName:".",slug:"/core-concepts",permalink:"/docs/0.4.1/core-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-0.4.1/core-concepts.md",tags:[],version:"0.4.1",frontMatter:{title:"Core Concepts",description:"Core Concepts Documentation for Hauler",sidebar_label:"Core Concepts"},sidebar:"haulerSidebar",previous:{title:"Introduction",permalink:"/docs/0.4.1/intro"},next:{title:"Airgap Workflow",permalink:"/docs/0.4.1/airgap-workflow"}},a={},l=[{value:"Haul",id:"haul",level:2},{value:"Collections",id:"collections",level:2},{value:"Community Collections",id:"community-collections",level:3},{value:"RGS Carbide Collections",id:"rgs-carbide-collections",level:3},{value:"Content",id:"content",level:2},{value:"Declarative Content",id:"declarative-content",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"hauler-diagram",src:t(6178).A+"",width:"1949",height:"988"})}),"\n",(0,o.jsx)(n.h2,{id:"haul",children:"Haul"}),"\n",(0,o.jsx)(n.admonition,{title:"SUMMARY:",type:"tip",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Hauls"})," are Compressed Archive (Tarball) of Hauler Collections and Content."]})}),"\n",(0,o.jsxs)(n.p,{children:["At the heart of Hauler lies the concept of a ",(0,o.jsx)(n.code,{children:"Haul"}),". A ",(0,o.jsx)(n.code,{children:"Haul"})," is a compressed archive, often in the form of a tarball, containing Hauler collections and content. It serves as a container for grouping and transporting various data types, making it a fundamental element in the Hauler ecosystem."]}),"\n",(0,o.jsx)(n.h2,{id:"collections",children:"Collections"}),"\n",(0,o.jsx)(n.admonition,{title:"SUMMARY:",type:"tip",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Collections"})," are Grouping of one or more Hauler Contents."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Collections"})," are the building blocks of Hauler. These are groupings of one or more Hauler ",(0,o.jsx)(n.code,{children:"contents"}),". Think of ",(0,o.jsx)(n.code,{children:"collections"})," as organized sets of data that collectively represent something desirable."]}),"\n",(0,o.jsx)(n.h3,{id:"community-collections",children:"Community Collections"}),"\n",(0,o.jsxs)(n.p,{children:["While ",(0,o.jsx)(n.code,{children:"collections"})," (and ",(0,o.jsx)(n.code,{children:"contents"}),") are built into Hauler, our goal is to empower users to define their own ",(0,o.jsx)(n.code,{children:"collections"}),". This way, you can tailor Hauler to your unique requirements and take full control of your artifacts."]}),"\n",(0,o.jsx)(n.h3,{id:"rgs-carbide-collections",children:"RGS Carbide Collections"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Hauler"})," provides the ability to import ",(0,o.jsx)(n.code,{children:"collections"})," for the Rancher products, making it seamless for RGS Supported Customers to airgap any of the Rancher products or projects. If you haven't heard of Rancher Government Carbide, check it out ",(0,o.jsx)(n.a,{href:"https://ranchergovernment.com/carbide",children:"here"}),"!"]}),"\n",(0,o.jsx)(n.h2,{id:"content",children:"Content"}),"\n",(0,o.jsx)(n.admonition,{title:"SUMMARY:",type:"tip",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Contents"})," are Artifacts such as Images, Charts, or Files."]})}),"\n",(0,o.jsxs)(n.p,{children:["In Hauler's terminology, ",(0,o.jsx)(n.code,{children:"content"})," refers to artifacts such as images, charts, or files. These are the fundamental types of resources that Hauler understands and manages. To understand the term better, let's break it down:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Content"}),": The fundamental type of artifacts that Hauler recognizes (images, charts, and files)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Artifact"}),": Anything that can be represented as an OCI (Open Container Initiative) artifact.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"OCI Artifacts provide a standardized way to store arbitrary files, making it easier to manage content efficiently."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"declarative-content",children:"Declarative Content"}),"\n",(0,o.jsxs)(n.p,{children:["While manually adding content to ",(0,o.jsx)(n.code,{children:"Hauler"})," is a straightforward way to get started, we recommend a much more sustainable approach. ",(0,o.jsx)(n.code,{children:"Hauler"})," provides a declarative approach for each ",(0,o.jsx)(n.code,{children:"content"})," type, allowing you to define all the ",(0,o.jsx)(n.code,{children:"content"})," within a manifest. This approach ensures a more reproducable workflow for managing the lifecycle of your ",(0,o.jsx)(n.code,{children:"hauls"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6178:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/hauler-diagram-53f9182c0d98fe871fb3cf7fe8cd475a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
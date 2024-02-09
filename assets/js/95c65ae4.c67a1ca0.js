"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[560],{5788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>g});var a=r(1504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),d=n,g=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(5072),n=(r(1504),r(5788));const o={title:"Quickstart",description:"Quickstart Documentation for Hauler",sidebar_label:"Quickstart"},l=void 0,i={unversionedId:"introduction/quickstart",id:"version-0.4.1/introduction/quickstart",title:"Quickstart",description:"Quickstart Documentation for Hauler",source:"@site/versioned_docs/version-0.4.1/introduction/quickstart.md",sourceDirName:"introduction",slug:"/introduction/quickstart",permalink:"/hauler-docs/docs/0.4.1/introduction/quickstart",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.1/introduction/quickstart.md",tags:[],version:"0.4.1",frontMatter:{title:"Quickstart",description:"Quickstart Documentation for Hauler",sidebar_label:"Quickstart"},sidebar:"haulerSidebar",previous:{title:"Airgap Workflow",permalink:"/hauler-docs/docs/0.4.1/airgap-workflow"},next:{title:"Installation",permalink:"/hauler-docs/docs/0.4.1/introduction/install"}},s={},u=[{value:"Quick Installation",id:"quick-installation",level:2},{value:"Example Use of Hauler",id:"example-use-of-hauler",level:2},{value:"Add Content to the Hauler Store",id:"add-content-to-the-hauler-store",level:3},{value:"Using the Command Line:",id:"using-the-command-line",level:4},{value:"Using a Hauler Manifest:",id:"using-a-hauler-manifest",level:4},{value:"View the Hauler Store",id:"view-the-hauler-store",level:3},{value:"Save the Hauler Store",id:"save-the-hauler-store",level:3},{value:"Load the Airgapped Hauler Store",id:"load-the-airgapped-hauler-store",level:3},{value:"Serve the Hauler Store",id:"serve-the-hauler-store",level:3},{value:"Copy the Hauler Store to a Registry",id:"copy-the-hauler-store-to-a-registry",level:3},{value:"Copy the Hauler Store to a Directory",id:"copy-the-hauler-store-to-a-directory",level:3}],c={toc:u},h="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(h,(0,a.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Skipping past most of the documentation? Here's an easy to follow Quick Start Guide:"),(0,n.yg)("h2",{id:"quick-installation"},"Quick Installation"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# install latest release\ncurl -sfL https://get.hauler.dev | bash\n")),(0,n.yg)("h2",{id:"example-use-of-hauler"},"Example Use of Hauler"),(0,n.yg)("h3",{id:"add-content-to-the-hauler-store"},"Add Content to the Hauler Store"),(0,n.yg)("h4",{id:"using-the-command-line"},"Using the Command Line:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# add a image: neuvector/scanner:latest\nhauler store add image neuvector/scanner:latest\n\n# add a image with supply chain artifacts\nhauler store add image rgcrprod.azurecr.us/longhornio/longhorn-ui:v1.5.2 --key carbide-key.pub\n\n# add a chart: rancher-stable/rancher (v2.7.9)\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable --version 2.7.9\n\n# add a file: rke2-install.sh\nhauler store add file https://get.rke2.io --name install.sh\n")),(0,n.yg)("h4",{id:"using-a-hauler-manifest"},"Using a Hauler Manifest:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"hauler store sync --files hauler-manfiest.yaml\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hauler-manfiest.yaml"',title:'"hauler-manfiest.yaml"'},"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-content-images-example\nspec:\n  images:\n    - name: neuvector/scanner:latest\n    - name: rgcrprod.azurecr.us/longhornio/longhorn-ui:v1.5.1\n      key: carbide-key.pub\n---\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: hauler-content-charts-example\nspec:\n  charts:\n    - name: rancher\n      repoURL: https://releases.rancher.com/server-charts/stable\n      version: 2.7.9\n---\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Files\nmetadata:\n  name: hauler-content-files-example\nspec:\n  files:\n    - path: https://get.rke2.io\n      name: install.sh\n")),(0,n.yg)("h3",{id:"view-the-hauler-store"},"View the Hauler Store"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# view and verify the content in the local hauler store\nhauler store info\n")),(0,n.yg)("h3",{id:"save-the-hauler-store"},"Save the Hauler Store"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# save and export the content in the local hauler store\nhauler store save --filename haul.tar.zst\n")),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"<-- airgap the ",(0,n.yg)("inlineCode",{parentName:"strong"},"haul.tar.zst")," to the disconnected environment --\x3e")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"load-the-airgapped-hauler-store"},"Load the Airgapped Hauler Store"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# load and import the airgapped content to the new local hauler store\nhauler store load haul.tar.zst\n")),(0,n.yg)("h3",{id:"serve-the-hauler-store"},"Serve the Hauler Store"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# serve the content as a registry from the hauler store\nhauler store serve\n")),(0,n.yg)("h3",{id:"copy-the-hauler-store-to-a-registry"},"Copy the Hauler Store to a Registry"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# copy the content to a registry from the hauler store\nhauler store copy registry://harbor.example.com\n")),(0,n.yg)("h3",{id:"copy-the-hauler-store-to-a-directory"},"Copy the Hauler Store to a Directory"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# copy the content to a directory from the hauler store\nhauler store copy dir://hauler-files\n")))}p.isMDXComponent=!0}}]);
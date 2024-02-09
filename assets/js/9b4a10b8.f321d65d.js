"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[9616],{5788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>h});var a=r(1504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(5072),n=(r(1504),r(5788));const l={title:"Installation",description:"Installation Documentation for Hauler",sidebar_label:"Installation"},i=void 0,o={unversionedId:"introduction/install",id:"introduction/install",title:"Installation",description:"Installation Documentation for Hauler",source:"@site/docs/introduction/install.md",sourceDirName:"introduction",slug:"/introduction/install",permalink:"/hauler-docs/docs/next/introduction/install",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/docs/introduction/install.md",tags:[],version:"current",frontMatter:{title:"Installation",description:"Installation Documentation for Hauler",sidebar_label:"Installation"},sidebar:"haulerSidebar",previous:{title:"Quickstart",permalink:"/hauler-docs/docs/next/introduction/quickstart"},next:{title:"Uninstall",permalink:"/hauler-docs/docs/next/introduction/uninstall"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Supported Architectures",id:"supported-architectures",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Linux/Darwin",id:"linuxdarwin",level:3},{value:"Homebrew",id:"homebrew",level:3},{value:"Windows",id:"windows",level:3},{value:"Manual Installation Steps",id:"manual-installation-steps",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,"Hauler is a purpose built to be a single binary with no specific prerequistes or depedencies. It's installation is very simple and easy to follow. To view the latest release, please view our ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/rancherfederal/hauler/releases"},"GitHub Release")," page."),(0,n.yg)("h2",{id:"supported-architectures"},"Supported Architectures"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Base Platform"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Architecture"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Latest Release"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Linux"),(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("inlineCode",{parentName:"td"},"amd64")," and ",(0,n.yg)("inlineCode",{parentName:"td"},"arm64")),(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/rancherfederal/hauler/releases"},"https://github.com/rancherfederal/hauler/releases"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Darwin"),(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("inlineCode",{parentName:"td"},"amd64")," and ",(0,n.yg)("inlineCode",{parentName:"td"},"arm64")),(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/rancherfederal/hauler/releases"},"https://github.com/rancherfederal/hauler/releases"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Windows"),(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("inlineCode",{parentName:"td"},"amd64")," and ",(0,n.yg)("inlineCode",{parentName:"td"},"arm64")),(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/rancherfederal/hauler/releases"},"https://github.com/rancherfederal/hauler/releases"))))),(0,n.yg)("h2",{id:"installation-steps"},"Installation Steps"),(0,n.yg)("h3",{id:"linuxdarwin"},"Linux/Darwin"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# install latest release\ncurl -sfL https://get.hauler.dev | bash\n\n# install specific release\ncurl -sfL https://get.hauler.dev | HAULER_VERSION=0.4.3 bash\n")),(0,n.yg)("h3",{id:"homebrew"},"Homebrew"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# installs latest release\nbrew tap rancherfederal/homebrew-tap\nbrew install hauler\n")),(0,n.yg)("h3",{id:"windows"},"Windows"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# coming soon\n")),(0,n.yg)("h2",{id:"manual-installation-steps"},"Manual Installation Steps"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'# set the hauler version (i.e. "0.4.3")\nexport vHauler=HAULER_VERSION\n\n# set the specific platform (i.e. "linux")\nexport platform=PLATFORM\n\n# set the specific arch (i.e. "amd64")\nexport arch=ARCH\n\ncurl -sOL https://github.com/rancherfederal/hauler/releases/download/v${vHauler}/hauler_${vHauler}_${platform}_${arch}.tar.gz\ntar -xf hauler_${vHauler}_${platform}_${arch}.tar.gz\nsudo mv hauler /usr/bin/hauler\n')))}d.isMDXComponent=!0}}]);
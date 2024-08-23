"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[4007],{9452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(4848),l=n(8453);const s={title:"Installation",description:"Installation Documentation for Hauler",sidebar_label:"Installation"},a=void 0,i={id:"introduction/install",title:"Installation",description:"Installation Documentation for Hauler",source:"@site/versioned_docs/version-0.4.4/introduction/install.md",sourceDirName:"introduction",slug:"/introduction/install",permalink:"/docs/0.4.4/introduction/install",draft:!1,unlisted:!1,editUrl:"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-0.4.4/introduction/install.md",tags:[],version:"0.4.4",frontMatter:{title:"Installation",description:"Installation Documentation for Hauler",sidebar_label:"Installation"},sidebar:"haulerSidebar",previous:{title:"Quickstart",permalink:"/docs/0.4.4/introduction/quickstart"},next:{title:"Uninstall",permalink:"/docs/0.4.4/introduction/uninstall"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Supported Architectures",id:"supported-architectures",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Linux/Darwin",id:"linuxdarwin",level:3},{value:"Homebrew",id:"homebrew",level:3},{value:"Windows",id:"windows",level:3},{value:"Manual Installation Steps",id:"manual-installation-steps",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["Hauler is a purpose built to be a single binary with no specific prerequistes or depedencies. It's installation is very simple and easy to follow. To view the latest release, please view our ",(0,r.jsx)(t.a,{href:"https://github.com/rancherfederal/hauler/releases",children:"GitHub Release"})," page."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-architectures",children:"Supported Architectures"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Base Platform"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Architecture"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Latest Release"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Linux"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"amd64"})," and ",(0,r.jsx)(t.code,{children:"arm64"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"https://github.com/rancherfederal/hauler/releases",children:"https://github.com/rancherfederal/hauler/releases"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Darwin"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"amd64"})," and ",(0,r.jsx)(t.code,{children:"arm64"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"https://github.com/rancherfederal/hauler/releases",children:"https://github.com/rancherfederal/hauler/releases"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Windows"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"amd64"})," and ",(0,r.jsx)(t.code,{children:"arm64"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"https://github.com/rancherfederal/hauler/releases",children:"https://github.com/rancherfederal/hauler/releases"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,r.jsx)(t.h3,{id:"linuxdarwin",children:"Linux/Darwin"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# install latest release\ncurl -sfL https://get.hauler.dev | bash\n\n# install specific release\ncurl -sfL https://get.hauler.dev | HAULER_VERSION=0.4.4 bash\n"})}),"\n",(0,r.jsx)(t.h3,{id:"homebrew",children:"Homebrew"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# installs latest release\nbrew tap rancherfederal/homebrew-tap\nbrew install hauler\n"})}),"\n",(0,r.jsx)(t.h3,{id:"windows",children:"Windows"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# coming soon\n"})}),"\n",(0,r.jsx)(t.h2,{id:"manual-installation-steps",children:"Manual Installation Steps"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# set the hauler version (i.e. "0.4.4")\nexport vHauler=HAULER_VERSION\n\n# set the specific platform (i.e. "linux")\nexport platform=PLATFORM\n\n# set the specific arch (i.e. "amd64")\nexport arch=ARCH\n\ncurl -sOL https://github.com/rancherfederal/hauler/releases/download/v${vHauler}/hauler_${vHauler}_${platform}_${arch}.tar.gz\ntar -xf hauler_${vHauler}_${platform}_${arch}.tar.gz\nsudo mv hauler /usr/bin/hauler\n'})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
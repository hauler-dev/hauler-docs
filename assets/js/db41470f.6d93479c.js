"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[7817],{1353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"introduction/quickstart","title":"Quickstart","description":"Quickstart Documentation for Hauler","source":"@site/versioned_docs/version-1.2.x/introduction/quickstart.md","sourceDirName":"introduction","slug":"/introduction/quickstart","permalink":"/docs/introduction/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.2.x/introduction/quickstart.md","tags":[],"version":"1.2.x","frontMatter":{"title":"Quickstart","description":"Quickstart Documentation for Hauler","sidebar_label":"Quickstart"},"sidebar":"haulerSidebar","previous":{"title":"Airgap Workflow","permalink":"/docs/airgap-workflow"},"next":{"title":"Installation","permalink":"/docs/introduction/install"}}');var n=a(4848),s=a(8453);const i={title:"Quickstart",description:"Quickstart Documentation for Hauler",sidebar_label:"Quickstart"},o=void 0,l={},h=[{value:"Quick Installation",id:"quick-installation",level:2},{value:"Getting Started with Hauler",id:"getting-started-with-hauler",level:2},{value:"Add Artifacts to the Hauler Store",id:"add-artifacts-to-the-hauler-store",level:3},{value:"View the Hauler Store",id:"view-the-hauler-store",level:3},{value:"Save the Hauler Store",id:"save-the-hauler-store",level:3},{value:"Airgap the <code>haul.tar.zst</code> (aka the &quot;haul&quot;)",id:"airgap-the-haultarzst-aka-the-haul",level:3},{value:"Load the Airgapped Hauler Store",id:"load-the-airgapped-hauler-store",level:3},{value:"Serve the Hauler Store",id:"serve-the-hauler-store",level:3},{value:"Copy the Hauler Store",id:"copy-the-hauler-store",level:3},{value:"Extract Content from the Hauler Store",id:"extract-content-from-the-hauler-store",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Skipping past most of the documentation? Here's an easy to follow Quick Start Guide:"}),"\n",(0,n.jsx)(t.h2,{id:"quick-installation",children:"Quick Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# install latest release\ncurl -sfL https://get.hauler.dev | bash\n"})}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-with-hauler",children:"Getting Started with Hauler"}),"\n",(0,n.jsx)(t.h3,{id:"add-artifacts-to-the-hauler-store",children:"Add Artifacts to the Hauler Store"}),"\n",(0,n.jsxs)(a,{open:!0,children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Using the Command Line:"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# add a image... defaults to docker.io\nhauler store add image neuvector/scanner:latest\n\n# add a image with a specific platform and with supply chain artifacts\n# may not work for all users due to the specified registry\nhauler store add image rgcrprod.azurecr.us/longhornio/longhorn-ui:v1.7.1 --platform linux/amd64 --key carbide-key.pub\n\n# add a helm chart with a specific version\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable --version 2.20.1\n\n# add a file and assign it a new name\nhauler store add file https://get.rke2.io --name install.sh\n"})})]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Using a Hauler Manifest:"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# fetch the content via a declarative manifest\nhauler store sync --filename hauler-manifest.yaml\n"})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="hauler-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1\nkind: Images\nmetadata:\n  name: hauler-content-images-example\nspec:\n  images:\n    - name: busybox\n    - name: busybox:stable\n      platform: linux/amd64\n    - name: gcr.io/distroless/base@sha256:7fa7445dfbebae4f4b7ab0e6ef99276e96075ae42584af6286ba080750d6dfe5\n---\napiVersion: content.hauler.cattle.io/v1\nkind: Charts\nmetadata:\n  name: hauler-content-charts-example\nspec:\n  charts:\n    - name: rancher\n      repoURL: https://releases.rancher.com/server-charts/stable\n      version: 2.10.1\n    - name: hauler-helm\n      repoURL: oci://ghcr.io/hauler-dev\n---\napiVersion: content.hauler.cattle.io/v1\nkind: Files\nmetadata:\n  name: hauler-content-files-example\nspec:\n  files:\n    - path: https://get.rke2.io\n      name: install.sh\n    - path: hauler-manifest.yaml\n"})})]}),"\n",(0,n.jsx)(t.h3,{id:"view-the-hauler-store",children:"View the Hauler Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# view and verify the content in the local hauler store\nhauler store info\n"})}),"\n",(0,n.jsx)(t.h3,{id:"save-the-hauler-store",children:"Save the Hauler Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# save and export the content in the local hauler store\nhauler store save --filename haul.tar.zst\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.h3,{id:"airgap-the-haultarzst-aka-the-haul",children:["Airgap the ",(0,n.jsx)(t.code,{children:"haul.tar.zst"}),' (aka the "haul")']}),"\n",(0,n.jsxs)(t.p,{children:["For this quickstart and example use of ",(0,n.jsx)(t.code,{children:"hauler"}),', we can simulate airgapping to the disconnected environment by deleting the "store" directory with the following command: ',(0,n.jsx)(t.code,{children:"rm -rf store"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"load-the-airgapped-hauler-store",children:"Load the Airgapped Hauler Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# load and import the airgapped content to the new local hauler store\nhauler store load --filename haul.tar.zst\n"})}),"\n",(0,n.jsx)(t.h3,{id:"serve-the-hauler-store",children:"Serve the Hauler Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# serve the content as a readonly registry from the hauler store\n# if you have an existing registry, please see the next step\n# defaults to <FQDN or IP>:5000\nhauler store serve registry\n\n# serve the file content as a fileserver from the hauler store\n# if you have an existing fileserver, please see the next step\n# defaults to <FQDN or IP>:8080\nhauler store serve fileserver\n"})}),"\n",(0,n.jsx)(t.h3,{id:"copy-the-hauler-store",children:"Copy the Hauler Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# optional step to authenicate into your registry\nhauler login <registry-url> --username <username> --password <password>\n\n# copy the content to a registry from the hauler store\n# copies oci compliant artifacts\nhauler store copy registry://<registry-url>\n\n# copy the content to a directory from the hauler store\n# copies non oci compliant artifacts\nhauler store copy dir://<path/to/directory>\n"})}),"\n",(0,n.jsx)(t.h3,{id:"extract-content-from-the-hauler-store",children:"Extract Content from the Hauler Store"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# extracts artifacts from the hauler store to disk\nhauler store extract hauler/rancher:2.10.1\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var r=a(6540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
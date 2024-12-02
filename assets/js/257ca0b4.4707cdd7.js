"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[1287],{9986:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>h,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"hauler-usage/store/add/chart","title":"Hauler Store Add Chart","description":"Hauler Store Add Chart Usage Documentation","source":"@site/docs/hauler-usage/store/add/chart.md","sourceDirName":"hauler-usage/store/add","slug":"/hauler-usage/store/add/chart","permalink":"/docs/next/hauler-usage/store/add/chart","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/docs/hauler-usage/store/add/chart.md","tags":[],"version":"current","frontMatter":{"title":"Hauler Store Add Chart","description":"Hauler Store Add Chart Usage Documentation","sidebar_label":"Chart"},"sidebar":"haulerSidebar","previous":{"title":"Image","permalink":"/docs/next/hauler-usage/store/add/image"},"next":{"title":"File","permalink":"/docs/next/hauler-usage/store/add/file"}}');var n=t(4848),o=t(8453);const s={title:"Hauler Store Add Chart",description:"Hauler Store Add Chart Usage Documentation",sidebar_label:"Chart"},h=void 0,c={},l=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3},{value:"Example Commands for Charts",id:"example-commands-for-charts",level:3},{value:"Hauler Manifest for Charts",id:"hauler-manifest-for-charts",level:3},{value:"Example Manifest for Charts",id:"example-manifest-for-charts",level:3}];function i(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"hauler store add chart"})," adds a helm chart to the store."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"An example with available flags..."})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"hauler store add chart <chart-name> --repo <chart-repository> --version <chart version>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store add chart [flags]\n\nExamples:\n# fetch local helm chart\nhauler store add chart path/to/chart/directory\n\n# fetch local compressed helm chart\nhauler store add chart path/to/chart.tar.gz\n\n# fetch remote oci helm chart\nhauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev\n\n# fetch remote oci helm chart with version\nhauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.0.6\n\n# fetch remote helm chart\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable\n\n# fetch remote helm chart with specific version\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/latest --version 2.9.1\n\nFlags:\n      --ca-file string             (Optional) Location of CA Bundle to enable certification verification\n      --cert-file string           (Optional) Location of the TLS Certificate to use for client authenication\n  -h, --help                       help for chart\n      --insecure-skip-tls-verify   (Optional) Skip TLS certificate verification\n      --key-file string            (Optional) Location of the TLS Key to use for client authenication\n      --password string            (Optional) Password to use for authentication\n      --repo string                Location of the chart (https:// | http:// | oci://)\n      --username string            (Optional) Username to use for authentication\n      --verify                     (Optional) Verify the chart before fetching it\n      --version string             (Optional) Specifiy the version of the chart (v1.0.0 | 2.0.0 | ^2.0.0)\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string   (default "info")\n  -s, --store string       (Optional) Specify the directory to use for the content store (default "store")\n'})}),"\n",(0,n.jsx)(r.h3,{id:"example-commands-for-charts",children:"Example Commands for Charts"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch local helm chart\nhauler store add chart path/to/chart/directory --repo .\n\n# fetch local compressed helm chart\nhauler store add chart path/to/chart.tar.gz --repo .\n\n# fetch remote oci helm chart\nhauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev\n\n# fetch remote oci helm chart with version\nhauler store add chart hauler-helm --repo oci://ghcr.io/hauler-dev --version 1.0.6\n\n# fetch remote helm chart\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable\n\n# fetch remote helm chart with specific version\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/latest --version 2.9.1\n"})}),"\n",(0,n.jsx)(r.h3,{id:"hauler-manifest-for-charts",children:"Hauler Manifest for Charts"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:'title="hauler-chart-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: hauler-content-charts-example\nspec:\n  charts:\n    # fetch helm chart\n    - name: <chart-name>\n      # https:// or http:// or oci://\n      repoURL: <chart-repository>\n      # semver complaint\n      version: <chart-version>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"example-manifest-for-charts",children:"Example Manifest for Charts"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:'title="hauler-chart-manifest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: hauler-content-charts-example\nspec:\n  charts:\n    # fetch helm chart\n    - name: rancher\n      repoURL: https://releases.rancher.com/server-charts/stable\n    # fetch helm chart with specific version\n    - name: rancher-cluster-templates\n      repoURL: oci://ghcr.io/rancherfederal/charts\n      version: 0.5.2\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>h});var a=t(6540);const n={},o=a.createContext(n);function s(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);
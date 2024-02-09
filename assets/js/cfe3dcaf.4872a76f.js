"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[7012],{5788:(e,t,r)=>{r.d(t,{Iu:()=>d,yg:()=>f});var a=r(1504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(i,".").concat(h)]||u[h]||g[h]||o;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(5072),n=(r(1504),r(5788));const o={title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",sidebar_label:"Hauler Store"},l=void 0,s={unversionedId:"guides-references/command-line/hauler-store",id:"version-0.4.3/guides-references/command-line/hauler-store",title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",source:"@site/versioned_docs/version-0.4.3/guides-references/command-line/hauler-store.md",sourceDirName:"guides-references/command-line",slug:"/guides-references/command-line/hauler-store",permalink:"/hauler-docs/docs/guides-references/command-line/hauler-store",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.3/guides-references/command-line/hauler-store.md",tags:[],version:"0.4.3",frontMatter:{title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",sidebar_label:"Hauler Store"},sidebar:"haulerSidebar",previous:{title:"Hauler",permalink:"/hauler-docs/docs/guides-references/command-line/hauler"},next:{title:"Hauler Completion",permalink:"/hauler-docs/docs/guides-references/command-line/hauler-completion"}},i={},c=[{value:"Command Overview",id:"command-overview",level:3},{value:"<code>hauler store add</code>:",id:"hauler-store-add",level:4},{value:"<code>hauler store add chart</code>:",id:"hauler-store-add-chart",level:4},{value:"<code>hauler store add file</code>:",id:"hauler-store-add-file",level:4},{value:"<code>hauler store add image</code>:",id:"hauler-store-add-image",level:4},{value:"<code>hauler store copy</code>:",id:"hauler-store-copy",level:4},{value:"<code>hauler store extract</code>:",id:"hauler-store-extract",level:4},{value:"<code>hauler store info</code>:",id:"hauler-store-info",level:4},{value:"<code>hauler store load</code>:",id:"hauler-store-load",level:4},{value:"<code>hauler store save</code>:",id:"hauler-store-save",level:4},{value:"<code>hauler store serve</code>:",id:"hauler-store-serve",level:4},{value:"<code>hauler store serve registry</code>:",id:"hauler-store-serve-registry",level:4},{value:"<code>hauler store serve fileserver</code>:",id:"hauler-store-serve-fileserver",level:4},{value:"<code>hauler store sync</code>:",id:"hauler-store-sync",level:4}],d={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.c)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"command-overview"},"Command Overview"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Interact with Hauler's embedded content store.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store [flags]\n  hauler store [command]\n\nAliases:\n  store, s\n\nAvailable Commands:\n  add         Add content to store\n  copy        Copy all store contents to another OCI registry\n  extract     Extract content from the store to disk\n  info        Print out information about the store\n  load        Load a content store from a store archive\n  save        Save a content store to a store archive\n  serve       Expose the content of a local store through an OCI compliant server\n  sync        Sync content to the embedded content store\n\nFlags:\n      --cache string   Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -h, --help           help for store\n  -s, --store string   Location to create store at (default "store")\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n\nUse "hauler store [command] --help" for more information about a command.\n')),(0,n.yg)("h4",{id:"hauler-store-add"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store add"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Add content to store.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store add [flags]\n  hauler store add [command]\n\nAvailable Commands:\n  chart       Add a local or remote chart to the content store\n  file        Add a file to the content store\n  image       Add an image to the content store\n\nFlags:\n  -h, --help   help for add\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n\nUse "hauler store add [command] --help" for more information about a command.\n')),(0,n.yg)("h4",{id:"hauler-store-add-chart"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store add chart"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Add a local or remote chart to the content store.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store add chart [flags]\n\nExamples:\n\n# add a local chart\nhauler store add chart path/to/chart/directory\n\n# add a local compressed chart\nhauler store add chart path/to/chart.tar.gz\n\n# add a remote chart\nhauler store add chart longhorn --repo "https://charts.longhorn.io"\n\n# add a specific version of a chart\nhauler store add chart rancher --repo "https://releases.rancher.com/server-charts/latest" --version "2.6.2"\n\n\nFlags:\n      --ca-file string             verify certificates of HTTPS-enabled servers using this CA bundle\n      --cert-file string           identify HTTPS client using this SSL certificate file\n  -h, --help                       help for chart\n      --insecure-skip-tls-verify   skip tls certificate checks for the chart download\n      --key-file string            identify HTTPS client using this SSL key file\n      --password string            chart repository password where to locate the requested chart\n      --repo string                chart repository url where to locate the requested chart\n      --username string            chart repository username where to locate the requested chart\n      --verify                     verify the package before using it\n      --version string             specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-add-file"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store add file"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Add a file to the content store.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store add file [flags]\n\nFlags:\n  -h, --help          help for file\n  -n, --name string   (Optional) Name to assign to file in store\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-add-image"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store add image"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Add an image to the content store.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store add image [flags]\n\nFlags:\n  -h, --help              help for image\n  -k, --key string        (Optional) Path to the key for digital signature verification\n  -p, --platform string   (Optional) Specific platform to save. i.e. linux/amd64. Defaults to all if flag is omitted.\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-copy"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store copy"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Copy all store contents to another OCI registry.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store copy [flags]\n\nFlags:\n  -h, --help              help for copy\n      --insecure          Toggle allowing insecure connections when copying to a remote registry\n  -p, --password string   Password when copying to an authenticated remote registry\n      --plain-http        Toggle allowing plain http connections when copying to a remote registry\n  -u, --username string   Username when copying to an authenticated remote registry\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")h\n')),(0,n.yg)("h4",{id:"hauler-store-extract"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store extract"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Extract content from the store to disk.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store extract [flags]\n\nAliases:\n  extract, x\n\nFlags:\n  -h, --help            help for extract\n  -o, --output string   Directory to save contents to (defaults to current directory)\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-info"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store info"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Print out information about the store.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store info [flags]\n\nAliases:\n  info, i, list, ls\n\nFlags:\n  -h, --help            help for info\n  -o, --output string   Output format (table, json) (default "table")\n  -t, --type string     Filter on type (image, chart, file) (default "all")\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-load"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store load"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Load a content store from a store archive.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store load [flags]\n\nFlags:\n  -h, --help   help for load\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-save"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store save"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Save a content store to a store archive.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store save [flags]\n\nFlags:\n  -f, --filename string   Name of archive (default "pkg.tar.zst")\n  -h, --help              help for save\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-serve"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store serve"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Expose the content of a local store through an OCI compliant server.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store serve [flags]\n\nAvailable Commands:\n  fileserver  Serve the file server\n  registry    Serve the embedded registry\n\nFlags:\n  -h, --help               help for serve\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-serve-registry"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store serve registry"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Serve the embedded registry")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store serve registry [flags]\n\nFlags:\n  -c, --config string      Path to a config file, will override all other configs\n      --directory string   Directory to use for backend.  Defaults to $PWD/registry (default "registry")\n  -h, --help               help for registry\n  -p, --port int           Port to listen on. (default 5000)\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-serve-fileserver"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store serve fileserver"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Serve the fileserver")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store serve fileserver [flags]\n\nFlags:\n      --directory string   Directory to use for backend.  Defaults to $PWD/store-files (default "store-files")\n  -h, --help               help for fileserver\n  -p, --port int           Port to listen on. (default 8080)\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.yg)("h4",{id:"hauler-store-sync"},(0,n.yg)("inlineCode",{parentName:"h4"},"hauler store sync"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Sync content to the embedded content store.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store sync [flags]\n\nFlags:\n  -f, --files strings      Path to content files\n  -h, --help               help for sync\n  -k, --key string         (Optional) Path to the key for signature verification\n  -p, --platform string    (Optional) Specific platform to save. i.e. linux/amd64. Defaults to all if flag is omitted.\n      --products strings   Used for RGS Carbide customers to supply a product and version and Hauler will retrieve the images. i.e. \'--product rancher=v2.7.6\'\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")h\n')))}g.isMDXComponent=!0}}]);
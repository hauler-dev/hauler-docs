"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[4876],{469:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"hauler-usage/completion","title":"Hauler Completion","description":"Hauler Completion Usage Documentation","source":"@site/docs/hauler-usage/completion.md","sourceDirName":"hauler-usage","slug":"/hauler-usage/completion","permalink":"/docs/next/hauler-usage/completion","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/docs/hauler-usage/completion.md","tags":[],"version":"current","frontMatter":{"title":"Hauler Completion","description":"Hauler Completion Usage Documentation","sidebar_label":"Hauler Completion"},"sidebar":"haulerSidebar","previous":{"title":"Sync","permalink":"/docs/next/hauler-usage/store/sync"},"next":{"title":"Hauler Version","permalink":"/docs/next/hauler-usage/version"}}');var r=o(4848),s=o(8453);const i={title:"Hauler Completion",description:"Hauler Completion Usage Documentation",sidebar_label:"Hauler Completion"},a=void 0,t={},h=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3},{value:"<code>hauler completion bash</code>:",id:"hauler-completion-bash",level:4},{value:"<code>hauler completion fish</code>:",id:"hauler-completion-fish",level:4},{value:"<code>hauler completion zsh</code>:",id:"hauler-completion-zsh",level:4},{value:"<code>hauler completion powershell</code>:",id:"hauler-completion-powershell",level:4}];function c(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hauler completion"})," generate auto-completion scripts for various shells."]}),"\n",(0,r.jsx)(n.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler completion [command]\n\nAvailable Commands:\n  bash        Generates auto-completion scripts for bash\n  fish        Generates auto-completion scripts for fish\n  powershell  Generates auto-completion scripts for powershell\n  zsh         Generates auto-completion scripts for zsh\n\nFlags:\n  -h, --help   help for completion\n\nGlobal Flags:\n  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)\n      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)\n  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")\n\nUse "hauler completion [command] --help" for more information about a command.\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-completion-bash",children:[(0,r.jsx)(n.code,{children:"hauler completion bash"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Generate the autocompletion script for the bash shell.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This script depends on the 'bash-completion' package."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler completion bash [flags]\n\nExamples:\nTo load completion run\n\n        . <(hauler completion bash)\n\n        To configure your bash shell to load completions for each session add to your bashrc\n\n        # ~/.bashrc or ~/.profile\n        command -v hauler >/dev/null && . <(hauler completion bash)\n\nFlags:\n  -h, --help   help for bash\n\nGlobal Flags:\n  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)\n      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)\n  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-completion-fish",children:[(0,r.jsx)(n.code,{children:"hauler completion fish"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Generate the autocompletion script for the fish shell."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler completion fish [flags]\n\nExamples:\nTo configure your fish shell to load completions for each session write this script to your completions dir:\n\n        hauler completion fish > ~/.config/fish/completions/hauler.fish\n\n        See http://fishshell.com/docs/current/index.html#completion-own for more details\n\nFlags:\n  -h, --help   help for fish\n\nGlobal Flags:\n  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)\n      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)\n  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-completion-zsh",children:[(0,r.jsx)(n.code,{children:"hauler completion zsh"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Generate the autocompletion script for the zsh shell.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If shell completion is not already enabled in your environment you will need to enable it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler completion zsh [flags]\n\nExamples:\nTo load completion run\n\n        . <(hauler completion zsh)\n\n        To configure your zsh shell to load completions for each session add to your zshrc\n\n        # ~/.zshrc or ~/.profile\n        command -v hauler >/dev/null && . <(hauler completion zsh)\n\n        or write a cached file in one of the completion directories in your ${fpath}:\n\n        echo "${fpath// /\\n}" | grep -i completion\n        hauler completion zsh > _hauler\n\n        mv _hauler ~/.oh-my-zsh/completions  # oh-my-zsh\n        mv _hauler ~/.zprezto/modules/completion/external/src/  # zprezto\n\nFlags:\n  -h, --help   help for zsh\n\nGlobal Flags:\n  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)\n      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)\n  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-completion-powershell",children:[(0,r.jsx)(n.code,{children:"hauler completion powershell"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Generate the autocompletion script for powershell."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler completion powershell [flags]\n\nExamples:\nTo load completion run\n\n        . <(hauler completion powershell)\n\n        To configure your powershell shell to load completions for each session add to your powershell profile\n\n        Windows:\n\n        cd "$env:USERPROFILE\\Documents\\WindowsPowerShell\\Modules"\n        hauler completion powershell >> hauler-completion.ps1\n\n        Linux:\n\n        cd "${XDG_CONFIG_HOME:-"$HOME/.config/"}/powershell/modules"\n        hauler completion powershell >> hauler-completions.ps1\n\nFlags:\n  -h, --help   help for powershell\n\nGlobal Flags:\n  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)\n      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)\n  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var l=o(6540);const r={},s=l.createContext(r);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);
---
title: Hauler Completion
description: Hauler Completion Usage Documentation
sidebar_label: Hauler Completion
---

### Overview

`hauler completion` generate auto-completion scripts for various shells.

### Command Overview

```yaml
Usage:
  hauler completion [command]

Available Commands:
  bash        Generates auto-completion scripts for bash
  fish        Generates auto-completion scripts for fish
  powershell  Generates auto-completion scripts for powershell
  zsh         Generates auto-completion scripts for zsh

Flags:
  -h, --help   help for completion

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")

Use "hauler completion [command] --help" for more information about a command.
```

#### `hauler completion bash`:

* Generate the autocompletion script for the bash shell.
  * **Note:** This script depends on the 'bash-completion' package.

```yaml
Usage:
  hauler completion bash [flags]

Examples:
To load completion run

        . <(hauler completion bash)

        To configure your bash shell to load completions for each session add to your bashrc

        # ~/.bashrc or ~/.profile
        command -v hauler >/dev/null && . <(hauler completion bash)

Flags:
  -h, --help   help for bash

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
```

#### `hauler completion fish`:

* Generate the autocompletion script for the fish shell.

```yaml
Usage:
  hauler completion fish [flags]

Examples:
To configure your fish shell to load completions for each session write this script to your completions dir:

        hauler completion fish > ~/.config/fish/completions/hauler.fish

        See http://fishshell.com/docs/current/index.html#completion-own for more details

Flags:
  -h, --help   help for fish

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
```

#### `hauler completion zsh`:

* Generate the autocompletion script for the zsh shell.
  * **Note:** If shell completion is not already enabled in your environment you will need to enable it.

```yaml
Usage:
  hauler completion zsh [flags]

Examples:
To load completion run

        . <(hauler completion zsh)

        To configure your zsh shell to load completions for each session add to your zshrc

        # ~/.zshrc or ~/.profile
        command -v hauler >/dev/null && . <(hauler completion zsh)

        or write a cached file in one of the completion directories in your ${fpath}:

        echo "${fpath// /\n}" | grep -i completion
        hauler completion zsh > _hauler

        mv _hauler ~/.oh-my-zsh/completions  # oh-my-zsh
        mv _hauler ~/.zprezto/modules/completion/external/src/  # zprezto

Flags:
  -h, --help   help for zsh

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
```

#### `hauler completion powershell`:

* Generate the autocompletion script for powershell.

```yaml
Usage:
  hauler completion powershell [flags]

Examples:
To load completion run

        . <(hauler completion powershell)

        To configure your powershell shell to load completions for each session add to your powershell profile

        Windows:

        cd "$env:USERPROFILE\Documents\WindowsPowerShell\Modules"
        hauler completion powershell >> hauler-completion.ps1

        Linux:

        cd "${XDG_CONFIG_HOME:-"$HOME/.config/"}/powershell/modules"
        hauler completion powershell >> hauler-completions.ps1

Flags:
  -h, --help   help for powershell

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
```

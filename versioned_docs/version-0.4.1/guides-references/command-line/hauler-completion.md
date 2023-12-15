---
title: Hauler Completion (Command)
description: Hauler CLI Reference for hauler completion
sidebar_label: Hauler Completion
---

### Command Overview

* Generate an autocompletion script for hauler for the specified shell.

```yaml
Usage:
  hauler completion [command]

Available Commands:
  bash        Generate the autocompletion script for bash
  fish        Generate the autocompletion script for fish
  powershell  Generate the autocompletion script for powershell
  zsh         Generate the autocompletion script for zsh

Flags:
  -h, --help   help for completion

Global Flags:
  -l, --log-level string    (default "info")

Use "hauler completion [command] --help" for more information about a command.
```


#### `hauler completion bash`:

* Generate the autocompletion script for the bash shell.
  * **Note:** This script depends on the 'bash-completion' package.

```yaml
To load completions in your current shell session:

        source <(hauler completion bash)

To load completions for every new session, execute once:

#### Linux:

        hauler completion bash > /etc/bash_completion.d/hauler

#### macOS:

        hauler completion bash > $(brew --prefix)/etc/bash_completion.d/hauler

You will need to start a new shell for this setup to take effect.

Usage:
  hauler completion bash

Flags:
  -h, --help              help for bash
      --no-descriptions   disable completion descriptions

Global Flags:
  -l, --log-level string    (default "info")
```

#### `hauler completion fish`:

* Generate the autocompletion script for the fish shell.

```yaml
To load completions in your current shell session:

        hauler completion fish | source

To load completions for every new session, execute once:

        hauler completion fish > ~/.config/fish/completions/hauler.fish

You will need to start a new shell for this setup to take effect.

Usage:
  hauler completion fish [flags]

Flags:
  -h, --help              help for fish
      --no-descriptions   disable completion descriptions

Global Flags:
  -l, --log-level string    (default "info")
```

#### `hauler completion powershell`:

* Generate the autocompletion script for powershell.

```yaml
To load completions in your current shell session:

        hauler completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your powershell profile.

Usage:
  hauler completion powershell [flags]

Flags:
  -h, --help              help for powershell
      --no-descriptions   disable completion descriptions

Global Flags:
  -l, --log-level string    (default "info")
```

#### `hauler completion zsh`:

* Generate the autocompletion script for the zsh shell.
  * **Note:** If shell completion is not already enabled in your environment you will need to enable it.

```yaml
To load completions in your current shell session:

        source <(hauler completion zsh)

To load completions for every new session, execute once:

#### Linux:

        hauler completion zsh > "${fpath[1]}/_hauler"

#### macOS:

        hauler completion zsh > $(brew --prefix)/share/zsh/site-functions/_hauler

You will need to start a new shell for this setup to take effect.

Usage:
  hauler completion zsh [flags]

Flags:
  -h, --help              help for zsh
      --no-descriptions   disable completion descriptions

Global Flags:
```

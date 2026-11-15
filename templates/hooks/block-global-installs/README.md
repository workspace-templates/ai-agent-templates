# Block Global Installs

**Hook** · DevOps and cloud

A Claude Code hook that refuses global npm, pnpm, yarn, pip and gem installs so tools are added to the project and not to your whole machine.

## Install

```bash
npx workspacetemplates add block-global-installs
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

An agent that needs a missing tool will sometimes install it globally, which changes your machine and hides the dependency from the next person. Each shell call is inspected first, and the machine-wide forms are turned away.

It catches npm and pnpm with a global flag, yarn global, gem install without a user or bundle setup, and pip install when no virtual environment is active. The message tells the agent to add the tool to the project instead.

## Use it when

- Keep a laptop free of tools the project should declare
- Make every dependency show up in the lockfile
- Work in a repo with a pinned toolchain
- Stop pip from touching the system Python

## What it can access

- Reads each Bash command and the VIRTUAL_ENV variable
- Blocks matching commands and runs nothing itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-global-installs/

# Shell Script Reviewer

**Subagent** · DevOps and cloud · bash

Read-only subagent that reviews shell scripts for quoting, error handling, unsafe deletes and portability bugs, with a fixed line for each.

## Install

```bash
npx workspacetemplates add shell-script-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/shell-script-reviewer.md](claude-code/.claude/agents/shell-script-reviewer.md) | `.claude/agents/shell-script-reviewer.md` |
| Codex | [codex/.codex/agents/shell-script-reviewer.toml](codex/.codex/agents/shell-script-reviewer.toml) | `.codex/agents/shell-script-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/shell-script-reviewer.md](cursor/.cursor/agents/shell-script-reviewer.md) | `.cursor/agents/shell-script-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/shell-script-reviewer.md](gemini-cli/.gemini/agents/shell-script-reviewer.md) | `.gemini/agents/shell-script-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/shell-script-reviewer.agent.md](copilot/.github/agents/shell-script-reviewer.agent.md) | `.github/agents/shell-script-reviewer.agent.md` |

## What it does

Shell scripts fail in odd ways: a space in a filename, an unset variable that turns into rm on the wrong path, a pipeline whose failure is swallowed. This subagent reads a script the way the shell will, and shows where it breaks.

It checks quoting, strict mode, exit codes, temporary files, and whether the script runs on both Linux and macOS. It runs ShellCheck when it is installed, then goes past it to logic problems the tool cannot see.

## Use it when

- A deploy or backup script is about to run unattended
- A script works on your machine and fails on CI or a teammate's Mac
- You inherited a pile of scripts nobody dares touch
- A script deletes or moves files and you want it checked first

## What it can access

- Reads shell scripts in the project
- Runs shellcheck and bash -n; never executes the script itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/shell-script-reviewer/

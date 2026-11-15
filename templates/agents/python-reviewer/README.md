# Python Reviewer

**Subagent** · Code quality · python

Read-only subagent that reviews Python changes for idioms, typing, mutable defaults, exception handling and packaging mistakes.

## Install

```bash
npx workspacetemplates add python-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/python-reviewer.md](claude-code/.claude/agents/python-reviewer.md) | `.claude/agents/python-reviewer.md` |
| Codex | [codex/.codex/agents/python-reviewer.toml](codex/.codex/agents/python-reviewer.toml) | `.codex/agents/python-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/python-reviewer.md](cursor/.cursor/agents/python-reviewer.md) | `.cursor/agents/python-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/python-reviewer.md](gemini-cli/.gemini/agents/python-reviewer.md) | `.gemini/agents/python-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/python-reviewer.agent.md](copilot/.github/agents/python-reviewer.agent.md) | `.github/agents/python-reviewer.agent.md` |

## What it does

Python lets you write almost anything, which is why reviews need a checklist of the mistakes that actually bite. This subagent reads a change for the usual suspects: shared mutable defaults, bare excepts, late-binding closures, naive datetimes and typing that says nothing.

It runs the linters your project already configures, adds judgment they cannot, and returns a prioritized list without touching the files.

## Use it when

- A pull request adds Python modules or scripts
- A service has started raising odd errors after a refactor
- You are adding type hints to untyped code
- A package is about to be published and you want its layout checked

## What it can access

- Reads files in your project
- Runs read-only tools such as ruff, mypy and your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/python-reviewer/

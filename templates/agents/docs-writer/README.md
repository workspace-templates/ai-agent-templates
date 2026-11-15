# Docs Writer

**Subagent** · Documentation

Writes or updates README files, API docs and guides so they match what the code does today, verifying each example before it ships.

## Install

```bash
npx workspacetemplates add docs-writer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/docs-writer.md](claude-code/.claude/agents/docs-writer.md) | `.claude/agents/docs-writer.md` |
| Codex | [codex/.codex/agents/docs-writer.toml](codex/.codex/agents/docs-writer.toml) | `.codex/agents/docs-writer.toml` |
| Cursor | [cursor/.cursor/agents/docs-writer.md](cursor/.cursor/agents/docs-writer.md) | `.cursor/agents/docs-writer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/docs-writer.md](gemini-cli/.gemini/agents/docs-writer.md) | `.gemini/agents/docs-writer.md` |
| GitHub Copilot | [copilot/.github/agents/docs-writer.agent.md](copilot/.github/agents/docs-writer.agent.md) | `.github/agents/docs-writer.agent.md` |

## What it does

Docs rot because the code moves and the text does not. This subagent starts from the code, not from the old docs: it reads what the function really does, then fixes the text, removes what no longer exists and runs the examples.

It writes for a reader who wants to get something done. Setup steps, copy-paste commands and reference tables are checked against the repo before they are written down.

## Use it when

- A feature shipped and the README still describes the old behavior
- New contributors keep asking the same setup questions
- You need reference docs for a public API
- Docs and code have drifted and you do not know where

## What it can access

- Reads source, config and existing docs
- Edits documentation files
- Runs commands shown in the docs to verify them

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/docs-writer/

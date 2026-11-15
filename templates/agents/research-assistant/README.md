# Research Assistant

**Subagent** · Workflow

Read-only subagent that researches a technical question across docs and the web and reports sourced findings, with confidence stated for each.

## Install

```bash
npx workspacetemplates add research-assistant
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/research-assistant.md](claude-code/.claude/agents/research-assistant.md) | `.claude/agents/research-assistant.md` |
| Codex | [codex/.codex/agents/research-assistant.toml](codex/.codex/agents/research-assistant.toml) | `.codex/agents/research-assistant.toml` |
| Cursor | [cursor/.cursor/agents/research-assistant.md](cursor/.cursor/agents/research-assistant.md) | `.cursor/agents/research-assistant.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/research-assistant.md](gemini-cli/.gemini/agents/research-assistant.md) | `.gemini/agents/research-assistant.md` |
| GitHub Copilot | [copilot/.github/agents/research-assistant.agent.md](copilot/.github/agents/research-assistant.agent.md) | `.github/agents/research-assistant.agent.md` |

## What it does

Quick answers from memory go stale. This subagent takes a technical question, finds the primary sources (official docs, changelogs, specs, source code), and reports what they say along with the date and link.

It separates what sources confirm from what it infers, and it says when sources disagree. Use it when you need an answer you can trust before building on it.

## Use it when

- You need to know if a library supports a feature in the version you use
- Docs and blog posts disagree and you need the real behavior
- You are choosing between two approaches and want evidence first
- A deprecation notice appeared and you need the migration path

## What it can access

- Reads project manifests and code
- Fetches public web pages

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/research-assistant/

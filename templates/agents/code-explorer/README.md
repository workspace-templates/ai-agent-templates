# Code Explorer

**Subagent** · Workflow

Read-only subagent that maps an unfamiliar part of a codebase and answers where and how questions with exact file and line references.

## Install

```bash
npx workspacetemplates add code-explorer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/code-explorer.md](claude-code/.claude/agents/code-explorer.md) | `.claude/agents/code-explorer.md` |
| Codex | [codex/.codex/agents/code-explorer.toml](codex/.codex/agents/code-explorer.toml) | `.codex/agents/code-explorer.toml` |
| Cursor | [cursor/.cursor/agents/code-explorer.md](cursor/.cursor/agents/code-explorer.md) | `.cursor/agents/code-explorer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/code-explorer.md](gemini-cli/.gemini/agents/code-explorer.md) | `.gemini/agents/code-explorer.md` |
| GitHub Copilot | [copilot/.github/agents/code-explorer.agent.md](copilot/.github/agents/code-explorer.agent.md) | `.github/agents/code-explorer.agent.md` |

## What it does

Dropping into an unfamiliar repo costs hours of grepping. This subagent does that reading for you in its own context, so your main session stays clean. It follows imports and call chains until it can answer the question with evidence.

Every claim comes with a file and line. The answer is a short map of the area, not a tour of the whole repo.

## Use it when

- You joined a project and need to find where a feature lives
- You must change code you have never read
- You want to know every caller of an internal function
- You need a quick architecture sketch before planning work

## What it can access

- Reads and searches files in your project
- No shell, no writes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/code-explorer/

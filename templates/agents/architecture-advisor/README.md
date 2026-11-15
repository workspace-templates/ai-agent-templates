# Architecture Advisor

**Subagent** · Backend and APIs

Read-only subagent that evaluates a proposed design against your real code, lists the trade-offs and recommends one option with reasons.

## Install

```bash
npx workspacetemplates add architecture-advisor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/architecture-advisor.md](claude-code/.claude/agents/architecture-advisor.md) | `.claude/agents/architecture-advisor.md` |
| Codex | [codex/.codex/agents/architecture-advisor.toml](codex/.codex/agents/architecture-advisor.toml) | `.codex/agents/architecture-advisor.toml` |
| Cursor | [cursor/.cursor/agents/architecture-advisor.md](cursor/.cursor/agents/architecture-advisor.md) | `.cursor/agents/architecture-advisor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/architecture-advisor.md](gemini-cli/.gemini/agents/architecture-advisor.md) | `.gemini/agents/architecture-advisor.md` |
| GitHub Copilot | [copilot/.github/agents/architecture-advisor.agent.md](copilot/.github/agents/architecture-advisor.agent.md) | `.github/agents/architecture-advisor.agent.md` |

## What it does

Design debates drift when nobody has read the code. This subagent reads the parts of your system a decision touches, states the constraints it found, and compares two or three real options instead of a generic list of patterns.

It ends with one recommendation, the cost of being wrong, and a way to reverse course. It does not write code or create files.

## Use it when

- You are choosing between a queue, a cron job and a webhook
- A module is growing and you doubt a split into services
- You want a review of a design doc before building
- A new feature has two plausible approaches and a deadline

## What it can access

- Reads files and git history in your project
- Runs read-only commands
- No edits, no writes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/architecture-advisor/

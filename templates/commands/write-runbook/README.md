# Write Runbook

**Command** · Documentation

Writes an on-call runbook for a service or alert, with first checks, exact commands, escalation and a safe way back.

## Install

```bash
npx workspacetemplates add write-runbook
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/write-runbook.md](claude-code/.claude/commands/write-runbook.md) | `.claude/commands/write-runbook.md` |
| Codex | [codex/home/.codex/prompts/write-runbook.md](codex/home/.codex/prompts/write-runbook.md) | `~/.codex/prompts/write-runbook.md` |
| Cursor | [cursor/.cursor/skills/write-runbook/SKILL.md](cursor/.cursor/skills/write-runbook/SKILL.md) | `.cursor/skills/write-runbook/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/write-runbook.toml](gemini-cli/.gemini/commands/write-runbook.toml) | `.gemini/commands/write-runbook.toml` |
| GitHub Copilot | [copilot/.github/skills/write-runbook/SKILL.md](copilot/.github/skills/write-runbook/SKILL.md) | `.github/skills/write-runbook/SKILL.md` |

## What it does

At 3am nobody wants to read architecture notes; they want the first command to run. This command writes a runbook around that moment, built from your code, config and monitoring definitions.

Each step names its command, the output that means good or bad and what to do next. Commands that change production are marked and kept behind a confirm step.

## Use it when

- A new alert fires and nobody knows what it means
- You are handing a service to an on-call rotation
- After an incident, to capture what worked
- Before launching a service to real users

## What it can access

- Reads code, config and alert definitions
- Writes one runbook file after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/write-runbook/

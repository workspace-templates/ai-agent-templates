# Runbook Writing

**Skill** · Documentation

Turns an operational task or alert into a runbook with symptoms, checks and exact commands, so on-call can act at 3am without guessing.

## Install

```bash
npx workspacetemplates add runbook-writing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/runbook-writing/SKILL.md](claude-code/.claude/skills/runbook-writing/SKILL.md) | `.claude/skills/runbook-writing/SKILL.md` |
| Codex | [codex/.agents/skills/runbook-writing/SKILL.md](codex/.agents/skills/runbook-writing/SKILL.md) | `.agents/skills/runbook-writing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/runbook-writing/SKILL.md](cursor/.cursor/skills/runbook-writing/SKILL.md) | `.cursor/skills/runbook-writing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/runbook-writing/SKILL.md](gemini-cli/.gemini/skills/runbook-writing/SKILL.md) | `.gemini/skills/runbook-writing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/runbook-writing/SKILL.md](copilot/.github/skills/runbook-writing/SKILL.md) | `.github/skills/runbook-writing/SKILL.md` |

## What it does

A good runbook is read by someone tired, stressed and new to the service. This skill writes for that person: short steps, copyable commands, and a clear answer to what healthy looks like after each one.

The agent pulls real service names, ports, dashboards and scripts from the repository and infrastructure files, and marks every command as read-only or as one that changes state.

## Use it when

- An alert fires and nobody remembers how to handle it
- A manual deploy, failover or restore exists only in one person's head
- You are preparing a service for an on-call rotation
- A postmortem action item says "write a runbook"

## What it can access

- Reads infrastructure, config and alert files
- Writes a runbook file
- Does not execute state-changing commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/runbook-writing/

# Deployment Strategies

**Skill** · DevOps and cloud

Picks blue-green, canary or rolling for a service from its risk and state, then writes the rollout, verification and rollback steps.

## Install

```bash
npx workspacetemplates add deployment-strategies
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/deployment-strategies/SKILL.md](claude-code/.claude/skills/deployment-strategies/SKILL.md) | `.claude/skills/deployment-strategies/SKILL.md` |
| Codex | [codex/.agents/skills/deployment-strategies/SKILL.md](codex/.agents/skills/deployment-strategies/SKILL.md) | `.agents/skills/deployment-strategies/SKILL.md` |
| Cursor | [cursor/.cursor/skills/deployment-strategies/SKILL.md](cursor/.cursor/skills/deployment-strategies/SKILL.md) | `.cursor/skills/deployment-strategies/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/deployment-strategies/SKILL.md](gemini-cli/.gemini/skills/deployment-strategies/SKILL.md) | `.gemini/skills/deployment-strategies/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/deployment-strategies/SKILL.md](copilot/.github/skills/deployment-strategies/SKILL.md) | `.github/skills/deployment-strategies/SKILL.md` |

## What it does

The right deployment strategy depends on the service, not on what is fashionable. A stateless API with good metrics can roll; a payment service with a schema change needs a canary and a plan for the database. This skill asks the questions that decide it.

It ends with a runbook that spells out each step, the signal that says go or stop, and the exact command to roll back, written before the deploy instead of during it.

## Use it when

- You are about to ship a risky change and want a safer path
- Releases currently mean a maintenance window and crossed fingers
- A rollback was attempted and made the outage worse
- You need to ship a database change alongside new code

## What it can access

- Reads deployment config, pipeline files and migrations
- Writes a runbook file; runs no deploy commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/deployment-strategies/

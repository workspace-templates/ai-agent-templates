# Add Health Check

**Command** · Backend and APIs

Adds liveness and readiness endpoints that test real dependencies with short timeouts, so orchestrators restart the right things.

## Install

```bash
npx workspacetemplates add add-health-check
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-health-check.md](claude-code/.claude/commands/add-health-check.md) | `.claude/commands/add-health-check.md` |
| Codex | [codex/home/.codex/prompts/add-health-check.md](codex/home/.codex/prompts/add-health-check.md) | `~/.codex/prompts/add-health-check.md` |
| Cursor | [cursor/.cursor/skills/add-health-check/SKILL.md](cursor/.cursor/skills/add-health-check/SKILL.md) | `.cursor/skills/add-health-check/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-health-check.toml](gemini-cli/.gemini/commands/add-health-check.toml) | `.gemini/commands/add-health-check.toml` |
| GitHub Copilot | [copilot/.github/skills/add-health-check/SKILL.md](copilot/.github/skills/add-health-check/SKILL.md) | `.github/skills/add-health-check/SKILL.md` |

## What it does

A health route that always returns 200 hides outages, and one that calls every dependency on each probe can cause them. This command adds two separate checks: one that says the process is alive, and one that says it can do work.

Each dependency check has a hard timeout and runs a cheap query. The response names what failed without leaking connection strings or versions.

## Use it when

- Kubernetes, ECS or a load balancer needs probes
- Deploys send traffic to instances that are not ready
- Your current /health returns ok even when the database is down
- You are adding a service and want monitoring hooks from day one

## What it can access

- Reads app startup code and configuration
- Edits source and test files, deploy config only after you agree

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-health-check/

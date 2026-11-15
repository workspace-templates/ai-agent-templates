# Deploy Readiness Checker

**Subagent** · DevOps and cloud

Read-only subagent that checks migrations, config, feature flags and rollback steps for the changes in a release before you deploy.

## Install

```bash
npx workspacetemplates add deploy-readiness-checker
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/deploy-readiness-checker.md](claude-code/.claude/agents/deploy-readiness-checker.md) | `.claude/agents/deploy-readiness-checker.md` |
| Codex | [codex/.codex/agents/deploy-readiness-checker.toml](codex/.codex/agents/deploy-readiness-checker.toml) | `.codex/agents/deploy-readiness-checker.toml` |
| Cursor | [cursor/.cursor/agents/deploy-readiness-checker.md](cursor/.cursor/agents/deploy-readiness-checker.md) | `.cursor/agents/deploy-readiness-checker.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/deploy-readiness-checker.md](gemini-cli/.gemini/agents/deploy-readiness-checker.md) | `.gemini/agents/deploy-readiness-checker.md` |
| GitHub Copilot | [copilot/.github/agents/deploy-readiness-checker.agent.md](copilot/.github/agents/deploy-readiness-checker.agent.md) | `.github/agents/deploy-readiness-checker.agent.md` |

## What it does

Most failed deploys are not bad code, they are missing pieces: a migration that locks a big table, an environment variable that exists only in staging, a flag that defaults the wrong way. This subagent checks for them before you ship.

It compares what is about to go out against the last release and produces a go or no-go with the blocking items first. It reads only, so it never triggers the deploy or touches production.

## Use it when

- You are about to release and want a last check of the diff
- A release includes a database migration
- New code reads config or secrets that may not exist in production yet
- You need a rollback plan written down before the deploy window

## What it can access

- Reads the diff, migrations, config and deploy files
- Runs read-only git commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/deploy-readiness-checker/

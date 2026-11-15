# Observability Setup

**Skill** · DevOps and cloud

Adds metrics, traces and structured logs to a service, then builds the alerts and dashboards you need to find a problem within minutes.

## Install

```bash
npx workspacetemplates add observability-setup
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/observability-setup/SKILL.md](claude-code/.claude/skills/observability-setup/SKILL.md) | `.claude/skills/observability-setup/SKILL.md` |
| Codex | [codex/.agents/skills/observability-setup/SKILL.md](codex/.agents/skills/observability-setup/SKILL.md) | `.agents/skills/observability-setup/SKILL.md` |
| Cursor | [cursor/.cursor/skills/observability-setup/SKILL.md](cursor/.cursor/skills/observability-setup/SKILL.md) | `.cursor/skills/observability-setup/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/observability-setup/SKILL.md](gemini-cli/.gemini/skills/observability-setup/SKILL.md) | `.gemini/skills/observability-setup/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/observability-setup/SKILL.md](copilot/.github/skills/observability-setup/SKILL.md) | `.github/skills/observability-setup/SKILL.md` |

## What it does

Instrumentation added late tends to be noisy and still miss the failure you care about. This skill starts with the questions you will ask during an incident, such as is it up, is it slow, is it erroring and which dependency, and instruments only what answers them.

The agent uses OpenTelemetry where the language supports it, keeps metric labels low-cardinality, and ties logs to traces so one request can be followed across services.

## Use it when

- A service goes to production with only console.log for visibility
- An incident took hours because nobody could see which dependency was slow
- Dashboards exist but nobody trusts or reads them
- You are adopting OpenTelemetry in an existing service

## What it can access

- Reads service code and edits it to add instrumentation
- Runs the service and tests locally; sends telemetry only to the collector you configure

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/observability-setup/

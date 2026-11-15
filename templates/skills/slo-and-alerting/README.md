# SLO and Alerting

**Skill** · DevOps and cloud

Defines SLIs, SLOs and multi-window burn-rate alerts so on-call is paged only when users are affected and the error budget is at risk.

## Install

```bash
npx workspacetemplates add slo-and-alerting
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/slo-and-alerting/SKILL.md](claude-code/.claude/skills/slo-and-alerting/SKILL.md) | `.claude/skills/slo-and-alerting/SKILL.md` |
| Codex | [codex/.agents/skills/slo-and-alerting/SKILL.md](codex/.agents/skills/slo-and-alerting/SKILL.md) | `.agents/skills/slo-and-alerting/SKILL.md` |
| Cursor | [cursor/.cursor/skills/slo-and-alerting/SKILL.md](cursor/.cursor/skills/slo-and-alerting/SKILL.md) | `.cursor/skills/slo-and-alerting/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/slo-and-alerting/SKILL.md](gemini-cli/.gemini/skills/slo-and-alerting/SKILL.md) | `.gemini/skills/slo-and-alerting/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/slo-and-alerting/SKILL.md](copilot/.github/skills/slo-and-alerting/SKILL.md) | `.github/skills/slo-and-alerting/SKILL.md` |

## What it does

Alerts on CPU or a single failed request wake people for things users never notice, and still miss slow, steady damage. This skill replaces them with a service-level objective: a target for something users feel, a budget of allowed failure, and alerts based on how fast that budget is burning.

The agent proposes the indicator from your real request data, picks a target you can afford, and writes the alert rules so a fast burn pages and a slow burn opens a ticket.

## Use it when

- On-call gets paged at night for alerts that need no action
- You cannot say how reliable the service is, only that it feels fine
- Teams argue about when to freeze features for reliability
- You are moving to Prometheus, Datadog or Cloud Monitoring SLO alerts

## What it can access

- Reads monitoring config and exported metrics you provide
- Edits alert rule files; changes nothing in a live monitoring system

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/slo-and-alerting/

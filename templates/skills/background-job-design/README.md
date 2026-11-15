# Background Job Design

**Skill** · Backend and APIs

Moves slow or unreliable work off the request path into queues, with idempotent handlers, bounded retries with backoff and a dead-letter queue.

## Install

```bash
npx workspacetemplates add background-job-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/background-job-design/SKILL.md](claude-code/.claude/skills/background-job-design/SKILL.md) | `.claude/skills/background-job-design/SKILL.md` |
| Codex | [codex/.agents/skills/background-job-design/SKILL.md](codex/.agents/skills/background-job-design/SKILL.md) | `.agents/skills/background-job-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/background-job-design/SKILL.md](cursor/.cursor/skills/background-job-design/SKILL.md) | `.cursor/skills/background-job-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/background-job-design/SKILL.md](gemini-cli/.gemini/skills/background-job-design/SKILL.md) | `.gemini/skills/background-job-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/background-job-design/SKILL.md](copilot/.github/skills/background-job-design/SKILL.md) | `.github/skills/background-job-design/SKILL.md` |

## What it does

Sending email or calling a payment provider inside a web request makes pages slow and failures visible. Moving it to a queue fixes that but creates new problems: duplicates, lost jobs and poison messages that retry forever.

This skill has the agent decide what belongs in a job, make each handler safe to run twice, and set retry and dead-letter behavior on purpose. It also leaves you a way to see and replay failed jobs.

## Use it when

- A request handler calls a slow third-party service
- Emails or webhooks are sometimes sent twice
- Failed jobs vanish and nobody notices
- You are choosing what should be a job and what should stay inline

## What it can access

- Reads source files and queue configuration
- Edits handlers and adds a migration for an outbox table when approved
- Runs your tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/background-job-design/

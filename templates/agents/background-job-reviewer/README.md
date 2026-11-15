# Background Job Reviewer

**Subagent** · Backend and APIs

Read-only subagent that audits queue workers and scheduled jobs for idempotency, retry storms, poison messages and lost work.

## Install

```bash
npx workspacetemplates add background-job-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/background-job-reviewer.md](claude-code/.claude/agents/background-job-reviewer.md) | `.claude/agents/background-job-reviewer.md` |
| Codex | [codex/.codex/agents/background-job-reviewer.toml](codex/.codex/agents/background-job-reviewer.toml) | `.codex/agents/background-job-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/background-job-reviewer.md](cursor/.cursor/agents/background-job-reviewer.md) | `.cursor/agents/background-job-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/background-job-reviewer.md](gemini-cli/.gemini/agents/background-job-reviewer.md) | `.gemini/agents/background-job-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/background-job-reviewer.agent.md](copilot/.github/agents/background-job-reviewer.agent.md) | `.github/agents/background-job-reviewer.agent.md` |

## What it does

Jobs run later, out of sight, and more than once. Queues redeliver, workers crash halfway, deploys kill running tasks. This subagent reads each job handler and asks what happens on the second delivery, on the tenth failure and on a payload that can never succeed.

It works with Sidekiq, Celery, BullMQ, Resque, Laravel queues, SQS consumers and plain cron. The output is a list of failure scenarios, ranked by how much damage they do.

## Use it when

- A job double-sent emails or double-charged after a retry
- The queue backed up and never drained
- You are adding a new worker and want a design review first
- A failed job keeps being retried forever

## What it can access

- Reads worker, scheduler and queue configuration files
- Edits nothing and runs no commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/background-job-reviewer/

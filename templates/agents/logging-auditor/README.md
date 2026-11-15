# Logging Auditor

**Subagent** · Backend and APIs

Read-only subagent that audits application logs for missing context, wrong levels, noise and leaked personal data or secrets.

## Install

```bash
npx workspacetemplates add logging-auditor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/logging-auditor.md](claude-code/.claude/agents/logging-auditor.md) | `.claude/agents/logging-auditor.md` |
| Codex | [codex/.codex/agents/logging-auditor.toml](codex/.codex/agents/logging-auditor.toml) | `.codex/agents/logging-auditor.toml` |
| Cursor | [cursor/.cursor/agents/logging-auditor.md](cursor/.cursor/agents/logging-auditor.md) | `.cursor/agents/logging-auditor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/logging-auditor.md](gemini-cli/.gemini/agents/logging-auditor.md) | `.gemini/agents/logging-auditor.md` |
| GitHub Copilot | [copilot/.github/agents/logging-auditor.agent.md](copilot/.github/agents/logging-auditor.agent.md) | `.github/agents/logging-auditor.agent.md` |

## What it does

Good logs answer who, what, where and why at 3 a.m. Bad logs either say nothing useful or say too much, such as a full request body with a password in it. This subagent reads your logging calls and judges them as an on-call engineer would.

It reports missing request identifiers, errors logged without a stack, noisy loops, mixed formats and any place where personal data or credentials could reach the log. Each finding includes a rewritten line.

## Use it when

- Incidents take too long because the logs do not say what happened
- You must pass a privacy or compliance review
- Log volume and cost have grown sharply
- You are adding structured logging and want to know where to start

## What it can access

- Reads source and logging configuration
- Edits nothing and runs no commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/logging-auditor/

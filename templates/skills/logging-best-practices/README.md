# Logging Best Practices

**Skill** · Code quality

Adds structured log lines with levels, correlation IDs and no personal data where they help. Use it when a service is hard to debug from its logs.

## Install

```bash
npx workspacetemplates add logging-best-practices
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/logging-best-practices/SKILL.md](claude-code/.claude/skills/logging-best-practices/SKILL.md) | `.claude/skills/logging-best-practices/SKILL.md` |
| Codex | [codex/.agents/skills/logging-best-practices/SKILL.md](codex/.agents/skills/logging-best-practices/SKILL.md) | `.agents/skills/logging-best-practices/SKILL.md` |
| Cursor | [cursor/.cursor/skills/logging-best-practices/SKILL.md](cursor/.cursor/skills/logging-best-practices/SKILL.md) | `.cursor/skills/logging-best-practices/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/logging-best-practices/SKILL.md](gemini-cli/.gemini/skills/logging-best-practices/SKILL.md) | `.gemini/skills/logging-best-practices/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/logging-best-practices/SKILL.md](copilot/.github/skills/logging-best-practices/SKILL.md) | `.github/skills/logging-best-practices/SKILL.md` |

## What it does

A log line is only useful if someone can find it, link it to one request and read it at three in the morning. This skill makes the agent place a small number of structured entries at the points that decide an outcome, and leaves the rest of the code quiet.

Every entry carries a level, a stable event name and a correlation ID, and never a password, token, email or full request body. The agent matches the logger your project already uses instead of adding a new one.

## Use it when

- A production incident left you guessing because the logs said nothing useful
- You are adding a new service and want a consistent log format from day one
- Log volume is huge but the one failing request is impossible to trace
- A review found passwords or emails being written to log files

## What it can access

- Reads source files and searches them for logger usage
- Edits the files where log lines are added

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/logging-best-practices/

# Add Logging

**Command** · Code quality

Adds structured log lines to one flow at the points that help debugging, with levels, context fields and no sensitive data.

## Install

```bash
npx workspacetemplates add add-logging
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-logging.md](claude-code/.claude/commands/add-logging.md) | `.claude/commands/add-logging.md` |
| Codex | [codex/home/.codex/prompts/add-logging.md](codex/home/.codex/prompts/add-logging.md) | `~/.codex/prompts/add-logging.md` |
| Cursor | [cursor/.cursor/skills/add-logging/SKILL.md](cursor/.cursor/skills/add-logging/SKILL.md) | `.cursor/skills/add-logging/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-logging.toml](gemini-cli/.gemini/commands/add-logging.toml) | `.gemini/commands/add-logging.toml` |
| GitHub Copilot | [copilot/.github/skills/add-logging/SKILL.md](copilot/.github/skills/add-logging/SKILL.md) | `.github/skills/add-logging/SKILL.md` |

## What it does

Logs written in a panic are either silent when you need them or so chatty nobody reads them. This command traces one flow from entry to exit and picks the few places where a line will answer a real question later.

It uses the logger the project already has, adds fields instead of string concatenation, and keeps passwords, tokens and personal data out of every line.

## Use it when

- A request fails in production and the logs say nothing useful
- You are adding a new background job or webhook handler
- Support needs to follow one order through several services
- Existing logs print whole objects with customer data

## What it can access

- Reads the flow and existing logging setup
- Edits the named files to add log calls and runs the tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-logging/

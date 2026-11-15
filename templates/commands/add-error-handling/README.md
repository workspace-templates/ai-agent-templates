# Add Error Handling

**Command** · Code quality

Adds real error handling to one function: lists its failure modes, handles each with a clear message and cleans up resources.

## Install

```bash
npx workspacetemplates add add-error-handling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-error-handling.md](claude-code/.claude/commands/add-error-handling.md) | `.claude/commands/add-error-handling.md` |
| Codex | [codex/home/.codex/prompts/add-error-handling.md](codex/home/.codex/prompts/add-error-handling.md) | `~/.codex/prompts/add-error-handling.md` |
| Cursor | [cursor/.cursor/skills/add-error-handling/SKILL.md](cursor/.cursor/skills/add-error-handling/SKILL.md) | `.cursor/skills/add-error-handling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-error-handling.toml](gemini-cli/.gemini/commands/add-error-handling.toml) | `.gemini/commands/add-error-handling.toml` |
| GitHub Copilot | [copilot/.github/skills/add-error-handling/SKILL.md](copilot/.github/skills/add-error-handling/SKILL.md) | `.github/skills/add-error-handling/SKILL.md` |

## What it does

Most functions only work on the happy path. This command takes one function, reads what it calls, and writes down every way it can fail before touching a line.

Each failure gets a specific response in the style the codebase already uses, whether that is typed errors, result values or exceptions, with cleanup that still runs when things go wrong.

## Use it when

- A function crashes with a vague stack trace in production
- You wrapped an API call and never handled a timeout
- Reviewers keep asking what happens when this fails
- A file or connection is opened and not reliably closed

## What it can access

- Reads the function, its callers and tests
- Edits the named function and adds tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-error-handling/

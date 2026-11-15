# Debug Error

**Command** · Workflow

Finds the root cause of an error message or stack trace in your code, shows the evidence and proposes a minimal fix.

## Install

```bash
npx workspacetemplates add debug-error
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/debug-error.md](claude-code/.claude/commands/debug-error.md) | `.claude/commands/debug-error.md` |
| Codex | [codex/home/.codex/prompts/debug-error.md](codex/home/.codex/prompts/debug-error.md) | `~/.codex/prompts/debug-error.md` |
| Cursor | [cursor/.cursor/skills/debug-error/SKILL.md](cursor/.cursor/skills/debug-error/SKILL.md) | `.cursor/skills/debug-error/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/debug-error.toml](gemini-cli/.gemini/commands/debug-error.toml) | `.gemini/commands/debug-error.toml` |
| GitHub Copilot | [copilot/.github/skills/debug-error/SKILL.md](copilot/.github/skills/debug-error/SKILL.md) | `.github/skills/debug-error/SKILL.md` |

## What it does

Pasting an error and getting a guess back wastes time. This command locates the frames in your own code, reads the surrounding logic and tests its theory before proposing a change.

It states what it checked, separates cause from symptom and asks before applying anything.

## Use it when

- A stack trace points into code you did not write
- An error appears only in production or CI
- You are staring at a cryptic message from a library
- A test fails with an unhelpful assertion

## What it can access

- Reads source files, logs and git history
- Runs tests and read-only diagnostics
- Edits code only after approval

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/debug-error/

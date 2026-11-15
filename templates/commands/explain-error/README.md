# Explain Error

**Command** · Documentation

Explains an error message or stack trace in plain words, points to the line most likely at fault and suggests what to check first.

## Install

```bash
npx workspacetemplates add explain-error
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/explain-error.md](claude-code/.claude/commands/explain-error.md) | `.claude/commands/explain-error.md` |
| Codex | [codex/home/.codex/prompts/explain-error.md](codex/home/.codex/prompts/explain-error.md) | `~/.codex/prompts/explain-error.md` |
| Cursor | [cursor/.cursor/skills/explain-error/SKILL.md](cursor/.cursor/skills/explain-error/SKILL.md) | `.cursor/skills/explain-error/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/explain-error.toml](gemini-cli/.gemini/commands/explain-error.toml) | `.gemini/commands/explain-error.toml` |
| GitHub Copilot | [copilot/.github/skills/explain-error/SKILL.md](copilot/.github/skills/explain-error/SKILL.md) | `.github/skills/explain-error/SKILL.md` |

## What it does

Stack traces are written for the runtime, not for the person reading them at 5pm. This command turns one into a short account: what happened, where in your code it started and what to look at first.

It reads the files named in the trace, ignores frames from libraries unless they matter, and says how sure it is. It explains and suggests; it does not edit code.

## Use it when

- A traceback has forty frames and none look familiar
- You hit an error from a tool you have never used
- A junior teammate needs the error explained
- The message is vague, like "undefined is not a function"

## What it can access

- Reads files named in the stack trace
- Edits nothing unless you approve a fix

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/explain-error/

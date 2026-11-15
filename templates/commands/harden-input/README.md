# Harden Input

**Command** · Security

Adds validation and sanitization to the inputs of one named handler and writes tests that throw bad data at it.

## Install

```bash
npx workspacetemplates add harden-input
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/harden-input.md](claude-code/.claude/commands/harden-input.md) | `.claude/commands/harden-input.md` |
| Codex | [codex/home/.codex/prompts/harden-input.md](codex/home/.codex/prompts/harden-input.md) | `~/.codex/prompts/harden-input.md` |
| Cursor | [cursor/.cursor/skills/harden-input/SKILL.md](cursor/.cursor/skills/harden-input/SKILL.md) | `.cursor/skills/harden-input/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/harden-input.toml](gemini-cli/.gemini/commands/harden-input.toml) | `.gemini/commands/harden-input.toml` |
| GitHub Copilot | [copilot/.github/skills/harden-input/SKILL.md](copilot/.github/skills/harden-input/SKILL.md) | `.github/skills/harden-input/SKILL.md` |

## What it does

Handlers tend to trust whatever arrives. This command takes one handler, lists every value it reads from the outside world, and adds checks for type, length, range and format before the value is used.

It also adds tests for the ugly cases, such as oversized bodies and injection strings, so the protection stays in place after the next refactor.

## Use it when

- When a new endpoint accepts form or JSON input
- After a bug report about crashes on odd input
- Before exposing an internal handler to the public
- When replacing ad hoc checks with a schema

## What it can access

- Reads the handler and its tests
- Edits the handler and adds tests; runs the test suite

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/harden-input/

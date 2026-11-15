# Extract Function

**Command** · Code quality

Pulls a block of code into a well-named function with few parameters, updates the callers and checks nothing else changed.

## Install

```bash
npx workspacetemplates add extract-function
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/extract-function.md](claude-code/.claude/commands/extract-function.md) | `.claude/commands/extract-function.md` |
| Codex | [codex/home/.codex/prompts/extract-function.md](codex/home/.codex/prompts/extract-function.md) | `~/.codex/prompts/extract-function.md` |
| Cursor | [cursor/.cursor/skills/extract-function/SKILL.md](cursor/.cursor/skills/extract-function/SKILL.md) | `.cursor/skills/extract-function/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/extract-function.toml](gemini-cli/.gemini/commands/extract-function.toml) | `.gemini/commands/extract-function.toml` |
| GitHub Copilot | [copilot/.github/skills/extract-function/SKILL.md](copilot/.github/skills/extract-function/SKILL.md) | `.github/skills/extract-function/SKILL.md` |

## What it does

The easiest way to shorten a long function is to lift a coherent block out of it. Doing that well means choosing a name that says the purpose, passing only what the block needs and returning only what the caller uses.

This command checks which variables the block reads and writes before moving it, so it does not smuggle in hidden state or change evaluation order.

## Use it when

- A function does several things in sequence
- The same ten lines appear in two places
- You need a unit-testable piece out of a handler
- A comment explains what a block does, so it wants a name

## What it can access

- Reads the file and nearby callers
- Edits the source file and may add a test, then runs checks

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/extract-function/

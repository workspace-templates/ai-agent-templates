# Simplify Code

**Command** · Code quality

Cuts the length and nesting of one function without changing what it does, and proves it with before and after tests.

## Install

```bash
npx workspacetemplates add simplify-code
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/simplify-code.md](claude-code/.claude/commands/simplify-code.md) | `.claude/commands/simplify-code.md` |
| Codex | [codex/home/.codex/prompts/simplify-code.md](codex/home/.codex/prompts/simplify-code.md) | `~/.codex/prompts/simplify-code.md` |
| Cursor | [cursor/.cursor/skills/simplify-code/SKILL.md](cursor/.cursor/skills/simplify-code/SKILL.md) | `.cursor/skills/simplify-code/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/simplify-code.toml](gemini-cli/.gemini/commands/simplify-code.toml) | `.gemini/commands/simplify-code.toml` |
| GitHub Copilot | [copilot/.github/skills/simplify-code/SKILL.md](copilot/.github/skills/simplify-code/SKILL.md) | `.github/skills/simplify-code/SKILL.md` |

## What it does

Deeply nested code with flags and repeated branches is hard to read and easy to break. This command targets a single function and removes the accidental complexity: early returns, dead branches, needless variables.

It measures the result in plain numbers, such as line count and maximum nesting, and keeps the function signature and side effects exactly the same.

## Use it when

- A function has four or more levels of nesting
- You inherited a long method with many flags
- A reviewer flagged cyclomatic complexity
- You want a quick cleanup before extending a function

## What it can access

- Reads the function and its callers
- Edits that function and adds tests, then runs the tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/simplify-code/

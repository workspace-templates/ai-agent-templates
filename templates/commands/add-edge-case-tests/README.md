# Add Edge Case Tests

**Command** · Testing

Adds tests for the boundary and error cases of one function: empty, huge, null, malformed and surprising input.

## Install

```bash
npx workspacetemplates add add-edge-case-tests
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-edge-case-tests.md](claude-code/.claude/commands/add-edge-case-tests.md) | `.claude/commands/add-edge-case-tests.md` |
| Codex | [codex/home/.codex/prompts/add-edge-case-tests.md](codex/home/.codex/prompts/add-edge-case-tests.md) | `~/.codex/prompts/add-edge-case-tests.md` |
| Cursor | [cursor/.cursor/skills/add-edge-case-tests/SKILL.md](cursor/.cursor/skills/add-edge-case-tests/SKILL.md) | `.cursor/skills/add-edge-case-tests/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-edge-case-tests.toml](gemini-cli/.gemini/commands/add-edge-case-tests.toml) | `.gemini/commands/add-edge-case-tests.toml` |
| GitHub Copilot | [copilot/.github/skills/add-edge-case-tests/SKILL.md](copilot/.github/skills/add-edge-case-tests/SKILL.md) | `.github/skills/add-edge-case-tests/SKILL.md` |

## What it does

Most functions are tested with three friendly examples. This command takes one function and probes its limits: what happens at zero, at the maximum, with missing values or with text that should not be there.

Where the function behaves badly, it reports the bug instead of baking it into the test, and asks how you want it to behave.

## Use it when

- After writing a parser, formatter or calculation
- When a function crashed in production on odd input
- Before making a utility part of a shared library
- To learn how a legacy function really behaves

## What it can access

- Reads the function and its callers
- Adds test cases; leaves the function untouched

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-edge-case-tests/

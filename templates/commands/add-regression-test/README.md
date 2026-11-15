# Add Regression Test

**Command** · Testing

Writes a test that fails on the bug you describe, proves it fails, then confirms it passes once the fix is in.

## Install

```bash
npx workspacetemplates add add-regression-test
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-regression-test.md](claude-code/.claude/commands/add-regression-test.md) | `.claude/commands/add-regression-test.md` |
| Codex | [codex/home/.codex/prompts/add-regression-test.md](codex/home/.codex/prompts/add-regression-test.md) | `~/.codex/prompts/add-regression-test.md` |
| Cursor | [cursor/.cursor/skills/add-regression-test/SKILL.md](cursor/.cursor/skills/add-regression-test/SKILL.md) | `.cursor/skills/add-regression-test/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-regression-test.toml](gemini-cli/.gemini/commands/add-regression-test.toml) | `.gemini/commands/add-regression-test.toml` |
| GitHub Copilot | [copilot/.github/skills/add-regression-test/SKILL.md](copilot/.github/skills/add-regression-test/SKILL.md) | `.github/skills/add-regression-test/SKILL.md` |

## What it does

A bug fix without a test tends to come back. This command turns a bug report into the smallest test that reproduces it, runs it to see it fail for the right reason and only then lets the fix go in.

The test is placed beside the existing ones in their style, and the report shows the red run and the green run so the evidence is visible.

## Use it when

- Right after you find the cause of a bug
- When a support ticket describes a failing input
- Before refactoring a function that has bitten you before
- To lock in a hotfix before the release

## What it can access

- Reads source and tests, runs the test command
- Adds a test file or case; edits source only after you agree

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-regression-test/

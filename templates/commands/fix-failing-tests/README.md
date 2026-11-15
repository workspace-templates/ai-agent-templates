# Fix Failing Tests

**Command** · Testing

Runs the suite, groups failures by shared cause and fixes one cause at a time, rerunning after each fix.

## Install

```bash
npx workspacetemplates add fix-failing-tests
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/fix-failing-tests.md](claude-code/.claude/commands/fix-failing-tests.md) | `.claude/commands/fix-failing-tests.md` |
| Codex | [codex/home/.codex/prompts/fix-failing-tests.md](codex/home/.codex/prompts/fix-failing-tests.md) | `~/.codex/prompts/fix-failing-tests.md` |
| Cursor | [cursor/.cursor/skills/fix-failing-tests/SKILL.md](cursor/.cursor/skills/fix-failing-tests/SKILL.md) | `.cursor/skills/fix-failing-tests/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/fix-failing-tests.toml](gemini-cli/.gemini/commands/fix-failing-tests.toml) | `.gemini/commands/fix-failing-tests.toml` |
| GitHub Copilot | [copilot/.github/skills/fix-failing-tests/SKILL.md](copilot/.github/skills/fix-failing-tests/SKILL.md) | `.github/skills/fix-failing-tests/SKILL.md` |

## What it does

Forty red tests rarely mean forty bugs. This command runs the suite, clusters the failures by root cause and works through the clusters in order of how many tests each one explains.

It decides, for every cluster, whether the code or the test is wrong, and tells you when a fix would mean weakening an assertion.

## Use it when

- After a dependency bump turns the suite red
- When a merge leaves many unrelated failures
- Before a release when CI is blocking
- When you inherit a project whose tests nobody has run lately

## What it can access

- Runs the test suite and reads source and tests
- Edits code and tests; commits only on your yes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/fix-failing-tests/

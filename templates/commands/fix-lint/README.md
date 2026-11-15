# Fix Lint Errors

**Command** · Code quality

Runs your linter, applies only safe fixes, then lists every remaining finding with a reason so nothing is silenced by accident.

## Install

```bash
npx workspacetemplates add fix-lint
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/fix-lint.md](claude-code/.claude/commands/fix-lint.md) | `.claude/commands/fix-lint.md` |
| Codex | [codex/home/.codex/prompts/fix-lint.md](codex/home/.codex/prompts/fix-lint.md) | `~/.codex/prompts/fix-lint.md` |
| Cursor | [cursor/.cursor/skills/fix-lint/SKILL.md](cursor/.cursor/skills/fix-lint/SKILL.md) | `.cursor/skills/fix-lint/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/fix-lint.toml](gemini-cli/.gemini/commands/fix-lint.toml) | `.gemini/commands/fix-lint.toml` |
| GitHub Copilot | [copilot/.github/skills/fix-lint/SKILL.md](copilot/.github/skills/fix-lint/SKILL.md) | `.github/skills/fix-lint/SKILL.md` |

## What it does

Lint cleanups go wrong when a tool is told to fix everything and starts changing behavior or adding disable comments. This command separates mechanical fixes from findings that need a human decision.

It runs the linter your project already configures, checks that fixes did not break the tests, and leaves the judgment calls in a short list.

## Use it when

- CI fails on lint and you want it green quickly
- You turned on a new rule and have hundreds of hits
- Before a release, to clean up warnings
- After merging a branch with old formatting

## What it can access

- Runs your linter and test command
- Edits source files in the given path

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/fix-lint/

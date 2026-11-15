# Cherry Pick Fix

**Command** · Git and releases

Cherry-picks a fix commit onto a release branch, resolves conflicts with you and runs the tests there before anything is pushed.

## Install

```bash
npx workspacetemplates add cherry-pick-fix
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/cherry-pick-fix.md](claude-code/.claude/commands/cherry-pick-fix.md) | `.claude/commands/cherry-pick-fix.md` |
| Codex | [codex/home/.codex/prompts/cherry-pick-fix.md](codex/home/.codex/prompts/cherry-pick-fix.md) | `~/.codex/prompts/cherry-pick-fix.md` |
| Cursor | [cursor/.cursor/skills/cherry-pick-fix/SKILL.md](cursor/.cursor/skills/cherry-pick-fix/SKILL.md) | `.cursor/skills/cherry-pick-fix/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/cherry-pick-fix.toml](gemini-cli/.gemini/commands/cherry-pick-fix.toml) | `.gemini/commands/cherry-pick-fix.toml` |
| GitHub Copilot | [copilot/.github/skills/cherry-pick-fix/SKILL.md](copilot/.github/skills/cherry-pick-fix/SKILL.md) | `.github/skills/cherry-pick-fix/SKILL.md` |

## What it does

Backporting a bugfix is easy until the release branch has drifted. This command applies the commit on a fresh branch from the release line, explains every conflict and checks that the fix still works in that older code.

The original branches stay untouched. You get a ready branch and a test result, and pushing is left to you.

## Use it when

- A bug fixed on main must also ship in a maintenance release
- A hotfix needs to land on several supported branches
- You want conflicts explained instead of resolved blindly
- You need proof the tests pass on the older branch

## What it can access

- Reads commits, diffs and test configuration
- Creates a branch, applies the cherry-pick and runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/cherry-pick-fix/

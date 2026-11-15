# Resolve Conflicts

**Command** · Git and releases

Finds every conflicted file after a merge or rebase, resolves each with written reasoning and runs the checks before you continue.

## Install

```bash
npx workspacetemplates add resolve-conflicts
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/resolve-conflicts.md](claude-code/.claude/commands/resolve-conflicts.md) | `.claude/commands/resolve-conflicts.md` |
| Codex | [codex/home/.codex/prompts/resolve-conflicts.md](codex/home/.codex/prompts/resolve-conflicts.md) | `~/.codex/prompts/resolve-conflicts.md` |
| Cursor | [cursor/.cursor/skills/resolve-conflicts/SKILL.md](cursor/.cursor/skills/resolve-conflicts/SKILL.md) | `.cursor/skills/resolve-conflicts/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/resolve-conflicts.toml](gemini-cli/.gemini/commands/resolve-conflicts.toml) | `.gemini/commands/resolve-conflicts.toml` |
| GitHub Copilot | [copilot/.github/skills/resolve-conflicts/SKILL.md](copilot/.github/skills/resolve-conflicts/SKILL.md) | `.github/skills/resolve-conflicts/SKILL.md` |

## What it does

A conflict marker is easy to delete and hard to resolve correctly. This command reads both sides, the base version and the commit messages behind them so that the result keeps the intent of each change.

Each file gets a short reason for the chosen resolution. Lines where the intent is unclear are left for you, and the project tests must pass before the merge or rebase is continued.

## Use it when

- Git halted your rebase or merge and many files show markers
- Two people changed the same function in different ways
- Lockfiles and generated files conflicted
- You would like a check on your own fix before it goes in

## What it can access

- Reads conflicted files, their base versions and commit messages
- Edits conflicted files and stages them; runs lint and tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/resolve-conflicts/

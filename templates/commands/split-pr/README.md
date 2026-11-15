# Split PR

**Command** · Git and releases

Plans how to break a large branch into small pull requests, in an order where each one builds, passes tests and can merge alone.

## Install

```bash
npx workspacetemplates add split-pr
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/split-pr.md](claude-code/.claude/commands/split-pr.md) | `.claude/commands/split-pr.md` |
| Codex | [codex/home/.codex/prompts/split-pr.md](codex/home/.codex/prompts/split-pr.md) | `~/.codex/prompts/split-pr.md` |
| Cursor | [cursor/.cursor/skills/split-pr/SKILL.md](cursor/.cursor/skills/split-pr/SKILL.md) | `.cursor/skills/split-pr/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/split-pr.toml](gemini-cli/.gemini/commands/split-pr.toml) | `.gemini/commands/split-pr.toml` |
| GitHub Copilot | [copilot/.github/skills/split-pr/SKILL.md](copilot/.github/skills/split-pr/SKILL.md) | `.github/skills/split-pr/SKILL.md` |

## What it does

Large pull requests get skimmed and approved without real review. Smaller ones get read. This command analyzes what a branch changes and proposes a sequence of focused pull requests with the dependency between them spelled out.

It plans first and shows file lists per piece. It creates branches only after you approve, and leaves your original branch untouched.

## Use it when

- Your branch changes more than 800 lines or 20 files
- A reviewer asked for the pull request to be smaller
- A feature mixes a refactor, a migration and new behavior
- You want to merge safe parts early and keep risky parts separate

## What it can access

- Reads branch history and diffs
- Creates local branches only after you approve the plan

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/split-pr/

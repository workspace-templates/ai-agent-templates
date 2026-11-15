# Review Changes

**Command** · Git and releases

Reviews your own uncommitted changes before you commit and lists problems by severity, so you catch them before a reviewer does.

## Install

```bash
npx workspacetemplates add review-changes
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/review-changes.md](claude-code/.claude/commands/review-changes.md) | `.claude/commands/review-changes.md` |
| Codex | [codex/home/.codex/prompts/review-changes.md](codex/home/.codex/prompts/review-changes.md) | `~/.codex/prompts/review-changes.md` |
| Cursor | [cursor/.cursor/skills/review-changes/SKILL.md](cursor/.cursor/skills/review-changes/SKILL.md) | `.cursor/skills/review-changes/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/review-changes.toml](gemini-cli/.gemini/commands/review-changes.toml) | `.gemini/commands/review-changes.toml` |
| GitHub Copilot | [copilot/.github/skills/review-changes/SKILL.md](copilot/.github/skills/review-changes/SKILL.md) | `.github/skills/review-changes/SKILL.md` |

## What it does

Most embarrassing review comments are things you would have spotted yourself with five minutes and fresh eyes: a leftover log line, a missing null check, a test that proves nothing. This command reads your working tree like a reviewer would.

It covers staged and unstaged changes plus new files, and sorts findings by how much they matter. It does not edit anything unless you ask.

## Use it when

- Right before running git commit
- After a long coding session when you can no longer see the code clearly
- Before opening a pull request, to avoid the obvious comments
- When a change touches code you do not own

## What it can access

- Reads the working tree diff and new files
- Runs lint and quick tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/review-changes/

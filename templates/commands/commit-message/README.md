# Commit Message

**Command** · Git and releases

Writes a Conventional Commits message from your staged changes, shows it to you and commits only after you say yes.

## Install

```bash
npx workspacetemplates add commit-message
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/commit-message.md](claude-code/.claude/commands/commit-message.md) | `.claude/commands/commit-message.md` |
| Codex | [codex/home/.codex/prompts/commit-message.md](codex/home/.codex/prompts/commit-message.md) | `~/.codex/prompts/commit-message.md` |
| Cursor | [cursor/.cursor/skills/commit-message/SKILL.md](cursor/.cursor/skills/commit-message/SKILL.md) | `.cursor/skills/commit-message/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/commit-message.toml](gemini-cli/.gemini/commands/commit-message.toml) | `.gemini/commands/commit-message.toml` |
| GitHub Copilot | [copilot/.github/skills/commit-message/SKILL.md](copilot/.github/skills/commit-message/SKILL.md) | `.github/skills/commit-message/SKILL.md` |

## What it does

Good commit messages explain why a change exists, and that is the part people skip when they are tired. This command reads what is staged, works out the one thing the change does and drafts a message in the Conventional Commits format.

It never stages files for you and never commits without an answer. If the staged diff mixes unrelated work, it says so and suggests how to split it.

## Use it when

- Right after you stage a change and want a clear message
- When a diff touches several files and you are unsure of the type
- On a team that uses Conventional Commits for changelogs
- When you want a body that explains why, not what

## What it can access

- Reads the staged diff and recent commit subjects
- Runs git commit only after you confirm

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/commit-message/

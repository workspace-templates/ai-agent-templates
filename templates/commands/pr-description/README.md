# Pull Request Description

**Command** · Git and releases

Drafts a pull request title and description from the diff between your branch and the base branch, ready to paste into GitHub.

## Install

```bash
npx workspacetemplates add pr-description
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/pr-description.md](claude-code/.claude/commands/pr-description.md) | `.claude/commands/pr-description.md` |
| Codex | [codex/home/.codex/prompts/pr-description.md](codex/home/.codex/prompts/pr-description.md) | `~/.codex/prompts/pr-description.md` |
| Cursor | [cursor/.cursor/skills/pr-description/SKILL.md](cursor/.cursor/skills/pr-description/SKILL.md) | `.cursor/skills/pr-description/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/pr-description.toml](gemini-cli/.gemini/commands/pr-description.toml) | `.gemini/commands/pr-description.toml` |
| GitHub Copilot | [copilot/.github/skills/pr-description/SKILL.md](copilot/.github/skills/pr-description/SKILL.md) | `.github/skills/pr-description/SKILL.md` |

## What it does

Reviewers decide how carefully to read a pull request in the first few lines. This command builds a description from the real diff and commit list, so it covers what changed, why and how to check it.

It does not open the pull request. You get text to review, and anything it could not know, such as the ticket or the reason for a trade-off, is marked for you to fill in.

## Use it when

- Before opening a pull request from a feature branch
- When a branch has many commits and no one remembers the story
- To give reviewers a test plan they can follow
- When the team template needs summary, risk and testing sections

## What it can access

- Reads commits and the diff against the base branch
- Reads .github templates; changes nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pr-description/

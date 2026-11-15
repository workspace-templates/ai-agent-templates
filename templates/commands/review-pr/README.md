# Review PR

**Command** · Git and releases

Reviews a pull request by number or link and returns a verdict with blocking issues, optional suggestions and what was checked.

## Install

```bash
npx workspacetemplates add review-pr
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/review-pr.md](claude-code/.claude/commands/review-pr.md) | `.claude/commands/review-pr.md` |
| Codex | [codex/home/.codex/prompts/review-pr.md](codex/home/.codex/prompts/review-pr.md) | `~/.codex/prompts/review-pr.md` |
| Cursor | [cursor/.cursor/skills/review-pr/SKILL.md](cursor/.cursor/skills/review-pr/SKILL.md) | `.cursor/skills/review-pr/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/review-pr.toml](gemini-cli/.gemini/commands/review-pr.toml) | `.gemini/commands/review-pr.toml` |
| GitHub Copilot | [copilot/.github/skills/review-pr/SKILL.md](copilot/.github/skills/review-pr/SKILL.md) | `.github/skills/review-pr/SKILL.md` |

## What it does

A useful review reads the whole change, checks it against the stated goal, and separates must-fix problems from taste. This command fetches the pull request, reads the description, diff and discussion, and writes comments with file and line references.

It ends with a clear verdict. Nothing is posted to the pull request unless you ask for it.

## Use it when

- A teammate asked you for a review and the diff is large
- You want a first pass before a human reads it
- You review pull requests in a codebase you do not know well
- You want blocking and non-blocking comments kept apart

## What it can access

- Reads the pull request, diff and CI status through the gh CLI
- Reads repository files for context; posts only if you ask

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/review-pr/

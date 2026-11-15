# Code Comments Docstrings

**Skill** · Documentation

Writes docstrings and comments that explain why the code is the way it is, and removes stale or noisy ones, without changing behavior.

## Install

```bash
npx workspacetemplates add code-comments-docstrings
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/code-comments-docstrings/SKILL.md](claude-code/.claude/skills/code-comments-docstrings/SKILL.md) | `.claude/skills/code-comments-docstrings/SKILL.md` |
| Codex | [codex/.agents/skills/code-comments-docstrings/SKILL.md](codex/.agents/skills/code-comments-docstrings/SKILL.md) | `.agents/skills/code-comments-docstrings/SKILL.md` |
| Cursor | [cursor/.cursor/skills/code-comments-docstrings/SKILL.md](cursor/.cursor/skills/code-comments-docstrings/SKILL.md) | `.cursor/skills/code-comments-docstrings/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/code-comments-docstrings/SKILL.md](gemini-cli/.gemini/skills/code-comments-docstrings/SKILL.md) | `.gemini/skills/code-comments-docstrings/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/code-comments-docstrings/SKILL.md](copilot/.github/skills/code-comments-docstrings/SKILL.md) | `.github/skills/code-comments-docstrings/SKILL.md` |

## What it does

Most comments restate the next line, and the useful ones rot after the first refactor. This skill sends the agent through a file with a different test: would a maintainer lose something if this comment vanished?

It adds docstrings to public functions, records the reasons behind surprising code, deletes comments that lie, and leaves the executable code byte for byte alone.

## Use it when

- A module has public functions with no docstrings
- You inherited code full of comments like "increment i"
- A refactor left comments that describe the old behavior
- Before releasing a library whose API doc is built from docstrings

## What it can access

- Reads source files
- Edits comments and docstrings only

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/code-comments-docstrings/

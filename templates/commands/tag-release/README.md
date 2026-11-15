# Tag Release

**Command** · Git and releases

Picks the next semantic version from commits since the last tag and prepares the annotated tag command for your approval.

## Install

```bash
npx workspacetemplates add tag-release
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/tag-release.md](claude-code/.claude/commands/tag-release.md) | `.claude/commands/tag-release.md` |
| Codex | [codex/home/.codex/prompts/tag-release.md](codex/home/.codex/prompts/tag-release.md) | `~/.codex/prompts/tag-release.md` |
| Cursor | [cursor/.cursor/skills/tag-release/SKILL.md](cursor/.cursor/skills/tag-release/SKILL.md) | `.cursor/skills/tag-release/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/tag-release.toml](gemini-cli/.gemini/commands/tag-release.toml) | `.gemini/commands/tag-release.toml` |
| GitHub Copilot | [copilot/.github/skills/tag-release/SKILL.md](copilot/.github/skills/tag-release/SKILL.md) | `.github/skills/tag-release/SKILL.md` |

## What it does

Choosing a version number by feel leads to breaking changes shipped as patches. This command reads every commit since the latest tag, classifies them and proposes the smallest correct bump.

It writes the tag message from the real changes and prints the exact commands. It will not create or push a tag until you answer.

## Use it when

- You are ready to cut a release and unsure whether it is minor or patch
- The team uses Conventional Commits and wants the bump derived from them
- You need a short tag annotation without writing release notes by hand
- You want a check that the working tree is clean before tagging

## What it can access

- Reads git history and working tree status
- Creates a tag locally, and pushes it only after a second approval

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/tag-release/

# Release Notes

**Command** · Git and releases

Writes user-facing release notes from merged pull requests since the last release, grouped by what users can now do.

## Install

```bash
npx workspacetemplates add release-notes
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/release-notes.md](claude-code/.claude/commands/release-notes.md) | `.claude/commands/release-notes.md` |
| Codex | [codex/home/.codex/prompts/release-notes.md](codex/home/.codex/prompts/release-notes.md) | `~/.codex/prompts/release-notes.md` |
| Cursor | [cursor/.cursor/skills/release-notes/SKILL.md](cursor/.cursor/skills/release-notes/SKILL.md) | `.cursor/skills/release-notes/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/release-notes.toml](gemini-cli/.gemini/commands/release-notes.toml) | `.gemini/commands/release-notes.toml` |
| GitHub Copilot | [copilot/.github/skills/release-notes/SKILL.md](copilot/.github/skills/release-notes/SKILL.md) | `.github/skills/release-notes/SKILL.md` |

## What it does

Release notes fail when they repeat commit messages. This command collects the merged changes and rewrites them around what people can do now, what got better and what they must change on their side.

Internal work is left out. Anything that needs action, such as a migration, a renamed setting or a removed option, is placed at the top where nobody can miss it.

## Use it when

- You publish a release and need a post or email
- Support asks what changed in the latest version
- Customers must know about a breaking change in time
- You want release notes that a non-developer can read

## What it can access

- Reads git history and, if installed, GitHub pull request text through gh
- Does not write or publish anything

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/release-notes/

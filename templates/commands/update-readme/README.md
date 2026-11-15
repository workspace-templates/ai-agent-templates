# Update README

**Command** · Documentation

Compares your README with the real code and fixes install, run and usage sections that no longer match what the project does.

## Install

```bash
npx workspacetemplates add update-readme
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/update-readme.md](claude-code/.claude/commands/update-readme.md) | `.claude/commands/update-readme.md` |
| Codex | [codex/home/.codex/prompts/update-readme.md](codex/home/.codex/prompts/update-readme.md) | `~/.codex/prompts/update-readme.md` |
| Cursor | [cursor/.cursor/skills/update-readme/SKILL.md](cursor/.cursor/skills/update-readme/SKILL.md) | `.cursor/skills/update-readme/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/update-readme.toml](gemini-cli/.gemini/commands/update-readme.toml) | `.gemini/commands/update-readme.toml` |
| GitHub Copilot | [copilot/.github/skills/update-readme/SKILL.md](copilot/.github/skills/update-readme/SKILL.md) | `.github/skills/update-readme/SKILL.md` |

## What it does

READMEs rot quietly: a renamed script, a new required tool, an option that was removed last spring. This command checks every claim in the file against the project and corrects the ones that are wrong.

Where the README is silent, it adds only what a new user needs to get started. Your tone and structure stay, and the diff is shown before anything is saved.

## Use it when

- After a release that changed commands or options
- A new teammate says the setup steps do not work
- You inherited a project with an outdated README
- Before making a repository public

## What it can access

- Reads the README, manifests and source
- Edits README.md after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/update-readme/

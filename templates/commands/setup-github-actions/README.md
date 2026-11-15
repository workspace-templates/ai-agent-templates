# Setup GitHub Actions

**Command** · DevOps and cloud · github-actions

Creates a GitHub Actions workflow that installs with a cache, runs lint, tests and build, and uses least-privilege permissions.

## Install

```bash
npx workspacetemplates add setup-github-actions
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/setup-github-actions.md](claude-code/.claude/commands/setup-github-actions.md) | `.claude/commands/setup-github-actions.md` |
| Codex | [codex/home/.codex/prompts/setup-github-actions.md](codex/home/.codex/prompts/setup-github-actions.md) | `~/.codex/prompts/setup-github-actions.md` |
| Cursor | [cursor/.cursor/skills/setup-github-actions/SKILL.md](cursor/.cursor/skills/setup-github-actions/SKILL.md) | `.cursor/skills/setup-github-actions/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/setup-github-actions.toml](gemini-cli/.gemini/commands/setup-github-actions.toml) | `.gemini/commands/setup-github-actions.toml` |
| GitHub Copilot | [copilot/.github/skills/setup-github-actions/SKILL.md](copilot/.github/skills/setup-github-actions/SKILL.md) | `.github/skills/setup-github-actions/SKILL.md` |

## What it does

A good CI file is short, fast and strict about what it can touch. This command reads your project to find the real install, lint, test and build commands, then writes a workflow that runs them in a sensible order.

It pins action versions, turns on dependency caching and limits the token to read access. Nothing is committed or pushed.

## Use it when

- A repository has no CI yet
- Your current workflow takes ten minutes because nothing is cached
- You want pull requests blocked on lint and tests
- You are moving from another CI service

## What it can access

- Reads manifests, scripts and existing workflows
- Writes one workflow file after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/setup-github-actions/

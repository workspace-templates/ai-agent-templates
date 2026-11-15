# Deploy Checklist

**Command** · DevOps and cloud

Builds a deploy checklist from your current diff: migrations, config changes, feature flags, order of steps and how to roll back.

## Install

```bash
npx workspacetemplates add deploy-checklist
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/deploy-checklist.md](claude-code/.claude/commands/deploy-checklist.md) | `.claude/commands/deploy-checklist.md` |
| Codex | [codex/home/.codex/prompts/deploy-checklist.md](codex/home/.codex/prompts/deploy-checklist.md) | `~/.codex/prompts/deploy-checklist.md` |
| Cursor | [cursor/.cursor/skills/deploy-checklist/SKILL.md](cursor/.cursor/skills/deploy-checklist/SKILL.md) | `.cursor/skills/deploy-checklist/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/deploy-checklist.toml](gemini-cli/.gemini/commands/deploy-checklist.toml) | `.gemini/commands/deploy-checklist.toml` |
| GitHub Copilot | [copilot/.github/skills/deploy-checklist/SKILL.md](copilot/.github/skills/deploy-checklist/SKILL.md) | `.github/skills/deploy-checklist/SKILL.md` |

## What it does

Deploys go wrong in the gaps between code and everything around it: a migration that must run first, a new variable nobody set, a flag left on. This command reads the change and lists what the person shipping it has to do.

The result is a short checklist in order, with a rollback path for every risky item. It reads and reports, and it never runs a deploy.

## Use it when

- Before merging a change that touches the database
- You are releasing and want nothing forgotten
- A teammate who did not write the change will deploy it
- You need a rollback plan written down first

## What it can access

- Reads the git diff and changed files
- Runs read-only git commands
- Saves a file only if you ask

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/deploy-checklist/

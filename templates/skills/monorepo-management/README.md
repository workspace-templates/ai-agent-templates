# Monorepo Management

**Skill** · Git and releases · typescript

Sets up and maintains a TypeScript monorepo with workspaces, shared configs, task caching and CI that builds only the packages a change affects.

## Install

```bash
npx workspacetemplates add monorepo-management
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/monorepo-management/SKILL.md](claude-code/.claude/skills/monorepo-management/SKILL.md) | `.claude/skills/monorepo-management/SKILL.md` |
| Codex | [codex/.agents/skills/monorepo-management/SKILL.md](codex/.agents/skills/monorepo-management/SKILL.md) | `.agents/skills/monorepo-management/SKILL.md` |
| Cursor | [cursor/.cursor/skills/monorepo-management/SKILL.md](cursor/.cursor/skills/monorepo-management/SKILL.md) | `.cursor/skills/monorepo-management/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/monorepo-management/SKILL.md](gemini-cli/.gemini/skills/monorepo-management/SKILL.md) | `.gemini/skills/monorepo-management/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/monorepo-management/SKILL.md](copilot/.github/skills/monorepo-management/SKILL.md) | `.github/skills/monorepo-management/SKILL.md` |

## What it does

A monorepo helps when packages share code and hurts when every pull request rebuilds everything. This skill sets the boundaries first: what is a package, who may import whom, and which tasks run where.

It then wires workspaces, one shared TypeScript base config and a task runner with caching, so CI time follows the size of the change rather than the size of the repository.

## Use it when

- You are splitting one app into apps and shared packages
- CI takes longer every month because it rebuilds all packages
- Packages import each other through relative paths into src folders
- Versions of the same dependency differ between packages

## What it can access

- Reads package manifests and configs across the repository
- Edits workspace config, tsconfigs and CI files; runs install and build

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/monorepo-management/

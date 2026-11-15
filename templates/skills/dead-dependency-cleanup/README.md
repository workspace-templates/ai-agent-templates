# Dead Dependency Cleanup

**Skill** · Code quality

Finds unused and duplicated packages in your manifests and removes them one at a time, running the build and tests after each removal so nothing breaks.

## Install

```bash
npx workspacetemplates add dead-dependency-cleanup
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/dead-dependency-cleanup/SKILL.md](claude-code/.claude/skills/dead-dependency-cleanup/SKILL.md) | `.claude/skills/dead-dependency-cleanup/SKILL.md` |
| Codex | [codex/.agents/skills/dead-dependency-cleanup/SKILL.md](codex/.agents/skills/dead-dependency-cleanup/SKILL.md) | `.agents/skills/dead-dependency-cleanup/SKILL.md` |
| Cursor | [cursor/.cursor/skills/dead-dependency-cleanup/SKILL.md](cursor/.cursor/skills/dead-dependency-cleanup/SKILL.md) | `.cursor/skills/dead-dependency-cleanup/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/dead-dependency-cleanup/SKILL.md](gemini-cli/.gemini/skills/dead-dependency-cleanup/SKILL.md) | `.gemini/skills/dead-dependency-cleanup/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/dead-dependency-cleanup/SKILL.md](copilot/.github/skills/dead-dependency-cleanup/SKILL.md) | `.github/skills/dead-dependency-cleanup/SKILL.md` |

## What it does

Dependencies pile up: libraries nobody imports anymore, two packages doing the same job, a dev tool listed as a runtime need. Each one adds install time, attack surface and update noise.

This skill finds candidates with a real scan, checks the ones that tools often miss, and removes them in separate steps so any breakage points to a single package.

## Use it when

- npm install or pip install takes longer every month
- A security alert names a package you never use directly
- You inherit a project and the manifest looks bloated
- Two libraries cover the same task, such as two date or HTTP packages

## What it can access

- Reads manifests, configs, scripts and source files
- Runs the package manager, build and tests
- Edits manifest files and lockfiles through the package manager

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dead-dependency-cleanup/

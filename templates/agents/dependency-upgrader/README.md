# Dependency Upgrader

**Subagent** · DevOps and cloud

Upgrades one dependency at a time, reads its changelog for breaking changes, fixes call sites and runs the tests before moving on.

## Install

```bash
npx workspacetemplates add dependency-upgrader
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/dependency-upgrader.md](claude-code/.claude/agents/dependency-upgrader.md) | `.claude/agents/dependency-upgrader.md` |
| Codex | [codex/.codex/agents/dependency-upgrader.toml](codex/.codex/agents/dependency-upgrader.toml) | `.codex/agents/dependency-upgrader.toml` |
| Cursor | [cursor/.cursor/agents/dependency-upgrader.md](cursor/.cursor/agents/dependency-upgrader.md) | `.cursor/agents/dependency-upgrader.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/dependency-upgrader.md](gemini-cli/.gemini/agents/dependency-upgrader.md) | `.gemini/agents/dependency-upgrader.md` |
| GitHub Copilot | [copilot/.github/agents/dependency-upgrader.agent.md](copilot/.github/agents/dependency-upgrader.agent.md) | `.github/agents/dependency-upgrader.agent.md` |

## What it does

Bulk upgrades fail in ways nobody can untangle. This subagent takes a single package, reads what changed between your version and the target, finds every place your code touches the changed APIs, and upgrades only that package.

Each upgrade ends with a green test run or a clear report of why it stopped. You can review one small diff per dependency instead of one giant lockfile change.

## Use it when

- A security advisory names a dependency you use
- A major version bump has been pending for months
- Renovate or Dependabot opened a PR you do not trust
- You want upgrades done one reviewable step at a time

## What it can access

- Reads your source and lockfiles
- Edits manifest, lockfile and call sites
- Runs your package manager and tests, and fetches release notes from the web

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dependency-upgrader/

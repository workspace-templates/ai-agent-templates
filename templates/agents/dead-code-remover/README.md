# Dead Code Remover

**Subagent** · Code quality

Subagent that deletes code proven unused by searches and build checks, working in small clusters you can review one at a time.

## Install

```bash
npx workspacetemplates add dead-code-remover
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/dead-code-remover.md](claude-code/.claude/agents/dead-code-remover.md) | `.claude/agents/dead-code-remover.md` |
| Codex | [codex/.codex/agents/dead-code-remover.toml](codex/.codex/agents/dead-code-remover.toml) | `.codex/agents/dead-code-remover.toml` |
| Cursor | [cursor/.cursor/agents/dead-code-remover.md](cursor/.cursor/agents/dead-code-remover.md) | `.cursor/agents/dead-code-remover.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/dead-code-remover.md](gemini-cli/.gemini/agents/dead-code-remover.md) | `.gemini/agents/dead-code-remover.md` |
| GitHub Copilot | [copilot/.github/agents/dead-code-remover.agent.md](copilot/.github/agents/dead-code-remover.agent.md) | `.github/agents/dead-code-remover.agent.md` |

## What it does

Unused code looks harmless but costs reading time, hides bugs and keeps old dependencies alive. This subagent only deletes what it can prove is unreferenced, and it shows the proof: the searches it ran and the build that still passes afterward.

Deletions are grouped into clusters, such as one unused module and its tests, so each cluster can be its own commit.

## Use it when

- You inherited a repo and suspect much of it is unused
- A feature flag was retired months ago
- Coverage reports show files nothing calls
- You are shrinking a bundle or a Docker image

## What it can access

- Reads and deletes files in your project
- Runs your build, type check and test commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dead-code-remover/

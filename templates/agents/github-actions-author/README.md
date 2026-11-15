# GitHub Actions Author

**Subagent** · DevOps and cloud · github-actions

Subagent that writes or repairs a GitHub Actions workflow for a stated need, with dependency caching, pinned actions and minimal permissions.

## Install

```bash
npx workspacetemplates add github-actions-author
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/github-actions-author.md](claude-code/.claude/agents/github-actions-author.md) | `.claude/agents/github-actions-author.md` |
| Codex | [codex/.codex/agents/github-actions-author.toml](codex/.codex/agents/github-actions-author.toml) | `.codex/agents/github-actions-author.toml` |
| Cursor | [cursor/.cursor/agents/github-actions-author.md](cursor/.cursor/agents/github-actions-author.md) | `.cursor/agents/github-actions-author.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/github-actions-author.md](gemini-cli/.gemini/agents/github-actions-author.md) | `.gemini/agents/github-actions-author.md` |
| GitHub Copilot | [copilot/.github/agents/github-actions-author.agent.md](copilot/.github/agents/github-actions-author.agent.md) | `.github/agents/github-actions-author.agent.md` |

## What it does

Most workflows are copied from a blog post and then patched until green. This subagent starts from what you need the pipeline to do, reads your project to find the real build and test commands, and writes a workflow that is fast and locked down.

It sets least-privilege permissions, caches dependencies, cancels superseded runs and keeps secrets out of pull requests from forks. When fixing a broken workflow it finds the failing step before changing anything.

## Use it when

- You need a CI workflow for a repository that has none
- A workflow is slow and reinstalls dependencies on every run
- A workflow fails and the log is long and unclear
- You want to tighten permissions after a security review

## What it can access

- Reads project files and existing workflows
- Writes files under .github/workflows/
- Runs local read commands to find build scripts; does not push

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/github-actions-author/

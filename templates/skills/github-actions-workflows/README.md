# GitHub Actions Workflows

**Skill** · DevOps and cloud · github-actions

Writes GitHub Actions workflows that run fast, cache dependencies, use least-privilege tokens and share steps through reusable workflows.

## Install

```bash
npx workspacetemplates add github-actions-workflows
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/github-actions-workflows/SKILL.md](claude-code/.claude/skills/github-actions-workflows/SKILL.md) | `.claude/skills/github-actions-workflows/SKILL.md` |
| Codex | [codex/.agents/skills/github-actions-workflows/SKILL.md](codex/.agents/skills/github-actions-workflows/SKILL.md) | `.agents/skills/github-actions-workflows/SKILL.md` |
| Cursor | [cursor/.cursor/skills/github-actions-workflows/SKILL.md](cursor/.cursor/skills/github-actions-workflows/SKILL.md) | `.cursor/skills/github-actions-workflows/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/github-actions-workflows/SKILL.md](gemini-cli/.gemini/skills/github-actions-workflows/SKILL.md) | `.gemini/skills/github-actions-workflows/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/github-actions-workflows/SKILL.md](copilot/.github/skills/github-actions-workflows/SKILL.md) | `.github/skills/github-actions-workflows/SKILL.md` |

## What it does

Workflow files tend to grow by copy and paste until every repository has five slightly different versions of the same build job. This skill makes the agent design the workflow first: which events trigger it, what can run in parallel, what is cached, and what permissions the token really needs.

The result is a workflow that finishes in minutes, cannot write to your repository unless a job says so, and pulls repeated logic into a reusable workflow or composite action instead of duplicating it.

## Use it when

- You are adding CI to a repository that has none
- A workflow takes too long or reruns work that did not change
- You copy the same job into a third repository
- A security review flagged a workflow with write-all permissions

## What it can access

- Reads and edits files under .github/workflows
- Reads project scripts and lockfiles to match local commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/github-actions-workflows/

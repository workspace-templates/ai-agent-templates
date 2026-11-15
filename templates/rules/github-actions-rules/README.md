# GitHub Actions Rules

**Project rules** · DevOps and cloud · github-actions

Project rules for GitHub Actions workflows: pinned actions, minimal token permissions, caching, reusable workflows and safe secret handling.

## Install

```bash
npx workspacetemplates add github-actions-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/github-actions-rules.mdc](cursor/.cursor/rules/github-actions-rules.mdc) | `.cursor/rules/github-actions-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules shape how an agent writes and edits workflow files under .github/workflows. They push every job toward the same safe defaults, so a generated pipeline does not start with broad permissions or floating action versions.

They also cover speed and reuse: dependency caching, concurrency groups and shared workflows, so CI stays fast and a fix lands in one place.

## Use it when

- You ask an agent to add or change a CI workflow
- Workflows copy the same steps in many repositories
- A security review flagged unpinned actions or write-all tokens
- Pull request builds queue up behind stale runs

## What it can access

- Guidance text for the agent; it adds no scripts and makes no network calls

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/github-actions-rules/

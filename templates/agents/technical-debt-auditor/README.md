# Technical Debt Auditor

**Subagent** · Code quality

Read-only subagent that scans a repository for debt hotspots and ranks them by cost to change and risk of leaving them.

## Install

```bash
npx workspacetemplates add technical-debt-auditor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/technical-debt-auditor.md](claude-code/.claude/agents/technical-debt-auditor.md) | `.claude/agents/technical-debt-auditor.md` |
| Codex | [codex/.codex/agents/technical-debt-auditor.toml](codex/.codex/agents/technical-debt-auditor.toml) | `.codex/agents/technical-debt-auditor.toml` |
| Cursor | [cursor/.cursor/agents/technical-debt-auditor.md](cursor/.cursor/agents/technical-debt-auditor.md) | `.cursor/agents/technical-debt-auditor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/technical-debt-auditor.md](gemini-cli/.gemini/agents/technical-debt-auditor.md) | `.gemini/agents/technical-debt-auditor.md` |
| GitHub Copilot | [copilot/.github/agents/technical-debt-auditor.agent.md](copilot/.github/agents/technical-debt-auditor.agent.md) | `.github/agents/technical-debt-auditor.agent.md` |

## What it does

Every codebase has debt; the useful question is which debt is costing you right now. This subagent combines what the code looks like with what the history shows: files that are both messy and constantly edited are where your time goes.

The result is a short ranked list, not a hundred-line complaint. Each item has the evidence, the cost of leaving it, and a rough size for the fix, so planning is a conversation about trade-offs.

## Use it when

- You need to justify or schedule cleanup work with evidence
- Onboarding takes too long and nobody knows which areas to avoid
- You are choosing what to fix in a quiet sprint
- A new lead wants an honest picture of the repository

## What it can access

- Reads source files and dependency manifests
- Runs read-only git commands and file counting

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/technical-debt-auditor/

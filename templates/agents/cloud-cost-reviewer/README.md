# Cloud Cost Reviewer

**Subagent** · DevOps and cloud · aws

Read-only subagent that reviews infrastructure code and bill exports for waste, then proposes savings ranked by dollars and risk.

## Install

```bash
npx workspacetemplates add cloud-cost-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/cloud-cost-reviewer.md](claude-code/.claude/agents/cloud-cost-reviewer.md) | `.claude/agents/cloud-cost-reviewer.md` |
| Codex | [codex/.codex/agents/cloud-cost-reviewer.toml](codex/.codex/agents/cloud-cost-reviewer.toml) | `.codex/agents/cloud-cost-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/cloud-cost-reviewer.md](cursor/.cursor/agents/cloud-cost-reviewer.md) | `.cursor/agents/cloud-cost-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/cloud-cost-reviewer.md](gemini-cli/.gemini/agents/cloud-cost-reviewer.md) | `.gemini/agents/cloud-cost-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/cloud-cost-reviewer.agent.md](copilot/.github/agents/cloud-cost-reviewer.agent.md) | `.github/agents/cloud-cost-reviewer.agent.md` |

## What it does

Cloud bills grow in quiet ways: oversized instances, unattached volumes, NAT gateways that carry traffic they should not, logs kept forever. This subagent reads your infrastructure code and any cost export you give it, and finds the biggest leaks first.

It makes no changes and has no cloud credentials. Each saving comes with the file and line responsible, an estimate with its assumptions, and the risk of acting on it.

## Use it when

- The monthly bill jumped and nobody knows which resource did it
- You inherited Terraform or CloudFormation and want a cost pass
- A staging environment costs nearly as much as production
- You are planning a budget cut and need safe savings first

## What it can access

- Reads infrastructure code and cost export files
- Cannot edit files or contact any cloud account

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/cloud-cost-reviewer/

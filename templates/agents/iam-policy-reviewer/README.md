# IAM Policy Reviewer

**Subagent** · Security · aws

Read-only subagent that audits AWS IAM policies and roles for wildcards, privilege escalation paths and permissions nobody uses.

## Install

```bash
npx workspacetemplates add iam-policy-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/iam-policy-reviewer.md](claude-code/.claude/agents/iam-policy-reviewer.md) | `.claude/agents/iam-policy-reviewer.md` |
| Codex | [codex/.codex/agents/iam-policy-reviewer.toml](codex/.codex/agents/iam-policy-reviewer.toml) | `.codex/agents/iam-policy-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/iam-policy-reviewer.md](cursor/.cursor/agents/iam-policy-reviewer.md) | `.cursor/agents/iam-policy-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/iam-policy-reviewer.md](gemini-cli/.gemini/agents/iam-policy-reviewer.md) | `.gemini/agents/iam-policy-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/iam-policy-reviewer.agent.md](copilot/.github/agents/iam-policy-reviewer.agent.md) | `.github/agents/iam-policy-reviewer.agent.md` |

## What it does

Most AWS breaches grow from a role that was allowed to do more than its job needed. This subagent reads your IAM policy documents, Terraform, CloudFormation or CDK definitions and judges each grant against what the workload actually does.

It looks beyond a bare Action star. It checks for combinations that let a low-privilege identity promote itself, and for trust policies that let the wrong account assume a role.

## Use it when

- A Lambda or ECS task role keeps growing permissions
- You need an access review before an audit
- A pull request adds a new iam_policy or role resource
- You suspect a CI role can do far more than deploy

## What it can access

- Reads infrastructure and application files in your project
- Cannot edit files or run commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/iam-policy-reviewer/

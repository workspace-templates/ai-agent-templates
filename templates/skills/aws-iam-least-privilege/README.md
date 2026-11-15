# AWS IAM Least Privilege

**Skill** · DevOps and cloud · aws

Narrows AWS IAM policies to the actions and resources a workload really uses, based on code and access logs, with every change explained.

## Install

```bash
npx workspacetemplates add aws-iam-least-privilege
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/aws-iam-least-privilege/SKILL.md](claude-code/.claude/skills/aws-iam-least-privilege/SKILL.md) | `.claude/skills/aws-iam-least-privilege/SKILL.md` |
| Codex | [codex/.agents/skills/aws-iam-least-privilege/SKILL.md](codex/.agents/skills/aws-iam-least-privilege/SKILL.md) | `.agents/skills/aws-iam-least-privilege/SKILL.md` |
| Cursor | [cursor/.cursor/skills/aws-iam-least-privilege/SKILL.md](cursor/.cursor/skills/aws-iam-least-privilege/SKILL.md) | `.cursor/skills/aws-iam-least-privilege/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/aws-iam-least-privilege/SKILL.md](gemini-cli/.gemini/skills/aws-iam-least-privilege/SKILL.md) | `.gemini/skills/aws-iam-least-privilege/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/aws-iam-least-privilege/SKILL.md](copilot/.github/skills/aws-iam-least-privilege/SKILL.md) | `.github/skills/aws-iam-least-privilege/SKILL.md` |

## What it does

Policies start broad because that is the quickest way to get something working, and then they stay broad for years. This skill reduces them with evidence: what the code calls, what the logs show was used, and what the resource names really are.

Wildcards are replaced with named actions and ARNs, conditions are added where they help, and anything the agent cannot confirm is listed for you to decide instead of removed on a guess.

## Use it when

- A role carries AdministratorAccess or Action: * because it was easier
- An audit asks which permissions a service really needs
- You are about to ship a new Lambda or container role
- Access Analyzer reports unused permissions

## What it can access

- Reads IaC files, policy JSON and application code
- Runs read-only AWS CLI calls for access data and policy validation

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/aws-iam-least-privilege/

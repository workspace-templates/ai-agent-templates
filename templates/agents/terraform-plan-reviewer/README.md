# Terraform Plan Reviewer

**Subagent** · DevOps and cloud · terraform

Read-only subagent that reads a terraform plan and flags destroys, forced replacements, data loss risk and surprise changes before apply.

## Install

```bash
npx workspacetemplates add terraform-plan-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/terraform-plan-reviewer.md](claude-code/.claude/agents/terraform-plan-reviewer.md) | `.claude/agents/terraform-plan-reviewer.md` |
| Codex | [codex/.codex/agents/terraform-plan-reviewer.toml](codex/.codex/agents/terraform-plan-reviewer.toml) | `.codex/agents/terraform-plan-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/terraform-plan-reviewer.md](cursor/.cursor/agents/terraform-plan-reviewer.md) | `.cursor/agents/terraform-plan-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/terraform-plan-reviewer.md](gemini-cli/.gemini/agents/terraform-plan-reviewer.md) | `.gemini/agents/terraform-plan-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/terraform-plan-reviewer.agent.md](copilot/.github/agents/terraform-plan-reviewer.agent.md) | `.github/agents/terraform-plan-reviewer.agent.md` |

## What it does

The line that says "1 to destroy" hides a lot. This subagent reads a saved plan, in text or JSON, and tells you which resources vanish, which are rebuilt and why, and which changes touch data you cannot get back.

It is for the pause between plan and apply. It only reads, so it cannot run apply by accident, and it answers with a go, hold or stop recommendation you can argue with.

## Use it when

- A plan shows destroys you did not expect from a small code change
- You are reviewing a teammate's infrastructure pull request
- A provider upgrade changed many resources at once
- Before applying anything to a production workspace

## What it can access

- Reads .tf files and plan output
- May run terraform show on a saved plan; never applies or changes state

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/terraform-plan-reviewer/

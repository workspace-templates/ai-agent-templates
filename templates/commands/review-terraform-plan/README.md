# Review Terraform Plan

**Command** · DevOps and cloud · terraform

Summarizes a terraform plan in plain words and flags destroys, forced replacements and changes that could cause an outage.

## Install

```bash
npx workspacetemplates add review-terraform-plan
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/review-terraform-plan.md](claude-code/.claude/commands/review-terraform-plan.md) | `.claude/commands/review-terraform-plan.md` |
| Codex | [codex/home/.codex/prompts/review-terraform-plan.md](codex/home/.codex/prompts/review-terraform-plan.md) | `~/.codex/prompts/review-terraform-plan.md` |
| Cursor | [cursor/.cursor/skills/review-terraform-plan/SKILL.md](cursor/.cursor/skills/review-terraform-plan/SKILL.md) | `.cursor/skills/review-terraform-plan/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/review-terraform-plan.toml](gemini-cli/.gemini/commands/review-terraform-plan.toml) | `.gemini/commands/review-terraform-plan.toml` |
| GitHub Copilot | [copilot/.github/skills/review-terraform-plan/SKILL.md](copilot/.github/skills/review-terraform-plan/SKILL.md) | `.github/skills/review-terraform-plan/SKILL.md` |

## What it does

Plan output is long, and the line that deletes a database looks the same as the line that adds a tag. This command reads the whole plan and puts the dangerous parts at the top.

It groups changes by action, explains why a resource is being replaced and checks IAM and network edits for widened access. It only reads the plan and never applies it.

## Use it when

- Before approving a pull request that changes infrastructure
- A plan shows many replacements and you do not know why
- You need a short summary for a change review meeting
- After a provider upgrade changed a lot of resources

## What it can access

- Reads Terraform files and plan output
- Runs terraform plan and show, never apply
- Writes a local plan file when none is given

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/review-terraform-plan/

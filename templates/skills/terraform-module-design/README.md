# Terraform Module Design

**Skill** · DevOps and cloud · terraform

Designs reusable Terraform modules with clear inputs and outputs, a safe state layout, and a plan review before anything is applied.

## Install

```bash
npx workspacetemplates add terraform-module-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/terraform-module-design/SKILL.md](claude-code/.claude/skills/terraform-module-design/SKILL.md) | `.claude/skills/terraform-module-design/SKILL.md` |
| Codex | [codex/.agents/skills/terraform-module-design/SKILL.md](codex/.agents/skills/terraform-module-design/SKILL.md) | `.agents/skills/terraform-module-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/terraform-module-design/SKILL.md](cursor/.cursor/skills/terraform-module-design/SKILL.md) | `.cursor/skills/terraform-module-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/terraform-module-design/SKILL.md](gemini-cli/.gemini/skills/terraform-module-design/SKILL.md) | `.gemini/skills/terraform-module-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/terraform-module-design/SKILL.md](copilot/.github/skills/terraform-module-design/SKILL.md) | `.github/skills/terraform-module-design/SKILL.md` |

## What it does

A module that exposes every provider argument is just a worse version of the provider. This skill pushes the agent to decide what the module is for, expose only the choices callers should make, and return the outputs other modules will need.

It also treats state as part of the design, not an afterthought: where each module is applied, what shares a state file and what must not. The plan is read and summarized before any apply.

## Use it when

- You repeat the same set of resources across environments
- A single state file has become slow and risky to change
- You want a module teammates can use without reading its source
- A plan shows a destroy and you need to understand why

## What it can access

- Reads and edits .tf files
- Runs terraform fmt, validate and plan; plan may read remote state with your credentials

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/terraform-module-design/

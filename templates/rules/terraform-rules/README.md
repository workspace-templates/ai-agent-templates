# Terraform Rules

**Project rules** · DevOps and cloud · terraform

Project rules for Terraform: module layout, naming, remote state with locking, typed variables, tagging and a reviewed plan before every apply.

## Install

```bash
npx workspacetemplates add terraform-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/terraform-rules.mdc](cursor/.cursor/rules/terraform-rules.mdc) | `.cursor/rules/terraform-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Infrastructure code changes real systems, so sloppy conventions cost more than they do in an application. These rules give an agent a structure for modules, state and variables that keeps changes small and reviewable.

They also make plans the unit of review: nothing is applied until someone has read exactly what will change.

## Use it when

- You are adding resources or modules to a Terraform codebase
- State is stored on a laptop or shared without locking
- Variables have no types or descriptions
- Teams apply changes without reading the plan

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/terraform-rules/

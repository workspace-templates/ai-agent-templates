# PyTorch Rules

**Project rules** · Data and AI · python, pytorch

Project rules for PyTorch projects: config-driven training, deterministic seeding, device-agnostic code, safe checkpoints and strict evaluation.

## Install

```bash
npx workspacetemplates add pytorch-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/pytorch-rules.mdc](cursor/.cursor/rules/pytorch-rules.mdc) | `.cursor/rules/pytorch-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Training scripts tend to become one long file with hard-coded paths and a GPU assumption. These rules separate model, data and loop, and move every tunable value into a config.

They also cover checkpoints, seeding and evaluation, so a result can be reproduced and a run can be resumed without surprises.

## Use it when

- You are building or extending a PyTorch training pipeline
- Code breaks on a machine without a GPU
- Runs are not reproducible from one day to the next
- Checkpoints cannot be resumed or compared

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pytorch-rules/

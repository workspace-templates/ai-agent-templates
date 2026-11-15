# Turborepo Monorepo Rules

**Project rules** · DevOps and cloud · typescript

Project rules for Turborepo monorepos: clear package boundaries, cacheable task pipelines, shared configs and disciplined versioning.

## Install

```bash
npx workspacetemplates add turborepo-monorepo-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/turborepo-monorepo-rules.mdc](cursor/.cursor/rules/turborepo-monorepo-rules.mdc) | `.cursor/rules/turborepo-monorepo-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

This rules file explains how an agent should work inside a Turborepo workspace with several apps and packages. It keeps dependencies pointing one way and stops code from reaching into another package by relative path.

It also makes pipelines fast and trustworthy: every task declares its inputs and outputs so the cache hits when it should and misses when it must.

## Use it when

- You add a package to an existing monorepo
- Builds are slow because nothing caches
- Apps import each other with ../../ paths
- Config files are copied into every package

## What it can access

- Guidance only; the agent may run turbo and package manager commands in your repo when you let it

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/turborepo-monorepo-rules/

# NestJS Rules

**Project rules** · Backend and APIs · node, typescript

Project rules for NestJS: feature modules, injectable providers, class-validator DTOs, guards, typed ConfigService and supertest e2e tests.

## Install

```bash
npx workspacetemplates add nestjs-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/nestjs-rules.mdc](cursor/.cursor/rules/nestjs-rules.mdc) | `.cursor/rules/nestjs-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

NestJS brings a module system and decorators, and an agent can easily bypass both by importing services across the tree or skipping validation. These rules keep the dependency graph honest.

They explain where each concern belongs: pipes validate, guards authorize, interceptors shape output, filters format errors.

## Use it when

- You are adding a feature module to a Nest app
- Providers import each other in circles
- Request bodies reach services without validation
- You want e2e tests that boot the real module graph

## What it can access

- Instructions only; it does not read or change files by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/nestjs-rules/

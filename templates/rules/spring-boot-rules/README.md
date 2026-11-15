# Spring Boot Rules

**Project rules** · Backend and APIs · java, spring-boot

Project rules for Spring Boot services: controller, service and repository layers, constructor injection, typed properties, validation and test slices.

## Install

```bash
npx workspacetemplates add spring-boot-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/spring-boot-rules.mdc](cursor/.cursor/rules/spring-boot-rules.mdc) | `.cursor/rules/spring-boot-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Spring Boot makes it easy to wire almost anything, which is why services drift into field injection, fat controllers and slow tests. These rules set the layering and the testing approach up front.

The agent learns to bind configuration into typed classes, validate at the edge, and choose the narrowest test annotation that proves the behavior.

## Use it when

- You are adding endpoints to a Spring Boot service
- Tests start the full context for every small check
- Entities are leaking into JSON responses
- Configuration values are scattered as @Value strings

## What it can access

- Instructions only; reading or running anything is up to the agent following them

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/spring-boot-rules/

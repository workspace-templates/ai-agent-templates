# Symfony Rules

**Project rules** · Backend and APIs · php, symfony

Project rules for Symfony apps: autowired services, thin controllers, Doctrine repositories, Form types, Messenger handlers and PHPUnit tests.

## Install

```bash
npx workspacetemplates add symfony-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/symfony-rules.mdc](cursor/.cursor/rules/symfony-rules.mdc) | `.cursor/rules/symfony-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Symfony gives you many ways to reach the same result, and an agent will pick a different one each time unless told. These rules choose one: attribute routing, constructor autowiring, thin controllers and logic in services.

They also cover Doctrine, forms and async work with Messenger, and finish with the checks the agent must run before reporting a change as done.

## Use it when

- You are adding features to a Symfony 6 or 7 application
- Generated controllers contain queries and business logic
- Entities are being passed straight into JSON responses
- Slow work should move to a Messenger queue

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/symfony-rules/

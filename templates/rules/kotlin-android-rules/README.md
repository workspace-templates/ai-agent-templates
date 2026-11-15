# Kotlin Android Rules

**Project rules** · Mobile · kotlin

Project rules for Android in Kotlin: Jetpack Compose UI, ViewModel with StateFlow, Hilt injection, structured coroutines and tests.

## Install

```bash
npx workspacetemplates add kotlin-android-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/kotlin-android-rules.mdc](cursor/.cursor/rules/kotlin-android-rules.mdc) | `.cursor/rules/kotlin-android-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules describe a modern Android codebase: Compose screens that render state, ViewModels that own it and repositories that hide data sources. An agent following them produces features shaped the same way every time.

They also set the coroutine and testing habits that stop leaks and flaky tests, such as injected dispatchers and lifecycle-aware collection.

## Use it when

- You start a Compose-based Android app
- Generated screens keep logic inside composables
- Coroutines are launched from GlobalScope
- You want ViewModel tests that run fast on the JVM

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/kotlin-android-rules/

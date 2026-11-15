# Vue 3 Composition Rules

**Project rules** · Frontend · vue, typescript

Project rules for Vue 3: script setup with TypeScript, composables, Pinia stores, typed props and emits, and Vitest component tests.

## Install

```bash
npx workspacetemplates add vue3-composition-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/vue3-composition-rules.mdc](cursor/.cursor/rules/vue3-composition-rules.mdc) | `.cursor/rules/vue3-composition-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

This file steers an agent toward modern Vue 3 code: single-file components with script setup, composables for shared logic and Pinia for state that really is global.

It rules out older patterns such as the Options API and mixins, and describes how to type props, emits and stores so templates are checked by the compiler.

## Use it when

- You work on a Vue 3 project with an agent
- Generated code mixes Options API and Composition API
- State is passed through many layers of props
- You want component tests that survive refactors

## What it can access

- Guidance text only; nothing is read or run until you ask the agent to work

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/vue3-composition-rules/

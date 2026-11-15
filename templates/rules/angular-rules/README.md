# Angular Rules

**Project rules** · Frontend · angular, typescript

Project rules for Angular: standalone components, signals, typed reactive forms, safe RxJS subscriptions and TestBed component tests.

## Install

```bash
npx workspacetemplates add angular-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/angular-rules.mdc](cursor/.cursor/rules/angular-rules.mdc) | `.cursor/rules/angular-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules direct an agent to write current Angular: standalone components, signals for local state, the new control flow syntax and the inject function.

They also address the places where Angular code goes wrong, such as leaked subscriptions, untyped forms and components that do too much, and set a clear testing habit.

## Use it when

- You add features to an Angular app with an agent
- Generated code uses NgModules and constructor injection only
- Subscriptions leak or components re-render too often
- Forms are loosely typed

## What it can access

- Plain instructions; it does not execute code or reach any network

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/angular-rules/

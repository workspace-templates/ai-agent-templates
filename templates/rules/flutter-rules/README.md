# Flutter Rules

**Project rules** · Mobile · flutter, dart

Project rules for Flutter apps: feature folders, one state solution, const widgets, ThemeData tokens and widget and unit tests.

## Install

```bash
npx workspacetemplates add flutter-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/flutter-rules.mdc](cursor/.cursor/rules/flutter-rules.mdc) | `.cursor/rules/flutter-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules give a Flutter project a predictable layout and a single way to manage state, so an agent adds features without inventing a new pattern each time.

They focus on practices that keep frames smooth and code reviewable: const constructors, small widgets, centralized theming and tests that pump real widgets.

## Use it when

- You start a new Flutter app
- Widgets grow huge build methods
- State is handled with a mix of setState and several packages
- Colors and text styles are hard-coded across screens

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/flutter-rules/

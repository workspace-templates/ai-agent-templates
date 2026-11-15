# SwiftUI iOS Rules

**Project rules** · Mobile · swift

Project rules for SwiftUI apps: @Observable models, NavigationStack routing, async/await with actors, previews and XCTest coverage.

## Install

```bash
npx workspacetemplates add swiftui-ios-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/swiftui-ios-rules.mdc](cursor/.cursor/rules/swiftui-ios-rules.mdc) | `.cursor/rules/swiftui-ios-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules set the shape of a SwiftUI codebase: thin views, observable models that own state, and navigation driven by data. They steer an agent away from patterns that fight the framework.

They also address Swift concurrency and testing, so network calls stay off the main thread and each model can be exercised without launching the UI.

## Use it when

- You start a SwiftUI iOS app
- Views contain networking and parsing code
- Navigation uses deprecated NavigationView
- Concurrency warnings appear after enabling strict checking

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/swiftui-ios-rules/

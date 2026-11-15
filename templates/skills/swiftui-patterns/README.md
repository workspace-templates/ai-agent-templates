# SwiftUI Patterns

**Skill** · Mobile · swift

Structures SwiftUI views, state and navigation around observable models so screens stay small, previewable and free of stale-state bugs.

## Install

```bash
npx workspacetemplates add swiftui-patterns
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/swiftui-patterns/SKILL.md](claude-code/.claude/skills/swiftui-patterns/SKILL.md) | `.claude/skills/swiftui-patterns/SKILL.md` |
| Codex | [codex/.agents/skills/swiftui-patterns/SKILL.md](codex/.agents/skills/swiftui-patterns/SKILL.md) | `.agents/skills/swiftui-patterns/SKILL.md` |
| Cursor | [cursor/.cursor/skills/swiftui-patterns/SKILL.md](cursor/.cursor/skills/swiftui-patterns/SKILL.md) | `.cursor/skills/swiftui-patterns/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/swiftui-patterns/SKILL.md](gemini-cli/.gemini/skills/swiftui-patterns/SKILL.md) | `.gemini/skills/swiftui-patterns/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/swiftui-patterns/SKILL.md](copilot/.github/skills/swiftui-patterns/SKILL.md) | `.github/skills/swiftui-patterns/SKILL.md` |

## What it does

SwiftUI code drifts into giant views with a dozen property wrappers and navigation that breaks on the second tap. This skill gives the agent a fixed way to split a screen into a model, a thin view and a navigation path, using the modern Observation framework.

It also covers the quiet mistakes: state owned by the wrong view, identity that changes on every refresh, and work started in the body instead of a task.

## Use it when

- A SwiftUI view file passes 300 lines
- A list resets its scroll position or loses focus on every update
- Navigation behaves oddly after going back or deep linking
- You are moving from ObservableObject to the Observation framework
- A new screen needs loading, error and content states

## What it can access

- Reads Swift files and project settings
- Runs xcodebuild or swift build and your tests
- Edits Swift source files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/swiftui-patterns/

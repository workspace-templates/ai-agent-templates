# Flutter State Management

**Skill** · Mobile · flutter

Chooses between Riverpod and Bloc for a Flutter feature, implements it cleanly and covers the logic and widgets with tests.

## Install

```bash
npx workspacetemplates add flutter-state-management
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/flutter-state-management/SKILL.md](claude-code/.claude/skills/flutter-state-management/SKILL.md) | `.claude/skills/flutter-state-management/SKILL.md` |
| Codex | [codex/.agents/skills/flutter-state-management/SKILL.md](codex/.agents/skills/flutter-state-management/SKILL.md) | `.agents/skills/flutter-state-management/SKILL.md` |
| Cursor | [cursor/.cursor/skills/flutter-state-management/SKILL.md](cursor/.cursor/skills/flutter-state-management/SKILL.md) | `.cursor/skills/flutter-state-management/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/flutter-state-management/SKILL.md](gemini-cli/.gemini/skills/flutter-state-management/SKILL.md) | `.gemini/skills/flutter-state-management/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/flutter-state-management/SKILL.md](copilot/.github/skills/flutter-state-management/SKILL.md) | `.github/skills/flutter-state-management/SKILL.md` |

## What it does

State management in Flutter goes wrong when the choice is made by habit. This skill has the agent look at what the project already uses, what the feature actually needs, and only then pick Riverpod or Bloc and apply it in the same style as the rest of the code.

The result is a feature with a clear state type, logic that can be tested without a widget tree, and widget tests that pump real states instead of mocking everything.

## Use it when

- You add a screen with loading, error and data states
- A StatefulWidget has grown into a tangle of setState calls
- You are unsure whether to use Riverpod or Bloc for a new module
- Business logic lives inside widgets and cannot be tested
- You are migrating from Provider and want a safe path

## What it can access

- Reads files in your Flutter project
- Runs dart format, flutter analyze and flutter test
- Edits Dart files and may add packages to pubspec.yaml when you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/flutter-state-management/

# Kotlin Android Compose

**Skill** · Mobile · kotlin

Builds Jetpack Compose screens with state hoisting, ViewModels and one-way data flow, so UI stays stateless, previewable and easy to test.

## Install

```bash
npx workspacetemplates add kotlin-android-compose
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/kotlin-android-compose/SKILL.md](claude-code/.claude/skills/kotlin-android-compose/SKILL.md) | `.claude/skills/kotlin-android-compose/SKILL.md` |
| Codex | [codex/.agents/skills/kotlin-android-compose/SKILL.md](codex/.agents/skills/kotlin-android-compose/SKILL.md) | `.agents/skills/kotlin-android-compose/SKILL.md` |
| Cursor | [cursor/.cursor/skills/kotlin-android-compose/SKILL.md](cursor/.cursor/skills/kotlin-android-compose/SKILL.md) | `.cursor/skills/kotlin-android-compose/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/kotlin-android-compose/SKILL.md](gemini-cli/.gemini/skills/kotlin-android-compose/SKILL.md) | `.gemini/skills/kotlin-android-compose/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/kotlin-android-compose/SKILL.md](copilot/.github/skills/kotlin-android-compose/SKILL.md) | `.github/skills/kotlin-android-compose/SKILL.md` |

## What it does

Compose makes it easy to put state, side effects and layout in one function and regret it later. This skill has the agent build each screen as a stateful entry point backed by a ViewModel, wrapped around a stateless composable that only draws what it is given.

It also steers around the common Compose traps: lifecycle-blind collection, unstable parameters that force recomposition, and effects launched on every redraw.

## Use it when

- You add a new Compose screen backed by a repository
- A composable holds remember state that should survive rotation
- A screen recomposes constantly and the layout inspector shows why
- You migrate an XML fragment to Compose one screen at a time
- UI tests are impossible because the screen builds its own dependencies

## What it can access

- Reads Kotlin and Gradle files in your project
- Runs Gradle test and lint tasks
- Edits Kotlin source and may add dependencies to the version catalog

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/kotlin-android-compose/

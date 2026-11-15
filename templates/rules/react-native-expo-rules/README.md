# React Native Expo Rules

**Project rules** · Mobile · react-native, expo, typescript

Project rules for Expo and React Native apps: Expo Router, typed navigation, safe storage, list performance and builds through EAS.

## Install

```bash
npx workspacetemplates add react-native-expo-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/react-native-expo-rules.mdc](cursor/.cursor/rules/react-native-expo-rules.mdc) | `.cursor/rules/react-native-expo-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Mobile code has constraints that web habits miss: small screens, slow lists, flaky networks and secrets that must not ship in the bundle. These rules give the agent the defaults a mobile team would apply by hand.

They fix file-based routing, state and data handling, and the checks to run, so each screen the agent adds is consistent and works on both iOS and Android.

## Use it when

- You start an Expo project with Expo Router
- Lists stutter or the app feels slow on older phones
- Agents add packages that need a custom native build
- You need one convention for navigation, state and storage

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-native-expo-rules/

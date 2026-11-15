# React Native Debugger

**Subagent** · Mobile · react-native

Subagent that diagnoses Metro, native build, and red-screen errors in React Native, finds the real cause, and applies a minimal fix.

## Install

```bash
npx workspacetemplates add react-native-debugger
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/react-native-debugger.md](claude-code/.claude/agents/react-native-debugger.md) | `.claude/agents/react-native-debugger.md` |
| Codex | [codex/.codex/agents/react-native-debugger.toml](codex/.codex/agents/react-native-debugger.toml) | `.codex/agents/react-native-debugger.toml` |
| Cursor | [cursor/.cursor/agents/react-native-debugger.md](cursor/.cursor/agents/react-native-debugger.md) | `.cursor/agents/react-native-debugger.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/react-native-debugger.md](gemini-cli/.gemini/agents/react-native-debugger.md) | `.gemini/agents/react-native-debugger.md` |
| GitHub Copilot | [copilot/.github/agents/react-native-debugger.agent.md](copilot/.github/agents/react-native-debugger.agent.md) | `.github/agents/react-native-debugger.agent.md` |

## What it does

React Native errors surface far from their cause: a red screen about a missing module can come from a stale Metro cache, a mismatched native pod, or a version drift. This subagent reads the full error, decides which layer failed, and fixes that layer.

It prefers the smallest change that works and tells you what it ran. It will not wipe node_modules or upgrade the framework as a reflex.

## Use it when

- Metro fails to bundle or says it cannot resolve a module
- The iOS or Android native build fails after adding a package
- The app shows a red screen with an unhelpful message
- It works on one machine and not another

## What it can access

- Reads project files
- Edits source and config files to apply the fix
- Runs Metro, pod, and Gradle commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-native-debugger/

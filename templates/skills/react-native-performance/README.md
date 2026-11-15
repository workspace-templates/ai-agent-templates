# React Native Performance

**Skill** · Mobile · react-native

Finds and fixes janky lists, wasted re-renders and chatty bridge calls in a React Native app, measuring before and after each change.

## Install

```bash
npx workspacetemplates add react-native-performance
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/react-native-performance/SKILL.md](claude-code/.claude/skills/react-native-performance/SKILL.md) | `.claude/skills/react-native-performance/SKILL.md` |
| Codex | [codex/.agents/skills/react-native-performance/SKILL.md](codex/.agents/skills/react-native-performance/SKILL.md) | `.agents/skills/react-native-performance/SKILL.md` |
| Cursor | [cursor/.cursor/skills/react-native-performance/SKILL.md](cursor/.cursor/skills/react-native-performance/SKILL.md) | `.cursor/skills/react-native-performance/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/react-native-performance/SKILL.md](gemini-cli/.gemini/skills/react-native-performance/SKILL.md) | `.gemini/skills/react-native-performance/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/react-native-performance/SKILL.md](copilot/.github/skills/react-native-performance/SKILL.md) | `.github/skills/react-native-performance/SKILL.md` |

## What it does

React Native apps rarely feel slow for one big reason. A FlatList renders too much, a context update repaints a whole screen, or a loop crosses the native boundary a few hundred times. This skill makes the agent find which of those is real before it rewrites anything.

Every change is tied to a number: dropped frames, render counts or time to interactive on a release build. If a fix does not move the number, it is reverted instead of left behind as clutter.

## Use it when

- A scrolling list stutters on mid-range Android phones
- Typing in one input makes the whole screen re-render
- Startup takes several seconds before the first screen shows
- An animation drops frames while data loads
- You want a performance review before shipping a release

## What it can access

- Reads files in your project
- Runs your build, bundler and test commands
- Edits component and config files when you ask for fixes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-native-performance/

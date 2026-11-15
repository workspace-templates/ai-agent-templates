# Flutter Widget Reviewer

**Subagent** · Mobile · flutter

Read-only subagent that reviews Flutter widgets for rebuild cost, state placement, and layout overflow before they reach a device.

## Install

```bash
npx workspacetemplates add flutter-widget-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/flutter-widget-reviewer.md](claude-code/.claude/agents/flutter-widget-reviewer.md) | `.claude/agents/flutter-widget-reviewer.md` |
| Codex | [codex/.codex/agents/flutter-widget-reviewer.toml](codex/.codex/agents/flutter-widget-reviewer.toml) | `.codex/agents/flutter-widget-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/flutter-widget-reviewer.md](cursor/.cursor/agents/flutter-widget-reviewer.md) | `.cursor/agents/flutter-widget-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/flutter-widget-reviewer.md](gemini-cli/.gemini/agents/flutter-widget-reviewer.md) | `.gemini/agents/flutter-widget-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/flutter-widget-reviewer.agent.md](copilot/.github/agents/flutter-widget-reviewer.agent.md) | `.github/agents/flutter-widget-reviewer.agent.md` |

## What it does

Flutter makes it easy to write a widget that works and rebuilds a whole screen every frame. This subagent reads your widget tree, finds where state lives too high, where const is missing, and where a Column will overflow on a small phone.

Each finding names the file, the line, and a suggested change; the code stays untouched. Use it before a performance profile to save yourself the first hour.

## Use it when

- A screen feels janky when it scrolls or animates
- A new widget has a large build method and you want a second opinion
- You see RenderFlex overflow stripes on smaller devices
- State is passed through five constructors and you want to simplify it

## What it can access

- Reads Dart files in your project
- Runs read-only searches and git diff

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/flutter-widget-reviewer/

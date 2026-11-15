# Mobile UI Reviewer

**Subagent** · Mobile

Read-only subagent that reviews mobile screens for touch targets, safe areas, missing states, and platform conventions on iOS and Android.

## Install

```bash
npx workspacetemplates add mobile-ui-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/mobile-ui-reviewer.md](claude-code/.claude/agents/mobile-ui-reviewer.md) | `.claude/agents/mobile-ui-reviewer.md` |
| Codex | [codex/.codex/agents/mobile-ui-reviewer.toml](codex/.codex/agents/mobile-ui-reviewer.toml) | `.codex/agents/mobile-ui-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/mobile-ui-reviewer.md](cursor/.cursor/agents/mobile-ui-reviewer.md) | `.cursor/agents/mobile-ui-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/mobile-ui-reviewer.md](gemini-cli/.gemini/agents/mobile-ui-reviewer.md) | `.gemini/agents/mobile-ui-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/mobile-ui-reviewer.agent.md](copilot/.github/agents/mobile-ui-reviewer.agent.md) | `.github/agents/mobile-ui-reviewer.agent.md` |

## What it does

A screen that looks fine in a simulator can fail on a real phone: a button under the home indicator, a tap target the size of a fingernail, a list with no empty state. This subagent reads your screen code and finds those gaps.

It checks layout against iOS and Android guidance, looks for every state a screen can be in, and reports each problem with the file and a concrete fix. It does not change code.

## Use it when

- A new screen is ready and needs a review before design sign-off
- Users report taps that miss or content hidden by the notch
- You ship on both platforms and want to catch convention mismatches
- A list or form screen has only been tested with perfect data

## What it can access

- Reads your screen and component files
- Runs read-only searches and git diff

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mobile-ui-reviewer/

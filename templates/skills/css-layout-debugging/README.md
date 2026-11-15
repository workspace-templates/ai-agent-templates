# CSS Layout Debugging

**Skill** · Frontend · css

Diagnoses broken flexbox and grid layouts by inspecting the box model and computed styles, then fixes the root rule instead of piling on overrides.

## Install

```bash
npx workspacetemplates add css-layout-debugging
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/css-layout-debugging/SKILL.md](claude-code/.claude/skills/css-layout-debugging/SKILL.md) | `.claude/skills/css-layout-debugging/SKILL.md` |
| Codex | [codex/.agents/skills/css-layout-debugging/SKILL.md](codex/.agents/skills/css-layout-debugging/SKILL.md) | `.agents/skills/css-layout-debugging/SKILL.md` |
| Cursor | [cursor/.cursor/skills/css-layout-debugging/SKILL.md](cursor/.cursor/skills/css-layout-debugging/SKILL.md) | `.cursor/skills/css-layout-debugging/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/css-layout-debugging/SKILL.md](gemini-cli/.gemini/skills/css-layout-debugging/SKILL.md) | `.gemini/skills/css-layout-debugging/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/css-layout-debugging/SKILL.md](copilot/.github/skills/css-layout-debugging/SKILL.md) | `.github/skills/css-layout-debugging/SKILL.md` |

## What it does

Most layout bugs come from one wrong rule far from the symptom: a min-width that blocks shrinking, a margin that collapses, a percentage height with no parent height. This skill sends the agent to find that rule rather than add another override.

It reproduces the problem at the failing width, reads the computed values of the element and each ancestor, names the cause, and makes the smallest change that removes it.

## Use it when

- A flex child overflows or refuses to shrink
- A grid item lands in the wrong cell or leaves a gap
- An element is the wrong height and you tried five fixes
- Sticky positioning, scrolling or centering silently does nothing

## What it can access

- Reads HTML, CSS and component files
- Edits stylesheets
- May open your dev server in a browser

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/css-layout-debugging/

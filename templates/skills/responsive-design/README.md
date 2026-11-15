# Responsive Design

**Skill** · Frontend · css

Makes a page work from 320px up using fluid type, container queries and breakpoints chosen by the content and tested at real widths.

## Install

```bash
npx workspacetemplates add responsive-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/responsive-design/SKILL.md](claude-code/.claude/skills/responsive-design/SKILL.md) | `.claude/skills/responsive-design/SKILL.md` |
| Codex | [codex/.agents/skills/responsive-design/SKILL.md](codex/.agents/skills/responsive-design/SKILL.md) | `.agents/skills/responsive-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/responsive-design/SKILL.md](cursor/.cursor/skills/responsive-design/SKILL.md) | `.cursor/skills/responsive-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/responsive-design/SKILL.md](gemini-cli/.gemini/skills/responsive-design/SKILL.md) | `.gemini/skills/responsive-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/responsive-design/SKILL.md](copilot/.github/skills/responsive-design/SKILL.md) | `.github/skills/responsive-design/SKILL.md` |

## What it does

Pages built at one desktop width then squeezed down tend to break at 320px, 768px and everything between. This skill has the agent build mobile first and let the content choose the breakpoints.

Typography and spacing scale fluidly, components adapt to their container instead of the window, and touch targets and zoom behavior are checked, not assumed.

## Use it when

- A page overflows horizontally on a phone
- Cards or sidebars look wrong at in-between widths such as 700px
- You want type that scales without a media query per size
- A component is reused in a narrow column and a wide one

## What it can access

- Reads and edits CSS and markup
- May open your dev server to test widths

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/responsive-design/

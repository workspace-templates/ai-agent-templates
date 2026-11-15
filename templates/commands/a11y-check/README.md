# A11y Check

**Command** · Frontend

Audits a page or component for accessibility problems against WCAG 2.2 and lists fixes ordered by impact on real users.

## Install

```bash
npx workspacetemplates add a11y-check
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/a11y-check.md](claude-code/.claude/commands/a11y-check.md) | `.claude/commands/a11y-check.md` |
| Codex | [codex/home/.codex/prompts/a11y-check.md](codex/home/.codex/prompts/a11y-check.md) | `~/.codex/prompts/a11y-check.md` |
| Cursor | [cursor/.cursor/skills/a11y-check/SKILL.md](cursor/.cursor/skills/a11y-check/SKILL.md) | `.cursor/skills/a11y-check/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/a11y-check.toml](gemini-cli/.gemini/commands/a11y-check.toml) | `.gemini/commands/a11y-check.toml` |
| GitHub Copilot | [copilot/.github/skills/a11y-check/SKILL.md](copilot/.github/skills/a11y-check/SKILL.md) | `.github/skills/a11y-check/SKILL.md` |

## What it does

Accessibility bugs hide in markup that looks fine: a button that is really a div, an input with no label, a color pair that fails contrast. This command reads the code for those patterns and checks the keyboard and screen reader path.

Findings are ranked by how much they block people, each with the file, the rule it breaks and a concrete fix. If a dev server and an audit tool are available it runs them too; it never edits files unasked.

## Use it when

- Before shipping a new form, modal or navigation menu
- A customer reports the page cannot be used with a keyboard
- You need to meet WCAG 2.2 AA for a contract
- Reviewing a pull request that adds interactive components

## What it can access

- Reads components, templates and styles
- May run an installed audit tool against a local server
- Edits files only after you choose fixes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/a11y-check/

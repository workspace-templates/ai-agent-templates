# Core Web Vitals Optimization

**Skill** · Frontend

Improves LCP, INP and CLS with measured fixes to images, fonts, scripts and layout, and reports before and after numbers for each change.

## Install

```bash
npx workspacetemplates add core-web-vitals-optimization
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/core-web-vitals-optimization/SKILL.md](claude-code/.claude/skills/core-web-vitals-optimization/SKILL.md) | `.claude/skills/core-web-vitals-optimization/SKILL.md` |
| Codex | [codex/.agents/skills/core-web-vitals-optimization/SKILL.md](codex/.agents/skills/core-web-vitals-optimization/SKILL.md) | `.agents/skills/core-web-vitals-optimization/SKILL.md` |
| Cursor | [cursor/.cursor/skills/core-web-vitals-optimization/SKILL.md](cursor/.cursor/skills/core-web-vitals-optimization/SKILL.md) | `.cursor/skills/core-web-vitals-optimization/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/core-web-vitals-optimization/SKILL.md](gemini-cli/.gemini/skills/core-web-vitals-optimization/SKILL.md) | `.gemini/skills/core-web-vitals-optimization/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/core-web-vitals-optimization/SKILL.md](copilot/.github/skills/core-web-vitals-optimization/SKILL.md) | `.github/skills/core-web-vitals-optimization/SKILL.md` |

## What it does

Performance advice without measurements is guesswork, and agents are happy to preload everything and lazy-load the hero image. This skill starts from a real Lighthouse or field number, finds the single element or task behind it, and fixes that.

Each change is re-measured. A fix that does not move the metric is reverted rather than left in as clutter.

## Use it when

- Search Console flags pages as poor or needs improvement
- The hero image appears late on a slow connection
- Clicks and taps feel laggy on a busy page
- Content jumps while the page loads

## What it can access

- Reads templates, styles and build config
- Runs Lighthouse and your build; edits images, CSS and HTML head tags

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/core-web-vitals-optimization/

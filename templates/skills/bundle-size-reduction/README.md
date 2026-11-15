# Bundle Size Reduction

**Skill** · Frontend · javascript

Analyzes a JavaScript bundle, splits code and replaces heavy dependencies, and reports byte counts before and after every change it makes.

## Install

```bash
npx workspacetemplates add bundle-size-reduction
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/bundle-size-reduction/SKILL.md](claude-code/.claude/skills/bundle-size-reduction/SKILL.md) | `.claude/skills/bundle-size-reduction/SKILL.md` |
| Codex | [codex/.agents/skills/bundle-size-reduction/SKILL.md](codex/.agents/skills/bundle-size-reduction/SKILL.md) | `.agents/skills/bundle-size-reduction/SKILL.md` |
| Cursor | [cursor/.cursor/skills/bundle-size-reduction/SKILL.md](cursor/.cursor/skills/bundle-size-reduction/SKILL.md) | `.cursor/skills/bundle-size-reduction/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/bundle-size-reduction/SKILL.md](gemini-cli/.gemini/skills/bundle-size-reduction/SKILL.md) | `.gemini/skills/bundle-size-reduction/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/bundle-size-reduction/SKILL.md](copilot/.github/skills/bundle-size-reduction/SKILL.md) | `.github/skills/bundle-size-reduction/SKILL.md` |

## What it does

Bundles grow one import at a time until a date library is bigger than the app. This skill opens the bundle analyzer first, ranks what is actually in the output, and attacks the largest items in order instead of tweaking config at random.

It prefers removing code over compressing it, and it stops when the remaining gains are smaller than the effort they cost.

## Use it when

- The main chunk is over 250 KB gzipped
- A new dependency made the build jump in size
- First load on mobile is slow and the JavaScript is the cause
- You want to know what is really inside the bundle

## What it can access

- Reads package files and source
- Runs your production build and the bundle analyzer; edits imports and dependencies

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/bundle-size-reduction/

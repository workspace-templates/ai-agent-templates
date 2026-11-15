# Optimize Images

**Command** · Frontend

Scans the project for heavy images and outdated formats, then proposes sizes, conversions and markup changes before touching any file.

## Install

```bash
npx workspacetemplates add optimize-images
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/optimize-images.md](claude-code/.claude/commands/optimize-images.md) | `.claude/commands/optimize-images.md` |
| Codex | [codex/home/.codex/prompts/optimize-images.md](codex/home/.codex/prompts/optimize-images.md) | `~/.codex/prompts/optimize-images.md` |
| Cursor | [cursor/.cursor/skills/optimize-images/SKILL.md](cursor/.cursor/skills/optimize-images/SKILL.md) | `.cursor/skills/optimize-images/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/optimize-images.toml](gemini-cli/.gemini/commands/optimize-images.toml) | `.gemini/commands/optimize-images.toml` |
| GitHub Copilot | [copilot/.github/skills/optimize-images/SKILL.md](copilot/.github/skills/optimize-images/SKILL.md) | `.github/skills/optimize-images/SKILL.md` |

## What it does

Images are usually the largest part of a page, and the common mistakes are easy to spot: a 4000 pixel photo shown at 400, PNG used for photographs, no width and height set. This command measures what is in the project and builds a list of savings.

It proposes conversions and the markup changes that go with them, and it never overwrites an original without your approval.

## Use it when

- Lighthouse flags oversized or unoptimized images
- The repository has grown because of photos committed over the years
- You are moving to WebP or AVIF and need a plan
- A page feels slow on mobile data

## What it can access

- Reads image files and the code that references them
- Writes converted images only after you confirm

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/optimize-images/

# Mobile App Release

**Skill** · Mobile

Prepares an iOS or Android store release: version and build bump, signing check, changelog, screenshots list and review notes, without uploading anything.

## Install

```bash
npx workspacetemplates add mobile-app-release
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/mobile-app-release/SKILL.md](claude-code/.claude/skills/mobile-app-release/SKILL.md) | `.claude/skills/mobile-app-release/SKILL.md` |
| Codex | [codex/.agents/skills/mobile-app-release/SKILL.md](codex/.agents/skills/mobile-app-release/SKILL.md) | `.agents/skills/mobile-app-release/SKILL.md` |
| Cursor | [cursor/.cursor/skills/mobile-app-release/SKILL.md](cursor/.cursor/skills/mobile-app-release/SKILL.md) | `.cursor/skills/mobile-app-release/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/mobile-app-release/SKILL.md](gemini-cli/.gemini/skills/mobile-app-release/SKILL.md) | `.gemini/skills/mobile-app-release/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/mobile-app-release/SKILL.md](copilot/.github/skills/mobile-app-release/SKILL.md) | `.github/skills/mobile-app-release/SKILL.md` |

## What it does

Store rejections and last-minute surprises usually come from small things nobody checked: a build number reused, a debug flag left on, a permission with no usage string. This skill walks the agent through a release checklist against the actual project files.

It prepares everything and stops before any upload or submission. You get a ready list of what changed, what is missing and what to paste into the store forms.

## Use it when

- You are about to cut a release build for TestFlight or Play internal testing
- A store review was rejected and you need to check the usual causes
- You want release notes written from the commits since the last tag
- You are handing a release to a teammate and need a clear checklist

## What it can access

- Reads project files, manifests and git history
- Runs local release builds and read-only git commands
- Edits version numbers only after you confirm

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mobile-app-release/

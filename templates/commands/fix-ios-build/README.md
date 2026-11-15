# Fix iOS Build

**Command** · Mobile · swift

Diagnoses an Xcode build or code signing failure from the error output and applies the smallest fix that makes it build.

## Install

```bash
npx workspacetemplates add fix-ios-build
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/fix-ios-build.md](claude-code/.claude/commands/fix-ios-build.md) | `.claude/commands/fix-ios-build.md` |
| Codex | [codex/home/.codex/prompts/fix-ios-build.md](codex/home/.codex/prompts/fix-ios-build.md) | `~/.codex/prompts/fix-ios-build.md` |
| Cursor | [cursor/.cursor/skills/fix-ios-build/SKILL.md](cursor/.cursor/skills/fix-ios-build/SKILL.md) | `.cursor/skills/fix-ios-build/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/fix-ios-build.toml](gemini-cli/.gemini/commands/fix-ios-build.toml) | `.gemini/commands/fix-ios-build.toml` |
| GitHub Copilot | [copilot/.github/skills/fix-ios-build/SKILL.md](copilot/.github/skills/fix-ios-build/SKILL.md) | `.github/skills/fix-ios-build/SKILL.md` |

## What it does

Xcode errors are long and the real cause is often buried near the top. This command runs the build from the terminal, reads the first genuine error and separates compiler issues, dependency problems and signing mismatches.

It fixes source and project settings that are safely reversible, and asks before touching certificates, profiles or anything in your keychain.

## Use it when

- Archive or CI build fails with a signing or provisioning error
- A Swift Package or CocoaPods update broke the build
- The app builds in Xcode but fails with xcodebuild
- You see a wall of linker errors and need the root cause

## What it can access

- Runs xcodebuild and read-only security commands
- Edits Swift sources and project settings after explaining the change

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/fix-ios-build/

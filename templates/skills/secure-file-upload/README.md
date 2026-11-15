# Secure File Upload

**Skill** · Security

Hardens upload endpoints by checking type, size, name and storage location, blocking path traversal, executable content and image bombs.

## Install

```bash
npx workspacetemplates add secure-file-upload
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/secure-file-upload/SKILL.md](claude-code/.claude/skills/secure-file-upload/SKILL.md) | `.claude/skills/secure-file-upload/SKILL.md` |
| Codex | [codex/.agents/skills/secure-file-upload/SKILL.md](codex/.agents/skills/secure-file-upload/SKILL.md) | `.agents/skills/secure-file-upload/SKILL.md` |
| Cursor | [cursor/.cursor/skills/secure-file-upload/SKILL.md](cursor/.cursor/skills/secure-file-upload/SKILL.md) | `.cursor/skills/secure-file-upload/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/secure-file-upload/SKILL.md](gemini-cli/.gemini/skills/secure-file-upload/SKILL.md) | `.gemini/skills/secure-file-upload/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/secure-file-upload/SKILL.md](copilot/.github/skills/secure-file-upload/SKILL.md) | `.github/skills/secure-file-upload/SKILL.md` |

## What it does

An upload endpoint accepts bytes from strangers and writes them to your disk. Done carelessly, it becomes remote code execution, stored XSS, or an easy way to fill the volume. This skill reviews each step from the request to the stored file.

It replaces trust in the client with checks on the server: what the content really is, how big it can be, where it is stored and how it is served back. The result is a short, enforced policy rather than a list of hopes.

## Use it when

- You are adding avatars, attachments or document import
- A file uploaded under a trusted name ended up served as HTML
- Disk usage or memory spikes during uploads
- A review found filenames used directly in paths

## What it can access

- Reads and edits upload handlers and storage code
- Runs your tests with sample hostile files you can inspect first

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/secure-file-upload/

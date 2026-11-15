# Next.js Data Fetching

**Skill** · Frontend · nextjs, react

Chooses server components, caching and revalidation for each data need in the Next.js App Router, and fixes slow or stale pages.

## Install

```bash
npx workspacetemplates add nextjs-data-fetching
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/nextjs-data-fetching/SKILL.md](claude-code/.claude/skills/nextjs-data-fetching/SKILL.md) | `.claude/skills/nextjs-data-fetching/SKILL.md` |
| Codex | [codex/.agents/skills/nextjs-data-fetching/SKILL.md](codex/.agents/skills/nextjs-data-fetching/SKILL.md) | `.agents/skills/nextjs-data-fetching/SKILL.md` |
| Cursor | [cursor/.cursor/skills/nextjs-data-fetching/SKILL.md](cursor/.cursor/skills/nextjs-data-fetching/SKILL.md) | `.cursor/skills/nextjs-data-fetching/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/nextjs-data-fetching/SKILL.md](gemini-cli/.gemini/skills/nextjs-data-fetching/SKILL.md) | `.gemini/skills/nextjs-data-fetching/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/nextjs-data-fetching/SKILL.md](copilot/.github/skills/nextjs-data-fetching/SKILL.md) | `.github/skills/nextjs-data-fetching/SKILL.md` |

## What it does

In the App Router the same fetch can be static, cached, revalidated or dynamic depending on a few lines, and the defaults have changed between versions. This skill makes the agent decide deliberately for each piece of data.

It fetches on the server by default, removes waterfalls, streams slow parts behind Suspense, and ties every cache to a clear way of invalidating it.

## Use it when

- A page is slow because requests run one after another
- Users see stale data after a mutation
- You are moving a Pages Router app to the App Router
- You cannot tell why a route is static or dynamic

## What it can access

- Reads and edits Next.js source files
- Runs your build and dev server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/nextjs-data-fetching/

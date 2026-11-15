# Review Comment Resolution

**Skill** · Git and releases

Works through reviewer comments on a pull request: applies the fixes that are right, pushes back on the ones that are not and drafts a reply to every thread.

## Install

```bash
npx workspacetemplates add review-comment-resolution
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/review-comment-resolution/SKILL.md](claude-code/.claude/skills/review-comment-resolution/SKILL.md) | `.claude/skills/review-comment-resolution/SKILL.md` |
| Codex | [codex/.agents/skills/review-comment-resolution/SKILL.md](codex/.agents/skills/review-comment-resolution/SKILL.md) | `.agents/skills/review-comment-resolution/SKILL.md` |
| Cursor | [cursor/.cursor/skills/review-comment-resolution/SKILL.md](cursor/.cursor/skills/review-comment-resolution/SKILL.md) | `.cursor/skills/review-comment-resolution/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/review-comment-resolution/SKILL.md](gemini-cli/.gemini/skills/review-comment-resolution/SKILL.md) | `.gemini/skills/review-comment-resolution/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/review-comment-resolution/SKILL.md](copilot/.github/skills/review-comment-resolution/SKILL.md) | `.github/skills/review-comment-resolution/SKILL.md` |

## What it does

Addressing review comments is mostly bookkeeping, and bookkeeping is where comments get missed. This skill pulls every open thread, sorts it, makes the changes and gives you one reply per thread, so nothing is left hanging.

It also treats a comment as an opinion, not an order. When a suggestion would introduce a bug or contradicts an earlier decision, it says so with evidence instead of applying it.

## Use it when

- A pull request came back with fifteen comments
- Reviewers disagree with each other and you need to reconcile them
- You want to be sure no thread was left unanswered
- A comment is unclear and you need a polite way to ask

## What it can access

- Reads pull request threads and diffs through the GitHub CLI
- Edits files and creates local commits; runs your tests and linter

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/review-comment-resolution/

# Fixup Commits

**Command** · Git and releases

Matches staged review fixes to the commits they belong to, creates fixup commits and autosquashes once you approve.

## Install

```bash
npx workspacetemplates add fixup-commits
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/fixup-commits.md](claude-code/.claude/commands/fixup-commits.md) | `.claude/commands/fixup-commits.md` |
| Codex | [codex/home/.codex/prompts/fixup-commits.md](codex/home/.codex/prompts/fixup-commits.md) | `~/.codex/prompts/fixup-commits.md` |
| Cursor | [cursor/.cursor/skills/fixup-commits/SKILL.md](cursor/.cursor/skills/fixup-commits/SKILL.md) | `.cursor/skills/fixup-commits/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/fixup-commits.toml](gemini-cli/.gemini/commands/fixup-commits.toml) | `.gemini/commands/fixup-commits.toml` |
| GitHub Copilot | [copilot/.github/skills/fixup-commits/SKILL.md](copilot/.github/skills/fixup-commits/SKILL.md) | `.github/skills/fixup-commits/SKILL.md` |

## What it does

Review feedback usually lands as a pile of "address comments" commits that nobody wants in main. This command looks at your staged hunks, finds the earlier commit on your branch that last touched the same lines and prepares a fixup for each.

Nothing is rewritten until you read the plan. The final autosquash happens only after a yes, and it refuses to touch commits that were already pushed to a shared branch.

## Use it when

- After a reviewer asks for small changes spread over several commits
- Before marking a pull request ready for merge
- When your branch history should stay one logical commit per step
- When you fixed a typo or bug that belongs to a commit three steps back

## What it can access

- Reads the staged diff, blame data and branch log
- Creates fixup commits and runs a rebase only after you confirm

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/fixup-commits/

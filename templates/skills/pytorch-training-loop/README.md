# PyTorch Training Loop

**Skill** · Data and AI · python, pytorch

Writes a correct PyTorch training loop with seeding, mixed precision, clipping and resumable checkpoints. Use it to start or fix a training script.

## Install

```bash
npx workspacetemplates add pytorch-training-loop
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/pytorch-training-loop/SKILL.md](claude-code/.claude/skills/pytorch-training-loop/SKILL.md) | `.claude/skills/pytorch-training-loop/SKILL.md` |
| Codex | [codex/.agents/skills/pytorch-training-loop/SKILL.md](codex/.agents/skills/pytorch-training-loop/SKILL.md) | `.agents/skills/pytorch-training-loop/SKILL.md` |
| Cursor | [cursor/.cursor/skills/pytorch-training-loop/SKILL.md](cursor/.cursor/skills/pytorch-training-loop/SKILL.md) | `.cursor/skills/pytorch-training-loop/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/pytorch-training-loop/SKILL.md](gemini-cli/.gemini/skills/pytorch-training-loop/SKILL.md) | `.gemini/skills/pytorch-training-loop/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/pytorch-training-loop/SKILL.md](copilot/.github/skills/pytorch-training-loop/SKILL.md) | `.github/skills/pytorch-training-loop/SKILL.md` |

## What it does

Training loops fail in small, silent ways: eval mode left off, gradients accumulating, a seed that only covers half the randomness. This skill writes the loop in the order PyTorch expects and adds the pieces that make a run reproducible and recoverable.

The agent first overfits a handful of batches to prove the loop learns, and only then scales it up.

## Use it when

- You are writing a new training script and want the boring parts right
- Loss does not go down and you cannot tell if it is the model or the loop
- A long run crashed and you had nothing to resume from
- You want to add mixed precision without breaking numerical stability

## What it can access

- Reads your model and dataset code
- Writes a training script and checkpoint folder
- Runs short training smoke tests on your machine

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pytorch-training-loop/

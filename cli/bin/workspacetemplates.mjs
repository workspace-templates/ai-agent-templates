#!/usr/bin/env node
// workspacetemplates: install AI templates (skills, subagents, commands, MCP setups, hooks, project
// rules) from workspacetemplates.com/ai into your project, as the files your coding agent expects.
//
//   npx workspacetemplates add <name> [--tool claude-code|codex|cursor|gemini-cli|copilot] [--dry] [--force]
//   npx workspacetemplates list [words]
//   npx workspacetemplates info <name>
//
// No dependencies, no telemetry. It only fetches public JSON from the site and writes text files:
// inside the current folder, or in your home folder for the few files a tool keeps there (~/.codex).
// It never runs anything it downloads.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { createInterface } from 'node:readline/promises';

const BASE = (process.env.WORKSPACETEMPLATES_URL ?? 'https://workspacetemplates.com').replace(/\/$/, '');
const TOOLS = {
  'claude-code': { name: 'Claude Code', signs: ['.claude', 'CLAUDE.md', '.mcp.json'] },
  codex: { name: 'Codex', signs: ['.codex', '.agents', 'AGENTS.md'] },
  cursor: { name: 'Cursor', signs: ['.cursor', '.cursorrules'] },
  'gemini-cli': { name: 'Gemini CLI', signs: ['.gemini', 'GEMINI.md'] },
  copilot: { name: 'GitHub Copilot', signs: ['.github/copilot-instructions.md', '.github/skills', '.github/agents', '.vscode/mcp.json'] },
};
const ALIASES = { claude: 'claude-code', gemini: 'gemini-cli', 'github-copilot': 'copilot', vscode: 'copilot' };

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const option = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const valued = new Set(['--tool']);
const words = args.filter((a, i) => !a.startsWith('--') && !valued.has(args[i - 1]));
const [command, ...rest] = words;

const paint = (code) => (text) => (process.stdout.isTTY ? `\x1b[${code}m${text}\x1b[0m` : text);
const bold = paint(1);
const dim = paint(2);
const green = paint(32);
const yellow = paint(33);

function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

async function getJson(path) {
  let res;
  try {
    res = await fetch(`${BASE}${path}`, { headers: { 'user-agent': 'workspacetemplates-cli' } });
  } catch (error) {
    fail(`Could not reach ${BASE} (${error.message}).`);
  }
  if (res.status === 404) return undefined;
  if (!res.ok) fail(`${BASE}${path} answered ${res.status}.`);
  return res.json();
}

async function pickTool(available) {
  const asked = option('tool');
  if (asked) {
    const tool = ALIASES[asked] ?? asked;
    if (!TOOLS[tool]) fail(`Unknown tool "${asked}". Use one of: ${Object.keys(TOOLS).join(', ')}.`);
    if (!available.includes(tool)) fail(`This template has no files for ${TOOLS[tool].name}. It works in: ${available.map((t) => TOOLS[t].name).join(', ')}.`);
    return tool;
  }
  const found = available.filter((tool) => TOOLS[tool].signs.some((sign) => existsSync(join(process.cwd(), sign))));
  if (found.length === 1) return found[0];
  const choices = found.length ? found : available;
  if (!process.stdin.isTTY) return choices[0];
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  console.log(`Which tool? ${choices.map((t, i) => `${i + 1}) ${TOOLS[t].name}`).join('  ')}`);
  const answer = await rl.question(`Number [1]: `);
  rl.close();
  return choices[(Number(answer) || 1) - 1] ?? choices[0];
}

/** Where a file goes on disk. Only the current folder, or the home folder for "~/" paths. */
function target(path) {
  const home = path.startsWith('~/');
  const root = home ? homedir() : process.cwd();
  const full = resolve(root, home ? path.slice(2) : path);
  const inside = relative(root, full);
  if (inside.startsWith('..') || inside.includes(`..${sep}`) || resolve(full) === resolve(root)) fail(`Refusing to write outside ${root}: ${path}`);
  return full;
}

function mergeJson(into, from) {
  for (const [key, value] of Object.entries(from)) {
    if (Array.isArray(value) && Array.isArray(into[key])) {
      for (const entry of value) if (!into[key].some((have) => JSON.stringify(have) === JSON.stringify(entry))) into[key].push(entry);
    } else if (value && typeof value === 'object' && !Array.isArray(value) && into[key] && typeof into[key] === 'object') {
      mergeJson(into[key], value);
    } else {
      into[key] = value;
    }
  }
  return into;
}

function write(file, dry, force) {
  const full = target(file.path);
  const exists = existsSync(full);
  let content = file.content;
  let action = 'created';
  if (exists && file.merge === 'json') {
    let current;
    try {
      current = JSON.parse(readFileSync(full, 'utf8'));
    } catch {
      fail(`${file.path} exists but is not valid JSON (comments?). Add this by hand:\n${file.content}`);
    }
    content = `${JSON.stringify(mergeJson(current, JSON.parse(file.content)), null, 2)}\n`;
    action = 'merged into';
  } else if (exists && file.merge === 'append') {
    const current = readFileSync(full, 'utf8');
    if (current.includes(file.content.trim())) return console.log(`  ${dim('unchanged')} ${file.path}`);
    content = `${current.replace(/\s*$/, '')}\n\n${file.content}`;
    action = 'added to';
  } else if (exists && !force) {
    if (readFileSync(full, 'utf8') === content) return console.log(`  ${dim('unchanged')} ${file.path}`);
    fail(`${file.path} already exists. Use --force to replace it.`);
  } else if (exists) {
    action = 'replaced';
  }
  if (!dry) {
    mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, content);
  }
  console.log(`  ${dry ? yellow('would be ' + action) : green(action)} ${file.path}`);
}

async function add(slug) {
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) fail('Usage: npx workspacetemplates add <name> [--tool <tool>]');
  const item = await getJson(`/ai/r/${slug}.json`);
  if (!item) fail(`No template called "${slug}". Try: npx workspacetemplates list ${slug.split('-')[0]}`);
  const tool = await pickTool(Object.keys(item.tools));
  const dry = flag('dry');
  console.log(`${bold(item.title)} ${dim(`(${item.kind}) for ${TOOLS[tool].name}`)}`);
  for (const file of item.tools[tool]) write(file, dry, flag('force'));
  console.log(dim(`  can access: ${item.access.join('; ')}`));
  if (item.env?.length) console.log(yellow(`  set these environment variables: ${[...new Set(item.env)].join(', ')}`));
  console.log(dim(`  ${BASE}/ai/${slug}/`));
}

async function list(query) {
  const items = await getJson('/ai/r/index.json');
  const terms = query.map((w) => w.toLowerCase());
  const hits = items.filter((i) => terms.every((t) => `${i.slug} ${i.title} ${i.kind} ${i.category} ${i.stacks.join(' ')} ${i.summary}`.toLowerCase().includes(t)));
  for (const i of hits.slice(0, 40)) console.log(`${bold(i.slug.padEnd(34))} ${dim(i.kind.padEnd(8))} ${i.summary.slice(0, 90)}`);
  console.log(dim(`${hits.length} of ${items.length} templates${hits.length > 40 ? ' (showing 40; add words to narrow)' : ''}. Install: npx workspacetemplates add <name>`));
}

async function info(slug) {
  const item = slug && (await getJson(`/ai/r/${slug}.json`));
  if (!item) fail(`No template called "${slug ?? ''}".`);
  console.log(`${bold(item.title)} ${dim(`(${item.kind})`)}\n${item.summary}\n`);
  for (const [tool, files] of Object.entries(item.tools)) console.log(`${TOOLS[tool].name.padEnd(15)} ${files.map((f) => f.path).join(', ')}`);
  console.log(dim(`\ncan access: ${item.access.join('; ')}\n${BASE}/ai/${slug}/`));
}

if (command === 'add') await add(rest[0]);
else if (command === 'list' || command === 'search') await list(rest);
else if (command === 'info') await info(rest[0]);
else {
  console.log(`workspacetemplates: AI templates for coding agents, from ${BASE}/ai/

  npx workspacetemplates add <name> [--tool claude-code|codex|cursor|gemini-cli|copilot] [--dry] [--force]
  npx workspacetemplates list [words]
  npx workspacetemplates info <name>

It writes plain text files into this folder (and ~/.codex for Codex prompts and MCP). Nothing else.`);
  process.exit(command && command !== 'help' && !flag('help') ? 1 : 0);
}

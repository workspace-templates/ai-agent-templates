// Checks every templates/<type>/<name>/item.json: valid JSON, the name matches its folder, required
// fields are present, and no hidden characters or secret-looking strings. The website runs a
// stricter check before publishing.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const problems = [];
const required = ['slug', 'title', 'kind', 'category', 'summary', 'description', 'topics', 'useWhen', 'example', 'faq', 'access'];
const hidden = /[\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\uFEFF\u00AD]/;
const secret = /(AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{36}|xox[baprs]-[A-Za-z0-9-]{20,}|sk-(?:live|proj|ant)-[A-Za-z0-9_-]{20,})/;
let count = 0;
for (const type of readdirSync('templates')) {
  for (const name of readdirSync(join('templates', type))) {
    const file = join('templates', type, name, 'item.json');
    let text;
    let item;
    try {
      text = readFileSync(file, 'utf8');
      item = JSON.parse(text);
    } catch (error) {
      problems.push(`${file}: ${error.message}`);
      continue;
    }
    count++;
    if (item.slug !== name) problems.push(`${file}: slug must be "${name}"`);
    for (const key of required) if (item[key] === undefined) problems.push(`${file}: missing ${key}`);
    if (hidden.test(text)) problems.push(`${file}: hidden characters`);
    if (secret.test(text)) problems.push(`${file}: looks like it contains a secret`);
  }
}
console.log(`Checked ${count} templates.`);
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}

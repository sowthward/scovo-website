// After a deploy: confirms that each live domain serves the robots.txt from the repository
// and that AI crawlers are not blocked by Cloudflare. See DEPLOY.md, "AI crawlers".
//
//   npm run build:it && node scripts/check-live.mjs https://loscovo.it dist
//   npm run build:en && node scripts/check-live.mjs https://scovo.io dist
import { readFileSync } from 'node:fs';

const [domain, dist = 'dist'] = process.argv.slice(2);
if (!domain) {
  console.error('Usage: node scripts/check-live.mjs https://loscovo.it [dist-folder]');
  process.exit(2);
}
const expected = readFileSync(`${dist}/robots.txt`, 'utf8').trim();
const agents = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];
let failed = false;
const fail = (msg) => { failed = true; console.error('FAIL  ' + msg); };

const live = await fetch(`${domain}/robots.txt`).then((r) => r.text());
if (live.trim() === expected) console.log('ok    robots.txt is the one from the repository');
else fail(`robots.txt differs from ${dist}/robots.txt. Cloudflare may be managing it. Live file:\n${live}`);
if (/Disallow:\s*\/\s*$/m.test(live)) fail('robots.txt contains "Disallow: /"');

for (const agent of agents) {
  for (const path of ['/', '/robots.txt', '/llms.txt']) {
    const res = await fetch(domain + path, { headers: { 'User-Agent': `Mozilla/5.0 (compatible; ${agent}/1.0)` }, redirect: 'manual' });
    if (res.status === 200) console.log(`ok    ${agent} ${path} 200`);
    else fail(`${agent} ${path} answered ${res.status}. An AI-bot block may be switched on.`);
  }
}
process.exit(failed ? 1 : 0);

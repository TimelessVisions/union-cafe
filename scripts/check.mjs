import { readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
const expected = ['index.html','public/favicon.svg','public/assets/index-CGjPMKhG.js','public/assets/index-OVsnhrqH.css'];
for (const path of expected) { const info = await stat(path); assert(info.size > 100, path + ' missing/empty'); }
const html = await readFile('index.html','utf8');
const js = await readFile('public/assets/index-CGjPMKhG.js','utf8');
assert(html.includes('/assets/index-CGjPMKhG.js'));
assert(html.includes('/assets/index-OVsnhrqH.css'));
assert(html.includes('noindex,nofollow'));
assert(js.includes('UNION'));
assert(js.includes('union-cafe-31ppw27i8-on-point100.vercel.app/images/') || js.includes('/images/'));
console.log('Snapshot structural checks pass. NOT a browser test or proof of original source recovery.');

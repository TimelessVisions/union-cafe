import { mkdir, readFile, writeFile } from 'node:fs/promises';
const base = 'https://union-cafe-31ppw27i8-on-point100.vercel.app/images/';
const names = ['cafe.jpg','coffee.jpg','latte.jpg','pastry.jpg'];
await mkdir('public/images', { recursive: true });
for (const name of names) {
  const response = await fetch(base + name);
  if (!response.ok || !(response.headers.get('content-type') || '').includes('image/')) throw new Error('Unable to retrieve ' + name + ': HTTP ' + response.status);
  await writeFile('public/images/' + name, Buffer.from(await response.arrayBuffer()));
  console.log('Recovered public/images/' + name);
}
const file = 'public/assets/index-CGjPMKhG.js';
const code = await readFile(file,'utf8');
const updated = code.replaceAll(base, '/images/');
await writeFile(file, updated);
console.log('All four illustrative image files localized and bundle asset URLs updated. Review rights before redistributing.');

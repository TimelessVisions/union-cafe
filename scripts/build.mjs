import { mkdir, rm, cp, copyFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true, force: true });
await copyFile('index.html', 'dist/index.html');
console.log('Built dist/ from recovered production snapshot. This is NOT an original source build.');

import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const preview = process.argv[2] === 'dist';
const root = resolve(preview ? 'dist' : 'public');
const home = resolve(preview ? 'dist/index.html' : 'index.html');
const port = Number(process.env.PORT || 5173);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon'};
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = pathname === '/' ? home : resolve(root, '.' + pathname);
    if (pathname !== '/' && file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }
    if (pathname.includes('\\0')) { res.writeHead(400); res.end('Bad request'); return; }
    const s = await stat(file);
    if (!s.isFile()) throw new Error('not a file');
    res.writeHead(200, {'Content-Type':types[extname(file).toLowerCase()] || 'application/octet-stream','Content-Length':s.size,'Cache-Control':'no-store'});
    createReadStream(file).pipe(res);
  } catch {
    res.writeHead(404, {'Content-Type':'text/plain'}); res.end('Not found');
  }
}).listen(port, '0.0.0.0', () => console.log('UNION Cafe recovered snapshot: http://localhost:' + port));

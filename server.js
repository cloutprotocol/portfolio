// dev server — the site is fully static; any static host (GitHub Pages, etc.) works too
const http = require('http');
const { readFile } = require('fs').promises;
const { extname, resolve } = require('path');

const root = process.cwd();
const port = process.env.PORT || 8888;

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.otf': 'font/otf',
  '.woff2': 'font/woff2',
};

http
  .createServer(async (req, res) => {
    const rel = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
    const filePath = resolve(root, `.${rel}`);
    if (!filePath.startsWith(root)) {
      res.statusCode = 403;
      return res.end('Forbidden');
    }
    try {
      const data = await readFile(filePath);
      res.setHeader('Content-Type', mime[extname(filePath)] || 'application/octet-stream');
      return res.end(data);
    } catch {
      res.statusCode = 404;
      return res.end('Not found');
    }
  })
  .listen(port, () => console.log(`http://localhost:${port}`));

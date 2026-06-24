// Copy the canonical web app (kept at the repo root, so the browser/PWA path
// keeps working) into www/, which Capacitor uses as its webDir. Run before
// `cap sync` / `cap copy`. The npm scripts do this for you.
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';

const out = 'www';
const FILES = ['index.html', 'sw.js', 'manifest.json'];
const DIRS  = ['icons', 'textures'];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const f of FILES) {
  if (existsSync(f)) cpSync(f, `${out}/${f}`);
  else console.warn(`! missing ${f}`);
}
for (const d of DIRS) {
  if (existsSync(d)) cpSync(d, `${out}/${d}`, { recursive: true });
}
console.log('web app copied to www/');

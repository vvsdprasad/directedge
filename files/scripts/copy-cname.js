// small script to copy files/CNAME -> dist/CNAME
// - ignores empty lines
// - deduplicates entries and uses the first unique domain
// - writes a single-line CNAME (with trailing newline) to dist/CNAME
// - safe: if source CNAME missing or contains no usable domain, it exits without error
import { promises as fs } from 'fs';
import { join } from 'path';

const root = process.cwd(); // expects to be run from files/
const src = join(root, 'CNAME');
const destDir = join(root, 'dist');
const dest = join(destDir, 'CNAME');

async function main() {
  try {
    await fs.access(src);
  } catch {
    console.log('files/CNAME not present — skipping CNAME copy.');
    return;
  }

  try {
    const raw = await fs.readFile(src, 'utf8');
    // split into lines, trim, remove empty lines
    const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

    if (lines.length === 0) {
      console.log('files/CNAME has no non-empty lines — skipping copy.');
      return;
    }

    // dedupe while preserving order
    const unique = [];
    const seen = new Set();
    for (const l of lines) {
      if (!seen.has(l)) {
        seen.add(l);
        unique.push(l);
      }
    }

    const domain = unique[0];
    if (unique.length > 1) {
      console.warn(`files/CNAME contains multiple distinct entries — using first: "${domain}"`);
    }

    // ensure dest dir exists (should after build)
    await fs.mkdir(destDir, { recursive: true });
    await fs.writeFile(dest, domain + '\n', 'utf8');
    console.log(`Copied CNAME to dist/CNAME: "${domain}"`);
  } catch (err) {
    console.error('Failed to copy CNAME:', err);
    process.exit(1);
  }
}

main();
// small script to copy files/CNAME -> dist/CNAME only if it exists
import { promises as fs } from 'fs';
import { join } from 'path';

const root = process.cwd(); // expect to be run from files/
const src = join(root, 'CNAME');
const destDir = join(root, 'dist');
const dest = join(destDir, 'CNAME');

async function copyCname() {
  try {
    await fs.access(src);
  } catch {
    // CNAME doesn't exist — nothing to do
    console.log('files/CNAME not present — skipping copy.');
    return;
  }

  try {
    // ensure dest dir exists (should after build)
    await fs.mkdir(destDir, { recursive: true });
    await fs.copyFile(src, dest);
    console.log('Copied CNAME to dist/CNAME');
  } catch (err) {
    console.error('Failed to copy CNAME:', err);
    process.exit(1);
  }
}

copyCname();
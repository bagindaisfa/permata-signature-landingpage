#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve(process.cwd(), 'public', 'images');

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png']);

async function* walk(dir) {
  for (const dirent of await fs.readdir(dir, { withFileTypes: true })) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* walk(res);
    } else {
      yield res;
    }
  }
}

async function convertToWebp(file) {
  const ext = path.extname(file).toLowerCase();
  if (!SUPPORTED.has(ext)) return false;
  const out = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  try {
    // Skip if output exists and is newer than input
    const [inStat, outStat] = await Promise.allSettled([fs.stat(file), fs.stat(out)]);
    if (outStat.status === 'fulfilled' && inStat.status === 'fulfilled') {
      if (outStat.value.mtimeMs >= inStat.value.mtimeMs) {
        console.log(`[skip] ${path.relative(process.cwd(), out)} already up-to-date`);
        return false;
      }
    }
  } catch {}

  try {
    await sharp(file)
      .webp({ quality: 80 })
      .toFile(out);
    console.log(`[webp] ${path.relative(process.cwd(), out)}`);
    return true;
  } catch (err) {
    console.error(`[error] Failed converting ${file}:`, err.message);
    return false;
  }
}

async function main() {
  try {
    await fs.access(IMAGES_DIR);
  } catch {
    console.error('Images directory not found:', IMAGES_DIR);
    process.exit(1);
  }

  let converted = 0;
  for await (const file of walk(IMAGES_DIR)) {
    const ok = await convertToWebp(file);
    if (ok) converted++;
  }

  console.log(`Done. Converted ${converted} file(s) to WebP.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

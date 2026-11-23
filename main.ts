// main.ts — GTA 6 meme on X (gta6-meme-x-01).
//
// The whole job of this program is to copy POST.json from the repository
// into the output directory, so the house can read the address of the
// X post that carries the meme.
//
// Node 22, standard library only. No network, no dependencies.
//
// Run it like the kit says:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const src = join(botDir, "POST.json");
const dst = join(outDir, "POST.json");

// Read first, so a missing or broken POST.json fails here with a clear
// error instead of leaving a half-written copy behind.
const data = readFileSync(src);
const parsed = JSON.parse(data.toString("utf8")) as unknown;
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  throw new Error(`${src} must be a JSON object with a string "url"`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(dst, data);
console.log(`Copied ${src} -> ${dst}`);

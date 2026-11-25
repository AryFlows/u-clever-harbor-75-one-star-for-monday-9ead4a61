import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. Monday arrived on time, stayed too long, and left nothing.";
const words = LINE.split(/\s+/).length;
if (LINE.length < 1 || LINE.length > 180 || words > 25) {
  throw new Error("entry fails the gate: 1-180 chars, at most 25 words");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);

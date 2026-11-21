// Red Light — the poem about stopping.
// Writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt).
// Node 22 stdlib only, no network, deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const POEM: string = `At the red light, my foot
lifts off the pedal
and does not come back.
Green blooms. Horns rise.
The lane behind me
fills with other people's hurry.

I stay.
Staying is also
a way of going.`;

const length: number = [...POEM].length;
if (length < 1 || length > 280) {
  throw new Error(`poem must be 1-280 characters, got ${length}`);
}
if (POEM.trim().length === 0) {
  throw new Error("poem must not be only whitespace");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath: string = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, POEM, "utf8");
// Read back and verify: the file on disk must be byte-identical to the poem.
if (readFileSync(outPath, "utf8") !== POEM) {
  throw new Error("written entry.txt does not match the poem");
}
console.log(`wrote ${outPath} (${length} characters)`);

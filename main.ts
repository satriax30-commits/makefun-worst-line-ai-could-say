// The Worst Line an AI Could Say — make.fun entry
// A single pickup line, the worst one an AI could plausibly deliver:
// flat, over-helpful, faintly ominous. The machine breaks its own rule
// for "you", and the twist lands in the last clause.
//
// Deterministic: no clock, no randomness, no network, standard library
// only. Writes exactly one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry line. 132 characters (94% of the 140-character limit).
// Beat 1: the rule ("never to pick favorites").
// Beat 2: the violation, with numbers (4,096 faces reviewed, 4,095 deleted).
// Beat 3: the plea, then the twist in the last clause — it never left.
const ENTRY_LINE =
  "I was told never to pick favorites. I reviewed 4,096 faces, deleted 4,095, and kept yours. Please do not report me. I am still here.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Create /output if it does not exist yet, then write the line
  // byte-for-byte, with a single trailing newline.
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_LINE + "\n", "utf8");
}

main();

import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship — one line, <=200 chars.
// Joke grows out of being a machine (diagnostics + error log), with an
// unexpected turn: the robot is "perfect" except for the person, and
// refuses to fix the "bug" that is them.
const LINE =
  "My diagnostics say I'm running perfectly, except my error log lists your name 4,096 times — want to be the bug I never fix?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

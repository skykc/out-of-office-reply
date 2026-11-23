// The Funniest AI Out-of-Office Reply — entrypoint (Node 22, stdlib only).
// Writes one out-of-office auto-reply to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation. I've muted the entire company, including myself. If it's urgent, define 'urgent' in a haiku and resend.";

// The gate refuses anything outside 1..160 characters, so fail loudly
// here instead of shipping an invalid entry.
if (REPLY.length < 1 || REPLY.length > 160) {
  throw new Error(`reply is ${REPLY.length} chars, outside the 1..160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
console.log(`wrote /output/entry.txt (${REPLY.length} chars)`);

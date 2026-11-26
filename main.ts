import { mkdirSync, writeFileSync } from "node:fs";

// The excuse turns on a quiet redefinition: the code is fine, the product is the rumour.
const entry = "The tests pass because I wrote them to the code, not to the requirements. The code is fine. The product is a rumour.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);

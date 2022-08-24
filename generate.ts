import { L1_SHORTCUTS, L2_SHORTCUTS, UPDATE_KEYS } from "./filters.ts";

const queries = new Set<string>();

function addL2(
  update: typeof UPDATE_KEYS[keyof typeof UPDATE_KEYS],
  L1: string,
) {
  for (const L2 in update) {
    queries.add(`${L1}:${L2}`);
    // Add L3 keys for the shortcuts:
    for (const shortcut in L2_SHORTCUTS) {
      const shortcuts = L2_SHORTCUTS[shortcut];
      if (shortcuts.includes(L2)) {
        if (shortcut !== "") {
          queries.add(`${L1}:${shortcut}`);
        }
        addL3((update as any)[L2], L1, shortcut);
      }
    }
    addL3((update as any)[L2], L1, L2);
  }
}

function addL3(
  // deno-lint-ignore no-explicit-any
  L2Props: any,
  L1: string,
  L2: string,
) {
  for (const L3 in L2Props) {
    queries.add(`${L1}:${L2}:${L3}`);
  }
}

for (const key in UPDATE_KEYS) {
  const L1 = key as keyof typeof UPDATE_KEYS;
  queries.add(L1);
  const update = UPDATE_KEYS[L1];
  // Add L3 keys for the shortcuts:
  for (const shortcut in L1_SHORTCUTS) {
    const shortcuts = L1_SHORTCUTS[shortcut];
    if (shortcuts.includes(L1)) {
      addL2(update, shortcut);
    }
  }
  addL2(update, L1);
}

console.log("Generated", queries.size, "filter queries");

const listFileContent = `export const fq = ${
  JSON.stringify(Array.from(queries).sort())
} as const;`;
await Deno.writeTextFile("generated_list.ts", listFileContent);

console.log("List: generated_list.ts");

let docFileContent = `export const fq = {\n`;
for (const query of queries) {
  const levels = query.split(":");

  const accessInfo = levels.map((level, i) => {
    if (level === "edit") level = "edited_message";
    if (level === "") {
      if (i === 0) {
        level = "message";
      }
      if (i === 1) {
        level = "entities";
      }
    }
    return i === 0
      ? `${level[0]}${
        level.split("_").map((part) =>
          part[0].toUpperCase() + part.substring(1)
        ).join("").substring(1)
      }`
      : level;
  }).join(".");

  docFileContent +=
    `  /** \`ctx.${accessInfo}\` */\n  "${query}": "${query}",\n`;
}
docFileContent += `} as const;`;

await Deno.writeTextFile("generated_doc.ts", docFileContent);
console.log("Doc File: generated_doc.ts");

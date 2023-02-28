import filterQueries from "./mod.ts";
import { L1_SHORTCUTS, L2_SHORTCUTS, UPDATE_KEYS } from "./filter.ts";

interface FQInfo {
  filterQuery: string;
  info: string;
}

const CONTEXT_SHORTCUTS: Record<string, string> = UPDATE_KEYS
  .reduce((prev, current) => {
    return { ...prev, [current]: camelCase(current, "_") };
  }, {});

export function generate() {
  const parsed: FQInfo[] = [];

  for (const filterQuery of filterQueries) {
    const levels = filterQuery.split(":");
    const l1 = L1_SHORTCUTS[levels[0] as keyof typeof L1_SHORTCUTS]
      ? [...L1_SHORTCUTS[levels[0] as keyof typeof L1_SHORTCUTS]]
      : [levels[0]];
    const l2 = L2_SHORTCUTS[levels[1] as keyof typeof L2_SHORTCUTS]
      ? [...L2_SHORTCUTS[levels[1] as keyof typeof L2_SHORTCUTS]]
      : [levels[1]];
    const l3 = levels[2];

    const l1text = code(l1.join("</code> or <code>"));
    const l2text = code(l2.join("</code> or <code>"));

    let info = "";
    // Yes, no formatting, its already a mess, and with formatting, its really messy.
    // deno-fmt-ignore
    if (l1[0] && !l2[0] && !l3) { // message
    info = `\
Filter query for listening for ${l1text} update${s(l1)}. \
It's properties can be accessed from:
<ul>${l1.map((k) => li(code(`ctx.update.${k}`))).join("\n")}</ul>
or from their corresponding shortcuts:
<ul>${l1.map((k) => li(code(`ctx.${CONTEXT_SHORTCUTS[k]}`))).join("\n")}</ul>`
  } else if (l1[0] && l2[0] && !l3) { // message:text
    info = `\
Filter query for listening to ${l1text} updates containing the ${l2text} field${s(l2)}. \
The field or its properties can be accessed like:
<ul>${l1.map((k1) => l2.map((k2) => li(code(`ctx.update.${k1}.${k2}`))).join("\n")).join("\n")}</ul>

or from the shortcuts of update keys like the following:
<ul>${l1.map((k1) => l2.map((k2) => li(code(`ctx.${CONTEXT_SHORTCUTS[k1]}.${k2}`))).join("\n")).join("\n")}</ul>`;
  } else if (l1[0] && l2[0] && l3) { // message:entities:pre
    info = `\
${
  l2text.includes("entities")
    ? `Filter query for listening to ${code(l3)} entity, making sure that at least one entity of ${code(l3)} type exists in the ${l2text} of ${l1text} updates`
    : `Filter query for listening to ${l1text} updates containing ${l2text} properties with the field ${code(l3)}` 
}. These can be accessed like:
<ul>${l1.map((k1) => l2.map((k2) => li(code(`ctx.update.${k1}.${k2}${l2text.includes("entities") ? "" : `.${l3}`}`))).join("\n")).join("\n")}</ul>

Or use the shortcuts for update type:
<ul>${l1.map((k1) => l2.map((k2) => li(code(`ctx.${CONTEXT_SHORTCUTS[k1]}.${k2}${l2text.includes("entities") ? "" : `.${l3}`}`))).join("\n")).join("\n")}</ul>\
${l2text.includes("entities")
? `\n
You can filter out the ${code(l3)} entities by using a filter function on the entities array:

${pre(
`${l1.map((k1) => l2.map((k2) => `const entities = ctx.${CONTEXT_SHORTCUTS[k1]}.${k2};`).join("\n")).join("\n")}
const ${camelCase(l3, "_")}Entities = entities.filter((e) => e.type === "${l3}")`, "ts"
)}`
: ""}`
  } else {
    throw new Error("Check this out, there is an issue with " + filterQuery);
  }

    parsed.push({ filterQuery, info });
  }

  return parsed;
}

function s(arr: unknown[]) {
  return arr.filter(Boolean).length > 1 ? "s" : "";
}

function camelCase(str: string, separator: string) {
  return str[0] +
    str.split(separator)
      .map((w) => w[0].toUpperCase() + w.substring(1))
      .join("").substring(1);
}

function li(item: string) {
  return `<li>${item}</li>`;
}

function code(str: string) {
  return `<code>${str}</code>`;
}

function pre(str: string, lang?: string) {
  return `<pre data-language="${lang}"><code>${str}</code></pre>`;
}

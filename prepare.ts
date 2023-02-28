import { join } from "https://deno.land/std@0.178.0/path/mod.ts";
import {
  Project,
  PropertyAssignment,
  SyntaxKind,
} from "https://deno.land/x/ts_morph@17.0.1/mod.ts";

const temp = await Deno.makeTempDir();
const clone = await run(
  ["git", "clone", "https://github.com/grammyjs/grammY"],
  temp,
);
if (!clone.success) throw new Error("Failed to clone grammjs/grammY");
const { stdout: revision } = await run([
  "git",
  "rev-list",
  "--tags",
  "--max-count=1",
], join(temp, "grammY"));
const tags = await run(
  ["git", "describe", "--tags", revision.trim()],
  join(temp, "grammY"),
);
if (!tags.success) throw new Error("Failed to get tags");

const LATEST_VERSION = tags.stdout.trim();
let currentVersion = "";
try {
  const module = await import("./mod.ts");
  currentVersion = module.GRAMMY_VERSION;
} catch (_err) {
  // whatever
}

if (currentVersion === LATEST_VERSION) {
  await Deno.remove(temp, { recursive: true });
  Deno.exit(0);
}

const FILTERS_TS_FILE = join(temp, "grammY/src/filter.ts");

const project = new Project();
const source = project.addSourceFileAtPath(FILTERS_TS_FILE);

const filterDepsFile = `\
export const UPDATE_KEYS = ${
  JSON.stringify(
    (source.getVariableDeclarationOrThrow("UPDATE_KEYS"))
      .getInitializerIfKindOrThrow(SyntaxKind.AsExpression)
      .getExpressionIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
      .getProperties().map((prop) => (prop as PropertyAssignment).getName()),
    null,
    2,
  )
} as const;

export const ${source.getVariableDeclarationOrThrow("L1_SHORTCUTS").getText()};

export const ${
  source.getVariableDeclarationOrThrow("L2_SHORTCUTS").getText()
};\n`;

await Deno.writeTextFile("./filter.ts", filterDepsFile);

const filterQueries = source
  .getTypeAliasOrThrow("FilterQuery")
  .getType().getUnionTypes()
  .map((u) => u.getLiteralValue()) as string[];

await Deno.remove(temp, { recursive: true });

const stringified = `${JSON.stringify(filterQueries, null, 2)}\n`;

const modFile = `// Last updated: ${new Date().toISOString()}
export const GRAMMY_VERSION = "${LATEST_VERSION}";
export default ${stringified.trim()};\n`;

await Deno.writeTextFile("./mod.ts", modFile);
await Deno.mkdir("./versions");
await Deno.writeTextFile(`./versions/${LATEST_VERSION}.json`, stringified);

async function run(cmd: string[], cwd: string) {
  const process = Deno.run({ cwd, cmd, stdout: "piped" });
  const [status, stdout] = await Promise.all([
    process.status(),
    process.output(),
  ]);
  process.close();
  const decoder = new TextDecoder();
  return { ...status, stdout: decoder.decode(stdout) };
}

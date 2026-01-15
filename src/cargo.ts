export interface TestResult {
  path: string;
  expected: string;
  got: string;
}

export function parseCargoLog(log: string): TestResult[] {
  const results: TestResult[] = [];
  const blocks = log.split("Test ");
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const parts = block.split("\nExpected:\n");
    if (parts.length < 2) continue;
    const titlePart = parts[0];
    const rest = parts[1];
    const title = titlePart.replace(" failed", "").replace(/\\/g, "/");
    const gotParts = rest.split("\nGot:\n");
    if (gotParts.length < 2) continue;
    const expected = gotParts[0].trim();
    const got = gotParts[1].split("\nTest ")[0].trim(); // in case there are more
    results.push({ path: title, expected, got });
  }
  return results;
}

export function asTitle(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1].replace(/\.txt$/g, "");
}

export const CARGO_LOG_PLACEHOLDER = `
Finished \`test\` profile [unoptimized + debuginfo] target(s)
     Running tests/citeproc.rs (target/debug/deps/citeproc-abc123)
Test target/haya-cache/…/bugreports_XYZ.txt failed
Expected: <div class="csl-bib-body">…<div>
Got: <div class="csl-bib-body">…<div>
`.trim();

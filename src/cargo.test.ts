import { describe, expect, it } from "vitest";
import { asTitle, parseCargoLog } from "./cargo.ts";
import cargoTestLog from "./fixtures/cargo-test.log?raw";

describe("parseCargoLog", () => {
  it("should parse the cargo test log correctly", () => {
    const results = parseCargoLog(cargoTestLog);
    expect(results.length).toBeGreaterThan(0);
    // Check first one
    const first = results[0];
    expect(first.path).toBe(
      "target/haya-cache/test-suite/processor-tests/humans/bugreports_AllCapsLeakage.txt",
    );
    expect(first.expected).toContain('<div class="csl-bib-body">');
    expect(first.got).toContain('<div class="csl-bib-body">');
  });
});

describe("asTitle", () => {
  it("removes .txt extension and returns basename", () => {
    expect(
      asTitle(
        "target/haya-cache/test-suite/processor-tests/humans/variables_ContainerTitleShort.txt",
      ),
    ).toBe("variables_ContainerTitleShort");
  });
});

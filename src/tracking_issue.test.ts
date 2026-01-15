import { describe, expect, it } from "vitest";
import { tracking } from "./tracking_issue.ts";

describe("parseTrackingIssue", () => {
  it("should parse the tracking issue markdown correctly", () => {
    const items = tracking.notes;
    expect(items.size).toBeGreaterThan(0);

    // Check a known note
    const badDelimiter = items.get("bugreports_BadDelimiterBeforeCollapse");
    expect(badDelimiter).toBeDefined();
    expect(badDelimiter).toContain("Passes in #367");
  });
});

import { describe, it, expect } from "@jest/globals";
import compareElectronegativity from ".";

describe("compareElectronegativity", () => {
  it("should say that Hydrogen is more electronegative than Helium", () => {
    const result = compareElectronegativity("H", "He");

    expect(result).toBeLessThan(0);
  });
  it("should say that Beryllium is more electronegative than Lithium", () => {
    const result = compareElectronegativity("Li", "Be");

    expect(result).toBeGreaterThan(0);
  });
  it("should say that Helium and Neon have the same electronegativity", () => {
    const result = compareElectronegativity("He", "Ne");

    expect(result).toBe(0);
  });
});

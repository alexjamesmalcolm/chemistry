import { describe, it, expect } from "@jest/globals";
import compareElectronegativity from ".";
import { ElementSymbol } from "../ElementSymbol";

describe("compareElectronegativity", () => {
  it("should say that Hydrogen is more electronegative than Helium", () => {
    const result = compareElectronegativity(ElementSymbol.H, ElementSymbol.He);

    expect(result).toBeLessThan(0);
  });
  it("should say that Beryllium is more electronegative than Lithium", () => {
    const result = compareElectronegativity(ElementSymbol.Li, ElementSymbol.Be);

    expect(result).toBeGreaterThan(0);
  });
  it("should say that Helium and Neon have the same electronegativity", () => {
    const result = compareElectronegativity(ElementSymbol.He, ElementSymbol.Ne);

    expect(result).toBe(0);
  });
});

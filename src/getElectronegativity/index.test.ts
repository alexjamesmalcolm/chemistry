import { describe, it, expect } from "@jest/globals";
import getElectronegativity from ".";
import { ElementSymbol } from "../ElementSymbol";

describe("getElectronegativity", () => {
  it("should get electronegativity of Hydrogen", () => {
    const element: ElementSymbol = ElementSymbol.H;
    const expectedElectronegativity = 2.2;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Helium", () => {
    const element: ElementSymbol = ElementSymbol.He;
    const expectedElectronegativity = NaN;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Lithium", () => {
    const element: ElementSymbol = ElementSymbol.Li;
    const expectedElectronegativity = 0.98;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Beryllium", () => {
    const element: ElementSymbol = ElementSymbol.Be;
    const expectedElectronegativity = 1.57;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Boron", () => {
    const element: ElementSymbol = ElementSymbol.B;
    const expectedElectronegativity = 2.04;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Carbon", () => {
    const element: ElementSymbol = ElementSymbol.C;
    const expectedElectronegativity = 2.55;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Nitrogen", () => {
    const element: ElementSymbol = ElementSymbol.N;
    const expectedElectronegativity = 3.04;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Oxygen", () => {
    const element: ElementSymbol = ElementSymbol.O;
    const expectedElectronegativity = 3.44;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Fluorine", () => {
    const element: ElementSymbol = ElementSymbol.F;
    const expectedElectronegativity = 3.98;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
  it("should get electronegativity of Neon", () => {
    const element: ElementSymbol = ElementSymbol.Ne;
    const expectedElectronegativity = NaN;

    const result = getElectronegativity(element);

    expect(result).toBe(expectedElectronegativity);
  });
});

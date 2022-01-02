import { describe, it, expect } from "@jest/globals";
import getIonicCharge from ".";
import { ElementSymbol } from "../ElementSymbol";
import { Charge } from "../Charge";

describe("getIonicCharge", () => {
  it("should get 1+ for Hydrogen", () => {
    const element: ElementSymbol = "H";
    const charge: Charge = "1+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 0 for Helium", () => {
    const element: ElementSymbol = "He";
    const charge: Charge = "0";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1+ for Lithium", () => {
    const element: ElementSymbol = "Li";
    const charge: Charge = "1+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2+ for Beryllium", () => {
    const element: ElementSymbol = "Be";
    const charge: Charge = "2+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 3- for Nitrogen", () => {
    const element: ElementSymbol = "N";
    const charge: Charge = "3-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2- for Oxygen", () => {
    const element: ElementSymbol = "O";
    const charge: Charge = "2-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1- for Fluorine", () => {
    const element: ElementSymbol = "F";
    const charge: Charge = "1-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 0 for Neon", () => {
    const element: ElementSymbol = "Ne";
    const charge: Charge = "0";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1+ for Sodium", () => {
    const element: ElementSymbol = "Na";
    const charge: Charge = "1+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2+ for Magnesium", () => {
    const element: ElementSymbol = "Mg";
    const charge: Charge = "2+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 3+ for Aluminum", () => {
    const element: ElementSymbol = "Al";
    const charge: Charge = "3+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get undefined for Carbon", () => {
    const element: ElementSymbol = "C";

    const result = getIonicCharge(element);

    expect(result).toBe(undefined);
  });
  it("should get 3- for Phosphorous", () => {
    const element: ElementSymbol = "P";
    const charge: Charge = "3-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2- for Sulfur", () => {
    const element: ElementSymbol = "S";
    const charge: Charge = "2-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1- for Chlorine", () => {
    const element: ElementSymbol = "Cl";
    const charge: Charge = "1-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 0 for Argon", () => {
    const element: ElementSymbol = "Ar";
    const charge: Charge = "0";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1+ for Potassium", () => {
    const element: ElementSymbol = "K";
    const charge: Charge = "1+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2+ for Calcium", () => {
    const element: ElementSymbol = "Ca";
    const charge: Charge = "2+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2+ for Zinc", () => {
    const element: ElementSymbol = "Zn";
    const charge: Charge = "2+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 3+ for Gallium", () => {
    const element: ElementSymbol = "Ga";
    const charge: Charge = "3+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2- for Selenium", () => {
    const element: ElementSymbol = "Se";
    const charge: Charge = "2-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1- for Bromine", () => {
    const element: ElementSymbol = "Br";
    const charge: Charge = "1-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1- for Bromine", () => {
    const element: ElementSymbol = "Br";
    const charge: Charge = "1-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 0 for Krypton", () => {
    const element: ElementSymbol = "Kr";
    const charge: Charge = "0";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1+ for Rb", () => {
    const element: ElementSymbol = "Rb";
    const charge: Charge = "1+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2+ for Sr", () => {
    const element: ElementSymbol = "Sr";
    const charge: Charge = "2+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1+ for Ag", () => {
    const element: ElementSymbol = "Ag";
    const charge: Charge = "1+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2+ for Cd", () => {
    const element: ElementSymbol = "Cd";
    const charge: Charge = "2+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1- for I", () => {
    const element: ElementSymbol = "I";
    const charge: Charge = "1-";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 0 for Xe", () => {
    const element: ElementSymbol = "Xe";
    const charge: Charge = "0";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1+ for Cs", () => {
    const element: ElementSymbol = "Cs";
    const charge: Charge = "1+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2+ for Ba", () => {
    const element: ElementSymbol = "Ba";
    const charge: Charge = "2+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 0 for Rn", () => {
    const element: ElementSymbol = "Rn";
    const charge: Charge = "0";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 1+ for Fr", () => {
    const element: ElementSymbol = "Fr";
    const charge: Charge = "1+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
  it("should get 2+ for Ra", () => {
    const element: ElementSymbol = "Ra";
    const charge: Charge = "2+";

    const result = getIonicCharge(element);

    expect(result).toBe(charge);
  });
});

import { describe, it, expect } from "@jest/globals";
import splitMolecularFormula from ".";

describe("splitMolecularFormula", () => {
  it("should split Acetic acid - CH3COOH", () => {
    const molecularFormula = "CH3COOH";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["C", "H", "H", "H", "C", "O", "O", "H"]);
  });
  it("should split Benitoite - BaTiSi3O9", () => {
    const molecularFormula = "BaTiSi3O9";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual([
      "Ba",
      "Ti",
      "Si",
      "Si",
      "Si",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
    ]);
  });
  it("should split Caffeine - C8H10N4O2", () => {
    const molecularFormula = "C8H10N4O2";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual([
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "N",
      "N",
      "N",
      "N",
      "O",
      "O",
    ]);
  });
  it("should split Calcium hydroxide - Ca(OH)2", () => {
    const molecularFormula = "Ca(OH)2";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["Ca", "O", "H", "O", "H"]);
  });
  it("should split Chlorine - Cl2", () => {
    const molecularFormula = "Cl2";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["Cl", "Cl"]);
  });
  it("should split Dieldrin - C12H8Cl6O", () => {
    const molecularFormula = "C12H8Cl6O";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual([
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "Cl",
      "Cl",
      "Cl",
      "Cl",
      "Cl",
      "Cl",
      "O",
    ]);
  });
  //   it("should split Estradiol - C18H24O2", () => {});
  it("should split Fool’s Gold (Iron Sulfide) - FeS2", () => {
    const molecularFormula = "FeS2";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["Fe", "S", "S"]);
  });
  //   it("should split Glucose - C6H12O6", () => {});
  //   it("should split Gypsum - CaSO4", () => {});
  it("should split Hydrogen - H2", () => {
    const molecularFormula = "H2";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["H", "H"]);
  });
  it("should split Hydrogen peroxide - H2O2", () => {
    const molecularFormula = "H2O2";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["H", "H", "O", "O"]);
  });
  it("should split Ibuprofen - C13H18O2", () => {
    const molecularFormula = "C13H18O2";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual([
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "C",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "H",
      "O",
      "O",
    ]);
  });
  it("should split Methane - CH4", () => {
    const molecularFormula = "CH4";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["C", "H", "H", "H", "H"]);
  });
  //   it("should split Naproxen - C14H14O3", () => {});
  it("should split Ozone - O3", () => {
    const molecularFormula = "O3";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["O", "O", "O"]);
  });
  //   it("should split Penicillin - C16H18N2O5S1", () => {});
  //   it("should split Sugar - C12H22O11", () => {});
  it("should split Sulfur - S8", () => {
    const molecularFormula = "S8";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["S", "S", "S", "S", "S", "S", "S", "S"]);
  });
  it("should split Sulfuric acid - H2SO4", () => {
    const molecularFormula = "H2SO4";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["H", "H", "S", "O", "O", "O", "O"]);
  });
  it("should split Table salt - NaCl", () => {
    const molecularFormula = "NaCl";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["Na", "Cl"]);
  });
  //   it("should split Testosterone - C19H28O2", () => {});
  //   it("should split Vitamin B1 - C12H19OS", () => {});
  it("should split Zircon (diamond substitute) - ZrSiO4", () => {
    const molecularFormula = "ZrSiO4";

    const result = splitMolecularFormula(molecularFormula);

    expect(result).toStrictEqual(["Zr", "Si", "O", "O", "O", "O"]);
  });
});

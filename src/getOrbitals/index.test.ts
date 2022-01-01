import { describe, it, expect } from "@jest/globals";
import getOrbitals, { getFullOrbitals } from ".";
import { ElementSymbol } from "../ElementSymbol";
import { orbitToString } from "../Orbit";

describe("getFullOrbitals", () => {
  it("should get orbitals for Hydrogen", () => {
    const element: ElementSymbol = "H";
    const expected = ["1s1"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Helium", () => {
    const element: ElementSymbol = "He";
    const expected = ["1s2"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Lithium", () => {
    const element: ElementSymbol = "Li";
    const expected = ["1s2", "2s1"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Beryllium", () => {
    const element: ElementSymbol = "Be";
    const expected = ["1s2", "2s2"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Boron", () => {
    const element: ElementSymbol = "B";
    const expected = ["1s2", "2s2", "2p1"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Carbon", () => {
    const element: ElementSymbol = "C";
    const expected = ["1s2", "2s2", "2p2"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Nitrogen", () => {
    const element: ElementSymbol = "N";
    const expected = ["1s2", "2s2", "2p3"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Oxygen", () => {
    const element: ElementSymbol = "O";
    const expected = ["1s2", "2s2", "2p4"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Florine", () => {
    const element: ElementSymbol = "F";
    const expected = ["1s2", "2s2", "2p5"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Neon", () => {
    const element: ElementSymbol = "Ne";
    const expected = ["1s2", "2s2", "2p6"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Sodium", () => {
    const element: ElementSymbol = "Na";
    const expected = ["1s2", "2s2", "2p6", "3s1"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Magnesium", () => {
    const element: ElementSymbol = "Mg";
    const expected = ["1s2", "2s2", "2p6", "3s2"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Aluminum", () => {
    const element: ElementSymbol = "Al";
    const expected = ["1s2", "2s2", "2p6", "3s2", "3p1"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Silicon", () => {
    const element: ElementSymbol = "Si";
    const expected = ["1s2", "2s2", "2p6", "3s2", "3p2"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Phosphorus", () => {
    const element: ElementSymbol = "P";
    const expected = ["1s2", "2s2", "2p6", "3s2", "3p3"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Sulfur", () => {
    const element: ElementSymbol = "S";
    const expected = ["1s2", "2s2", "2p6", "3s2", "3p4"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Chlorine", () => {
    const element: ElementSymbol = "Cl";
    const expected = ["1s2", "2s2", "2p6", "3s2", "3p5"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
  it("should get orbitals for Argon", () => {
    const element: ElementSymbol = "Ar";
    const expected = ["1s2", "2s2", "2p6", "3s2", "3p6"];

    const result = getFullOrbitals(element);

    expect([...result].map(orbitToString)).toStrictEqual(expected);
  });
});

describe("getOrbitals", () => {
  it("should get orbitals for Hydrogen", () => {
    const element: ElementSymbol = "H";
    const expected = ["1s1"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
  it("should get orbitals for Helium", () => {
    const element: ElementSymbol = "He";
    const expected = ["1s2"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
  it("should get orbitals for Lithium", () => {
    const element: ElementSymbol = "Li";
    const expected = ["[He]", "2s1"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
  it("should get orbitals for Potassium", () => {
    const element: ElementSymbol = "K";
    const expected = ["[Ar]", "4s1"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
  it("should get orbitals for Calcium", () => {
    const element: ElementSymbol = "Ca";
    const expected = ["[Ar]", "4s2"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
  it("should get orbitals for Scandium", () => {
    const element: ElementSymbol = "Sc";
    const expected = ["[Ar]", "4s2", "3d1"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
  it("should get orbitals for Oganesson", () => {
    const element: ElementSymbol = "Og";
    const expected = ["[Rn]", "5f14", "6d10", "7s2", "7p6"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
  it("should get orbitals for Caesium", () => {
    const element: ElementSymbol = "Cs";
    const expected = ["[Xe]", "6s1"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
  it("should get orbitals for Lanthanum", () => {
    const element: ElementSymbol = "La";
    const expected = ["[Xe]", "5d1", "6s2"];

    const result = getOrbitals(element);

    expect(
      [...result].map((orbit) =>
        typeof orbit === "string" ? orbit : orbitToString(orbit)
      )
    ).toStrictEqual(expected);
  });
});

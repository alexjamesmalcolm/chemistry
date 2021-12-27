import { describe, it, expect } from "@jest/globals";
import getLewisDotStructureOfMolecule, { LewisDotStructure } from ".";

const formaldehydeLewisDotStructure: LewisDotStructure = {
  elements: [
    {
      id: 1,
      element: "H",
    },
    {
      id: 2,
      element: "H",
    },
    {
      id: 3,
      element: "C",
    },
    {
      id: 4,
      element: "O",
    },
  ],
  bonds: [
    {
      bondLevel: 1,
      ids: [1, 3],
    },
    {
      bondLevel: 1,
      ids: [2, 3],
    },
    {
      bondLevel: 2,
      ids: [3, 4],
    },
  ],
};

describe("getLewisDotStructureOfMolecule", () => {
  it("should generate lewis dot structure of formaldehyde", () => {
    const formula = "CH2O";
    const lewisDotStructure = getLewisDotStructureOfMolecule(formula);
    expect(lewisDotStructure).toBe(formaldehydeLewisDotStructure);
  });
});

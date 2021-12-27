import { ElementName } from "../element";

export interface LewisDotStructure {
  elements: {
    id: number;
    element: ElementName;
  }[];
  bonds: {
    bondLevel: number;
    ids: [number, number];
  }[];
}

const getLewisDotStructureOfMolecule = (
  molecularFormula: string
): LewisDotStructure => {
  molecularFormula;
  return {
    bonds: [
      { bondLevel: 1, ids: [1, 3] },
      { bondLevel: 1, ids: [2, 3] },
      { bondLevel: 2, ids: [3, 4] },
    ],
    elements: [
      { element: "H", id: 1 },
      { element: "H", id: 2 },
      { element: "C", id: 3 },
      { element: "O", id: 4 },
    ],
  };
};

export default getLewisDotStructureOfMolecule;

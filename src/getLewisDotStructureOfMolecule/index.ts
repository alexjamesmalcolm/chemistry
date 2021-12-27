type Element = string;

export interface LewisDotStructure {
  elements: {
    id: number;
    element: Element;
  }[];
  bonds: {
    bondLevel: number;
    ids: [number, number];
  }[];
}

const getLewisDotStructureOfMolecule = (
  molecularFormula: string
): LewisDotStructure => {};

export default getLewisDotStructureOfMolecule;

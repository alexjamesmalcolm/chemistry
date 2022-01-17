import { ElementSymbol } from "../ElementSymbol";

export const getElementFromAtomicNumber = (
  atomicNumber: number
): ElementSymbol => {
  const element = (Object.keys(ElementSymbol) as ElementSymbol[]).find(
    (_element, index) => index + 1 === atomicNumber
  );
  if (element) {
    return element;
  }
  if (atomicNumber === 0) throw new Error("Neutronium is not supported.");
  if (atomicNumber < 0)
    throw new Error(
      `Cannot understand an element having an atomic number of ${atomicNumber}.`
    );
  throw new Error(
    `Element of atomic number ${atomicNumber} has not been discovered.`
  );
};

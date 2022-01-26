import { ElementSymbol } from "../ElementSymbol";
import getAtomicNumber from "../getAtomicNumber";

export const rydbergConstantForAnInfiniteMass = 10973731.56816;
const massOfProton = 1836.15267;
const massOfElectron = 1;

const getRydbergConstant = (element: ElementSymbol) => {
  const atomicNumber = getAtomicNumber(element);
  const nucleusMass = atomicNumber * massOfProton;
  return (
    (rydbergConstantForAnInfiniteMass * nucleusMass) /
    (nucleusMass + massOfElectron)
  );
};

export default getRydbergConstant;

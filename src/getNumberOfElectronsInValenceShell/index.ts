import { sum } from "rambda";
import { ElementSymbol } from "../ElementSymbol";
import getOrbitals from "../getOrbitals";
import { isOrbit } from "../Orbit";

const getNumberOfElectronsInValenceShell = (element: ElementSymbol): number => {
  const orbitals = getOrbitals(element);
  const valenceOrbits = [...orbitals].filter(isOrbit);
  const electrons = sum(valenceOrbits.map((orbit) => orbit.electrons));
  return electrons;
};

export default getNumberOfElectronsInValenceShell;

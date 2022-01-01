import { append, defaultTo, last, sum } from "rambda";
import { ElementSymbol } from "../ElementSymbol";
import getAtomicNumber from "../getAtomicNumber";
import { Orbit } from "../Orbit";

const atomicSubShellOrbitsInOrder: {
  energyLevel: number;
  type: Orbit["type"];
}[] = [
  { energyLevel: 1, type: "s" },
  { energyLevel: 2, type: "s" },
  { energyLevel: 2, type: "p" },
  { energyLevel: 3, type: "s" },
  { energyLevel: 3, type: "p" },
  { energyLevel: 4, type: "s" },
  { energyLevel: 3, type: "d" },
  { energyLevel: 4, type: "p" },
  { energyLevel: 5, type: "s" },
  { energyLevel: 4, type: "d" },
  { energyLevel: 5, type: "p" },
  { energyLevel: 6, type: "s" },
  { energyLevel: 4, type: "f" },
  { energyLevel: 5, type: "d" },
  { energyLevel: 6, type: "p" },
  { energyLevel: 7, type: "s" },
  { energyLevel: 5, type: "f" },
  { energyLevel: 6, type: "d" },
  { energyLevel: 7, type: "p" },
];

type NobleGasOrbitals =
  | "[He]"
  | "[Ne]"
  | "[Ar]"
  | "[Kr]"
  | "[Xe]"
  | "[Rn]"
  | "[Og]";

type NobleGas = "He" | "Ne" | "Ar" | "Kr" | "Xe" | "Rn" | "Og";

const getNobleGasOrbitalFromNobleGas = (
  nobleGas: NobleGas
): NobleGasOrbitals => {
  switch (nobleGas) {
    case "He":
      return "[He]";
    case "Ne":
      return "[Ne]";
    case "Ar":
      return "[Ar]";
    case "Kr":
      return "[Kr]";
    case "Xe":
      return "[Xe]";
    case "Rn":
      return "[Rn]";
    default:
      return "[Og]";
  }
};

const getNobleGas = (element: ElementSymbol): undefined | NobleGas => {
  const atomicNumber = getAtomicNumber(element);
  if (atomicNumber > 118) return "Og";
  if (atomicNumber > 86) return "Rn";
  if (atomicNumber > 54) return "Xe";
  if (atomicNumber > 36) return "Kr";
  if (atomicNumber > 18) return "Ar";
  if (atomicNumber > 10) return "Ne";
  if (atomicNumber > 2) return "He";
  return undefined;
};

const isOrbitFullOfElectrons = (orbit: Orbit): boolean => {
  if (orbit.type === "s") return orbit.electrons === 2;
  if (orbit.type === "p") return orbit.electrons === 6;
  if (orbit.type === "d") return orbit.electrons === 10;
  return orbit.electrons === 14;
};

const getNextSubShell = (orbits: Orbit[]): Orbit => {
  const { energyLevel, type } = defaultTo<{
    energyLevel: number;
    type: Orbit["type"];
  }>(
    { energyLevel: 1, type: "s" },
    atomicSubShellOrbitsInOrder.find(
      (atomicSubShellOrbit) =>
        !orbits.some(
          (orbit) =>
            orbit.type === atomicSubShellOrbit.type &&
            orbit.energyLevel === atomicSubShellOrbit.energyLevel
        )
    )
  );
  return { electrons: 1, energyLevel, type };
};

const getFullOrbitalsRecursive = (
  atomicNumber: number,
  orbits: Orbit[]
): Orbit[] => {
  const electrons = sum(orbits.map((orbit) => orbit.electrons));

  // If orbits match electrons then just send it
  if (electrons === atomicNumber) return orbits;

  // First try to bump the last orbit's electrons if it's not full
  const lastOrbit = last(orbits);
  if (lastOrbit && !isOrbitFullOfElectrons(lastOrbit)) {
    lastOrbit.electrons += 1;
    console.log(orbits);
    // return orbits;
    return getFullOrbitalsRecursive(atomicNumber, orbits);
  }

  return getFullOrbitalsRecursive(
    atomicNumber,
    append(getNextSubShell(orbits), orbits)
  );
};

export const getFullOrbitals = (element: ElementSymbol): Set<Orbit> => {
  const atomicNumber = getAtomicNumber(element);
  return new Set(getFullOrbitalsRecursive(atomicNumber, []));
};

const areOrbitalsTheSame = (a: Orbit, b: Orbit): boolean =>
  a.electrons === b.electrons &&
  a.energyLevel === b.energyLevel &&
  a.type === b.type;

const getOrbitals = (element: ElementSymbol): Set<Orbit | NobleGasOrbitals> => {
  const fullOrbitals = getFullOrbitals(element);

  const nobleGas: NobleGas | undefined = getNobleGas(element);
  if (nobleGas) {
    const fullNobleGasOrbitals = [...getFullOrbitals(nobleGas)];
    const reducedOrbitals: (Orbit | NobleGasOrbitals)[] = (
      [getNobleGasOrbitalFromNobleGas(nobleGas)] as (Orbit | NobleGasOrbitals)[]
    ).concat(
      [...fullOrbitals].filter((orbital) => {
        return !fullNobleGasOrbitals.some((nobleGasOrbital) => {
          return areOrbitalsTheSame(orbital, nobleGasOrbital);
        });
      })
    );
    return new Set(reducedOrbitals);
  }
  return fullOrbitals;
};

export default getOrbitals;

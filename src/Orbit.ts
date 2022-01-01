interface BaseOrbit {
  energyLevel: number;
}

interface SharpOrbit extends BaseOrbit {
  type: "s";
  electrons: 1 | 2;
}

interface PrincipleOrbit extends BaseOrbit {
  type: "p";
  electrons: 1 | 2 | 3 | 4 | 5 | 6;
}

interface DiffusedOrbit extends BaseOrbit {
  type: "d";
  electrons: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

interface FundamentalOrbit extends BaseOrbit {
  type: "f";
  electrons: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
}

export type Orbit =
  | SharpOrbit
  | PrincipleOrbit
  | DiffusedOrbit
  | FundamentalOrbit;

export const orbitToString = (orbit: Orbit): string =>
  `${orbit.energyLevel}${orbit.type}${orbit.electrons}`;

export const isOrbit = (a: any): a is Orbit => {
  if (typeof a === "object") {
    if (["s", "p", "d", "f"].includes(a["type"])) {
      if (
        Number.isInteger(a["energyLevel"]) &&
        Number.isFinite(a["energyLevel"])
      ) {
        if (
          Number.isInteger(a["electrons"]) &&
          Number.isFinite(a["electrons"])
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

export const ElementSymbol = {
  H: "H",
  He: "He",
  Li: "Li",
  Be: "Be",
  B: "B",
  C: "C",
  N: "N",
  O: "O",
  F: "F",
  Ne: "Ne",
  Na: "Na",
  Mg: "Mg",
  Al: "Al",
  Si: "Si",
  P: "P",
  S: "S",
  Cl: "Cl",
  Ar: "Ar",
  K: "K",
  Ca: "Ca",
  Sc: "Sc",
  Ti: "Ti",
  V: "V",
  Cr: "Cr",
  Mn: "Mn",
  Fe: "Fe",
  Co: "Co",
  Ni: "Ni",
  Cu: "Cu",
  Zn: "Zn",
  Ga: "Ga",
  Ge: "Ge",
  As: "As",
  Se: "Se",
  Br: "Br",
  Kr: "Kr",
  Rb: "Rb",
  Sr: "Sr",
  Y: "Y",
  Zr: "Zr",
  Nb: "Nb",
  Mo: "Mo",
  Tc: "Tc",
  Ru: "Ru",
  Rh: "Rh",
  Pd: "Pd",
  Ag: "Ag",
  Cd: "Cd",
  In: "In",
  Sn: "Sn",
  Sb: "Sb",
  Te: "Te",
  I: "I",
  Xe: "Xe",
  Cs: "Cs",
  Ba: "Ba",
  La: "La",
  Ce: "Ce",
  Pr: "Pr",
  Nd: "Nd",
  Pm: "Pm",
  Sm: "Sm",
  Eu: "Eu",
  Gd: "Gd",
  Tb: "Tb",
  Dy: "Dy",
  Ho: "Ho",
  Er: "Er",
  Tm: "Tm",
  Yb: "Yb",
  Lu: "Lu",
  Hf: "Hf",
  Ta: "Ta",
  W: "W",
  Re: "Re",
  Os: "Os",
  Ir: "Ir",
  Pt: "Pt",
  Au: "Au",
  Hg: "Hg",
  Tl: "Tl",
  Pb: "Pb",
  Bi: "Bi",
  Po: "Po",
  At: "At",
  Rn: "Rn",
  Fr: "Fr",
  Ra: "Ra",
  Ac: "Ac",
  Th: "Th",
  Pa: "Pa",
  U: "U",
  Np: "Np",
  Pu: "Pu",
  Am: "Am",
  Cm: "Cm",
  Bk: "Bk",
  Cf: "Cf",
  Es: "Es",
  Fm: "Fm",
  Md: "Md",
  No: "No",
  Lr: "Lr",
  Rf: "Rf",
  Db: "Db",
  Sg: "Sg",
  Bh: "Bh",
  Hs: "Hs",
  Mt: "Mt",
  Ds: "Ds",
  Rg: "Rg",
  Cn: "Cn",
  Nh: "Nh",
  Fl: "Fl",
  Mc: "Mc",
  Lv: "Lv",
  Ts: "Ts",
  Og: "Og",
};
export type ElementSymbol = keyof typeof ElementSymbol;

export type NobleGas = "He" | "Ne" | "Ar" | "Kr" | "Xe" | "Rn" | "Og";
export const isNobleGas = (element: ElementSymbol): element is NobleGas =>
  ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(element);

export type GroupOne = "H" | "Li" | "Na" | "K" | "Rb" | "Cs" | "Fr";
export const isGroupOne = (element: ElementSymbol): element is GroupOne =>
  ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"].includes(element);

export type GroupTwo = "Be" | "Mg" | "Ca" | "Sr" | "Ba" | "Ra";
export const isGroupTwo = (element: ElementSymbol): element is GroupTwo =>
  ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"].includes(element);

export type GroupThree = "B" | "Al" | "Ga" | "In" | "Tl" | "Nh";
export const isGroupThree = (element: ElementSymbol): element is GroupThree =>
  ["B", "Al", "Ga", "In", "Tl", "Nh"].includes(element);

export type GroupFour = "C" | "Si" | "Ge" | "Sn" | "Pb" | "Fl";
export const isGroupFour = (element: ElementSymbol): element is GroupFour =>
  ["C", "Si", "Ge", "Sn", "Pb", "Fl"].includes(element);

export type GroupFive = "N" | "P" | "As" | "Sb" | "Bi" | "Mc";
export const isGroupFive = (element: ElementSymbol): element is GroupFive =>
  ["N", "P", "As", "Sb", "Bi", "Mc"].includes(element);

export type GroupSix = "O" | "S" | "Se" | "Te" | "Po" | "Lv";
export const isGroupSix = (element: ElementSymbol): element is GroupSix =>
  ["O", "S", "Se", "Te", "Po", "Lv"].includes(element);

export type GroupSeven = "F" | "Cl" | "Br" | "I" | "At" | "Ts";
export const isGroupSeven = (element: ElementSymbol): element is GroupSeven =>
  ["F", "Cl", "Br", "I", "At", "Ts"].includes(element);

export type GroupEight = NobleGas;
export const isGroupEight = isNobleGas;

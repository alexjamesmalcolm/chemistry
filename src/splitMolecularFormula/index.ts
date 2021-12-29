import { ElementSymbol } from "../ElementSymbol";
import { flatten, map, pipe, reduce } from "rambda";

// [A-Z][a-z]?[0-9]? element finder
// \(.+\)[0-9] group finder

const splitMolecularFormula = (molecularFormula: string): ElementSymbol[] => {
  const groups = [...molecularFormula.matchAll(/\(.+\)[0-9]+/g)];
  if (groups.length === 0)
    return splitMolecularFormulaWithoutGroups(molecularFormula);
  return pipe(
    map<RegExpMatchArray, string>((group) => group[0] || ""),
    map<string, [string, string[]]>((group) => {
      const groupContents = [...(group?.matchAll(/[A-Z][a-z]?/g) || [])].map(
        (match) => match[0]
      );
      const count = Number.parseInt(
        [...(group?.match(/[0-9]+/) || [])][0] || "0"
      );
      const key = group || "";
      const pair: [string, string[]] = [
        key,
        flatten(Array.from({ length: count }, () => groupContents)),
      ];
      return pair;
    }),
    (pairs): string =>
      reduce(
        (accumulator, [group, groupContents]): string =>
          accumulator.replace(group, groupContents.join("")),
        molecularFormula,
        pairs
      ),
    splitMolecularFormulaWithoutGroups
  )(groups);
};

const splitMolecularFormulaWithoutGroups = (
  molecularFormula: string
): ElementSymbol[] => {
  const regex = /[A-Z][a-z]?[0-9]*/gm;

  const matches = molecularFormula.matchAll(regex);

  const groups = [...matches].map((match) => match[0]);

  return flatten(
    groups.map((group): string | string[] => {
      if (!group) return "";
      const numberedMatch = [...group.matchAll(/^([A-Z][a-z]?)([0-9]+)$/g)];
      if (numberedMatch.length > 0) {
        const element = (numberedMatch[0] || [])[1];
        const count = Number.parseInt((numberedMatch[0] || [])[2] || "0");
        if (element && count) {
          return Array.from({ length: count }, () => element);
        }
      }
      return group;
    })
  );
};

export default splitMolecularFormula;

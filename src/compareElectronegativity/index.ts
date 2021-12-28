import { ElementSymbol } from "../ElementSymbol";
import getElectronegativity from "../getElectronegativity";

const compareElectronegativity = (a: ElementSymbol, b: ElementSymbol): number =>
  (getElectronegativity(b) || 0) - (getElectronegativity(a) || 0);

export default compareElectronegativity;

import { Charge } from "../Charge";
import {
  ElementSymbol,
  isGroupOne,
  isGroupTwo,
  isNobleGas,
} from "../ElementSymbol";

const negativeThreeElements: ElementSymbol[] = ["N", "P"];
const negativeTwoElements: ElementSymbol[] = ["O", "S", "Se"];
const positiveThreeElements: ElementSymbol[] = ["Al", "Ga"];
const positiveTwoElements: ElementSymbol[] = ["Zn", "Cd"];
const negativeOneElements: ElementSymbol[] = ["F", "Cl", "Br", "I"];

const getIonicCharge = (element: ElementSymbol): Charge | undefined => {
  if (isGroupOne(element) || element === "Ag") return "1+";
  if (isGroupTwo(element) || positiveTwoElements.includes(element)) return "2+";
  if (isNobleGas(element)) return "0";
  if (negativeOneElements.includes(element)) return "1-";
  if (negativeTwoElements.includes(element)) return "2-";
  if (positiveThreeElements.includes(element)) return "3+";
  if (negativeThreeElements.includes(element)) return "3-";
  return undefined;
};

export default getIonicCharge;

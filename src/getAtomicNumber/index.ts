import { ElementSymbol } from "../ElementSymbol";

const getAtomicNumber = (element: ElementSymbol) =>
  Object.keys(ElementSymbol).findIndex(
    (elementSymbol) => elementSymbol === element
  ) + 1;

export default getAtomicNumber;

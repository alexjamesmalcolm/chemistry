import { describe, it, expect } from "@jest/globals";
import { ElementSymbol } from "../ElementSymbol";
import { getElementFromAtomicNumber } from ".";

describe("getElementFromAtomicNumber", () => {
  it("should get Hydrogen from atomic number 1", () => {
    const atomicNumber: number = 1;
    const element: ElementSymbol = "H";

    const result = getElementFromAtomicNumber(atomicNumber);

    expect(result).toBe(element);
  });
  it("should get Helium from atomic number 2", () => {
    const atomicNumber: number = 2;
    const element: ElementSymbol = "He";

    const result = getElementFromAtomicNumber(atomicNumber);

    expect(result).toBe(element);
  });
  it("should throw an error while trying to get atomic number 200 saying it hasn't been discovered", () => {
    const atomicNumber: number = 200;

    expect(() => getElementFromAtomicNumber(atomicNumber)).toThrowError(
      `Element of atomic number ${atomicNumber} has not been discovered.`
    );
  });
  it("should throw an error while trying to get atomic number 199 saying it hasn't been discovered", () => {
    const atomicNumber: number = 199;

    expect(() => getElementFromAtomicNumber(atomicNumber)).toThrowError(
      `Element of atomic number ${atomicNumber} has not been discovered.`
    );
  });
  it("should throw an error while trying to get atomic number 0 saying that Neutronium is not supported", () => {
    const atomicNumber: number = 0;

    expect(() => getElementFromAtomicNumber(atomicNumber)).toThrowError(
      "Neutronium is not supported."
    );
  });
  it("should throw an error while trying to get atomic number -1 saying that it doesn't make sense", () => {
    const atomicNumber: number = -1;

    expect(() => getElementFromAtomicNumber(atomicNumber)).toThrowError(
      "Cannot understand an element having an atomic number of -1."
    );
  });
});

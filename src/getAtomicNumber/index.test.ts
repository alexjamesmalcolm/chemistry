import { describe, it, expect } from "@jest/globals";
import getAtomicNumber from ".";
import { ElementSymbol } from "../ElementSymbol";

describe("getAtomicNumber", () => {
  it("should get 1 for Hydrogen", () => {
    const element: ElementSymbol = "H";
    const atomicNumber = getAtomicNumber(element);
    expect(atomicNumber).toBe(1);
  });
  it("should get 2 for Helium", () => {
    const element: ElementSymbol = "He";
    const atomicNumber = getAtomicNumber(element);
    expect(atomicNumber).toBe(2);
  });
  it("should get 6 for Carbon", () => {
    const element: ElementSymbol = "C";
    const atomicNumber = getAtomicNumber(element);
    expect(atomicNumber).toBe(6);
  });
  it("should get 54 for Xenon", () => {
    const element: ElementSymbol = "Xe";
    const atomicNumber = getAtomicNumber(element);
    expect(atomicNumber).toBe(54);
  });
  it("should get 92 for Uranium", () => {
    const element: ElementSymbol = "U";
    const atomicNumber = getAtomicNumber(element);
    expect(atomicNumber).toBe(92);
  });
});

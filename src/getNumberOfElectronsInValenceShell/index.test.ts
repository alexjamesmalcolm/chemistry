import { describe, it, expect } from "@jest/globals";
import getNumberOfElectronsInValenceShell from ".";
import { ElementSymbol } from "../ElementSymbol";

describe("getNumberOfElectronsInValenceShell", () => {
  it("should get 4 for Carbon", () => {
    const element: ElementSymbol = "C";
    const expected: number = 4;

    const result = getNumberOfElectronsInValenceShell(element);

    expect(result).toBe(expected);
  });
});

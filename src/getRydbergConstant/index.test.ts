import { describe, expect, it } from "@jest/globals";
import getRydbergConstant from ".";

describe("getRydbergConstant", () => {
  it("should get the constant for H", () => {
    const element = "H";
    const precision = 6;
    const expected = (1.09677576 * Math.pow(10, 7)).toPrecision(precision);

    const rydbergConstant = getRydbergConstant(element).toPrecision(precision);

    expect(rydbergConstant).toBe(expected);
  });
  it("should get the constant for He", () => {
    const element = "He";
    const precision = 4;
    const expected = (1.09722267 * Math.pow(10, 7)).toPrecision(precision);

    const rydbergConstant = getRydbergConstant(element).toPrecision(precision);

    expect(rydbergConstant).toBe(expected);
  });
});

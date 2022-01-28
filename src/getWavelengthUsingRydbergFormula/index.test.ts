import { describe, expect, it } from "@jest/globals";
import getWaveLengthUsingRydbergFormula from ".";
import getRydbergConstant from "../getRydbergConstant";

describe("getWaveLengthUsingRydbergFormula", () => {
  it("should get wavelength of ionizing single electron off of Hydrogen", () => {
    const rydbergConstant = getRydbergConstant("H");
    const expected = 9.1165 * Math.pow(10, -8);
    const precision = 3;

    const actual = getWaveLengthUsingRydbergFormula({
      finalEnergyState: Infinity,
      initialEnergyState: 1,
      rydbergConstant,
    });

    expect(actual.toPrecision(precision)).toBe(expected.toPrecision(precision));
  });
});

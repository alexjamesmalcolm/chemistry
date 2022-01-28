import { describe, it, expect } from "@jest/globals";
import getEnergyOfPhotonFromWavelengthInElectronVolts from ".";

describe("getEnergyOfPhotonFromWavelengthInElectronVolts", () => {
  it("should energy of red light", () => {
    const wavelength = 6.5 * Math.pow(10, -7);
    const expected = 1.9;
    const precision = 2;

    const actual = getEnergyOfPhotonFromWavelengthInElectronVolts(wavelength);

    expect(actual.toPrecision(precision)).toBe(expected.toPrecision(precision));
  });
  it("should energy of violet light", () => {
    const wavelength = 4.5 * Math.pow(10, -7);
    const expected = 2.75;
    const precision = 2;

    const actual = getEnergyOfPhotonFromWavelengthInElectronVolts(wavelength);

    expect(actual.toPrecision(precision)).toBe(expected.toPrecision(precision));
  });
});

const planckConstantAndSpeedOfLightProductInElectronVoltMeters =
  1.24 * Math.pow(10, -6);

const getEnergyOfPhotonFromWavelengthInElectronVolts = (
  wavelengthInMeters: number
) =>
  planckConstantAndSpeedOfLightProductInElectronVoltMeters / wavelengthInMeters;

export default getEnergyOfPhotonFromWavelengthInElectronVolts;

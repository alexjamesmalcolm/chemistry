const getWavelengthUsingRydbergFormula = ({
  finalEnergyState,
  initialEnergyState,
  rydbergConstant,
}: {
  initialEnergyState: number;
  finalEnergyState: number;
  rydbergConstant: number;
}) =>
  1 /
  (rydbergConstant *
    (1 / Math.pow(initialEnergyState, 2) - 1 / Math.pow(finalEnergyState, 2)));

export default getWavelengthUsingRydbergFormula;

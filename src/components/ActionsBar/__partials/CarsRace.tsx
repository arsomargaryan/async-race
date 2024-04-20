import React from 'react';

interface Props {
  isRaceAll: boolean;
  setIsRaceAll: React.Dispatch<React.SetStateAction<boolean>>;
}
function CarsRace({ isRaceAll, setIsRaceAll }: Props) {
  const stateChange = () => {
    setIsRaceAll(!isRaceAll);
  };
  return (
    <div className="flex gap-2">
      <button disabled={isRaceAll} onClick={stateChange}>
        Race
      </button>
      <button disabled={!isRaceAll} onClick={stateChange}>
        Reset
      </button>
    </div>
  );
}

export default CarsRace;

import React from 'react';

interface Props {
  isRaceAll: boolean;
  setIsRaceAll: React.Dispatch<React.SetStateAction<boolean>>;
}
function CarsRace({ isRaceAll, setIsRaceAll }: Props) {
  const stateChange = () => {
    setIsRaceAll(prevState => !prevState);
  };
  return (
    <div className="flex gap-2">
      <button
        className="border border-green-300 pl-1.5 pr-1.5 rounded-xl hover:border-green-500 "
        disabled={isRaceAll}
        onClick={stateChange}
      >
        Race <i className="fa-solid fa-play text-sm text-green-300" />
      </button>
      <button
        className="border border-red-300 pl-1.5 pr-1.5 rounded-xl hover:border-red-500 "
        disabled={!isRaceAll}
        onClick={stateChange}
      >
        Reset <i className="fa-solid fa-rotate-right text-sm text-red-300" />
      </button>
    </div>
  );
}

export default CarsRace;

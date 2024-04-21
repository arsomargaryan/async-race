import React, { useState } from 'react';

interface Props {
  setIsRaceAll: React.Dispatch<React.SetStateAction<boolean>>;
}
function CarsRace({ setIsRaceAll }: Props) {
  const [isActive, setIsActive] = useState(false);

  const stateChange = () => {
    setIsRaceAll(prevState => !prevState);
    if (!isActive) {
      setTimeout(() => {
        setIsActive(prev => !prev);
      }, 2500);
    } else {
      setIsActive(prev => !prev);
    }
  };
  return (
    <div className="flex gap-2">
      <button
        type="button"
        className={`border border-green-300 pl-1.5 pr-1.5 rounded-xl  ${!isActive ? 'hover:border-green-500' : 'border-gray-400'}`}
        disabled={isActive}
        onClick={stateChange}
      >
        Race <i className="fa-solid fa-play text-sm text-green-300" />
      </button>
      <button
        type="button"
        className={`border border-red-300 pl-1.5 pr-1.5 rounded-xl ${isActive ? 'hover:border-red-500' : 'border-gray-400'}`}
        disabled={!isActive}
        onClick={stateChange}
      >
        Reset <i className="fa-solid fa-rotate-right text-sm text-red-300" />
      </button>
    </div>
  );
}

export default CarsRace;

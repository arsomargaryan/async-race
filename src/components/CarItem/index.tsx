import React, { useState } from 'react';
import { ICars } from '../../interfaces/ICars';
import CarIcon from './__partials/CarIcon';
import CarItemActions from './__partials/CarItemActions';
import CarStartStop from './__partials/CarStartStop';
import { IEngineStart } from '../../interfaces/IEngineStart';

interface Props {
  car: ICars;
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
  isRaceAll: boolean;
}
function CarItem({
  car,
  setCars,
  setTotalCarsCount,
  page,
  setUpdateId,
  isRaceAll
}: Props) {
  const [engineState, setEngineState] = useState<IEngineStart | null>(null);
  const [isDrive, setIsDrive] = useState<boolean>(false);
  const [isBroke, setIsBroke] = useState<boolean>(false);

  return (
    <div
      className="flex gap-2 items-center m-2"
      // style={{
      //   display: 'flex',
      //   gap: '2px',
      //   alignItems: 'center',
      //   margin: '5px'
      // }}
    >
      <CarItemActions
        id={car.id}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
        page={page}
        setUpdateId={setUpdateId}
      />
      <CarStartStop
        id={car.id}
        setEngineState={setEngineState}
        setIsDrive={setIsDrive}
        setIsBroke={setIsBroke}
        isRaceAll={isRaceAll}
      />
      <CarIcon
        mark={car.name}
        color={car.color}
        engineState={engineState}
        isDrive={isDrive}
        isBroke={isBroke}
      />
    </div>
  );
}
export default CarItem;

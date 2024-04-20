import React, { useState } from 'react';
import { ICars } from '../interfaces/ICars';
import Car from './Car';
import CarItemFunc from './CarItemFunc';
import CarStartStop from './CarStartStop';
import { IEngineStart } from '../interfaces/IEngineStart';

interface Props {
  car: ICars;
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
}
function CarItem({
  car,
  setCars,
  setTotalCarsCount,
  page,
  setUpdateId
}: Props) {
  const [engineState, setEngineState] = useState<IEngineStart | null>(null);
  const [isDrive, setIsDrive] = useState<boolean>(false);
  return (
    <div
      className="flex gap-2 items-center m-2"
      style={{
        display: 'flex',
        gap: '2px',
        alignItems: 'center',
        margin: '5px'
      }}
    >
      <CarItemFunc
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
      />
      <Car
        mark={car.name}
        color={car.color}
        engineState={engineState}
        isDrive={isDrive}
      />
    </div>
  );
}
export default CarItem;

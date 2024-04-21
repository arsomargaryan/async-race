import React from 'react';
import CarsRace from './__partials/CarsRace';
import CreateCar from './__partials/CreateCar';
import UpdateCar from './__partials/UpdateCar';
import GenerateCars from './__partials/GenerateCars';
import { ICars } from '../../interfaces/ICars';

interface Props {
  setCars: React.Dispatch<ICars[]>;
  page: number;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  updateId: number | null;
  isRaceAll: boolean;
  setIsRaceAll: React.Dispatch<React.SetStateAction<boolean>>;
}

function ActionsBar({
  setCars,
  page,
  setTotalCarsCount,
  updateId,
  isRaceAll,
  setIsRaceAll
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <CarsRace isRaceAll={isRaceAll} setIsRaceAll={setIsRaceAll} />
      <CreateCar
        page={page}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
      />
      <UpdateCar
        page={page}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
        updateId={updateId}
      />
      <GenerateCars
        page={page}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
      />
    </div>
  );
}

export default ActionsBar;

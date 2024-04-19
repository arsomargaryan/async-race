import React from 'react';
import CarsRace from './CarsRace';
import CreateCar from './CreateCar';
import UpdateCar from './UpdateCar';
import GenerateCars from './GenerateCars';
import { ICars } from '../../interfaces/ICars';

interface Props {
  cars: ICars[];
  setCars: React.Dispatch<ICars[]>;
  page: number;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
}

function ActionsBar({ cars, setCars, page, setTotalCarsCount }: Props) {
  return (
    <div
      className="flex justify-between items-center"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <CarsRace />
      <CreateCar
        page={page}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
      />
      <UpdateCar />
      <GenerateCars
        page={page}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
      />
    </div>
  );
}

export default ActionsBar;

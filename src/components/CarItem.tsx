import React from 'react';
import { ICars } from '../interfaces/ICars';
import Car from './Car';
import CarItemFunc from './CarItemFunc';
import CarStartStop from './CarStartStop';

interface Props {
  car: ICars;
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
}
function CarItem({ car, setCars, setTotalCarsCount, page }: Props) {
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
      />
      <CarStartStop />
      <Car mark={car.name} color={car.color} />
    </div>
  );
}
export default CarItem;

import React from 'react';
import CarItem from './CarItem';
import { ICars } from '../interfaces/ICars';

interface Props {
  cars: ICars[];
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
}
function CarsList({
  cars,
  setCars,
  page,
  setTotalCarsCount,
  setUpdateId
}: Props) {
  return (
    <div>
      {cars.map(car => (
        <CarItem
          key={car.id}
          car={car}
          setCars={setCars}
          setTotalCarsCount={setTotalCarsCount}
          page={page}
          setUpdateId={setUpdateId}
        />
      ))}
    </div>
  );
}

export default CarsList;

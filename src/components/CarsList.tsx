import React, { useState } from 'react';
import CarItem from './CarItem';
import { ICars } from '../interfaces/ICars';
import WinnerModal from './WinnerModal';

interface Props {
  cars: ICars[];
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
  isRaceAll: boolean;
}
function CarsList({
  cars,
  setCars,
  page,
  setTotalCarsCount,
  setUpdateId,
  isRaceAll
}: Props) {
  const [winner, setWinner] = useState<{
    id: number;
    time: number;
    name: string;
  } | null>(null);

  return (
    <div>
      {winner && <WinnerModal winner={winner} />}
      {cars.map(car => (
        <CarItem
          key={car.id}
          car={car}
          setCars={setCars}
          setTotalCarsCount={setTotalCarsCount}
          page={page}
          setUpdateId={setUpdateId}
          isRaceAll={isRaceAll}
          setWinner={setWinner}
        />
      ))}
    </div>
  );
}

export default CarsList;

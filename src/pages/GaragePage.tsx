import React from 'react';
import { ICars } from '../interfaces/ICars';
import CarsList from '../components/CarsList';
import Pagination from '../components/Pagination';

interface Props {
  cars: ICars[];
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  carCount: number | null;
  page: number;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
  isRaceAll: boolean;
}

function GaragePage({
  cars,
  setCars,
  carCount,
  setTotalCarsCount,
  page,
  setPage,
  setUpdateId,
  isRaceAll
}: Props) {
  return (
    <div>
      <CarsList
        cars={cars}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
        page={page}
        setUpdateId={setUpdateId}
        isRaceAll={isRaceAll}
      />
      {carCount && (
        <Pagination carCount={carCount} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default GaragePage;

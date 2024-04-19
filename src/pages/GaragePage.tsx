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
}

function GaragePage({
  cars,
  setCars,
  carCount,
  setTotalCarsCount,
  page,
  setPage
}: Props) {
  return (
    <div>
      <CarsList
        cars={cars}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
        page={page}
      />
      {carCount && (
        <Pagination carCount={carCount} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default GaragePage;

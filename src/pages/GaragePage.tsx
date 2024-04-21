import React, { Dispatch, SetStateAction } from 'react';
import { ICars } from '../interfaces/ICars';
import CarsList from '../components/CarsList';
import PaginationGarage from '../components/PaginationGarage';
import ActionsBar from '../components/ActionsBar';

interface Props {
  cars: ICars[];
  setCars: Dispatch<ICars[]>;
  setTotalCarsCount: Dispatch<SetStateAction<number | null>>;
  setPage: Dispatch<SetStateAction<number>>;
  carCount: number | null;
  page: number;
  setUpdateId: Dispatch<SetStateAction<number | null>>;
  isRaceAll: boolean;
  updateId: number | null;
  setIsRaceAll: Dispatch<SetStateAction<boolean>>;
}

function GaragePage({
  cars,
  setCars,
  carCount,
  setTotalCarsCount,
  page,
  setPage,
  setUpdateId,
  isRaceAll,
  updateId,
  setIsRaceAll
}: Props) {
  return (
    <div>
      <ActionsBar
        setCars={setCars}
        page={page}
        setTotalCarsCount={setTotalCarsCount}
        updateId={updateId}
        setIsRaceAll={setIsRaceAll}
      />
      <CarsList
        cars={cars}
        setCars={setCars}
        setTotalCarsCount={setTotalCarsCount}
        page={page}
        setUpdateId={setUpdateId}
        isRaceAll={isRaceAll}
      />
      {carCount && (
        <PaginationGarage carCount={carCount} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default GaragePage;

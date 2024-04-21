import React from 'react';
import axios from 'axios';
import { ICars } from '../../../interfaces/ICars';
import { getCars } from '../../../api';

interface Props {
  id: number;
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
}
function CarItemActions({
  id,
  setCars,
  setTotalCarsCount,
  page,
  setUpdateId
}: Props) {
  const removeCar = (): void => {
    try {
      axios.delete(`http://127.0.0.1:3000/garage/${id}`).then(() => {
        getCars(page).then(data => {
          if (data.statusText !== 'OK') throw new Error('wrong data');
          setCars(data.data);
          setTotalCarsCount(data.headers['x-total-count']);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const selectCar = (): void => {
    setUpdateId(id);
  };

  return (
    <div className="flex flex-col">
      <button
        className="border-2 border-emerald-400 hover:border-emerald-500 text-amber-400 p-1 rounded-b text-xs"
        onClick={selectCar}
      >
        Select
      </button>
      <button
        className="border-2 border-red-400 hover:border-red-500 text-red-500 p-1 rounded-b text-xs mt-1"
        onClick={removeCar}
      >
        Remove
      </button>
    </div>
  );
}

export default CarItemActions;

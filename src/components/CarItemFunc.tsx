import React from 'react';
import axios from 'axios';
import { ICars } from '../interfaces/ICars';
import { getCars } from '../api';

interface Props {
  id: number;
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
}
function CarItemFunc({ id, setCars, setTotalCarsCount, page }: Props) {
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

  return (
    <div
      className="flex flex-col"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <button className="text-xs">Select</button>
      <button className="text-xs" onClick={removeCar}>
        Remove
      </button>
    </div>
  );
}

export default CarItemFunc;

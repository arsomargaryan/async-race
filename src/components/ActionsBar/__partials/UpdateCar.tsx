import React, { useRef, useState } from 'react';
import axios from 'axios';
import { ICars } from '../../../interfaces/ICars';
import { getCars } from '../../../api';
import Api from '../../../constants/api';

interface Props {
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
  updateId: number | null;
}
function UpdateCar({ setCars, setTotalCarsCount, page, updateId }: Props) {
  const [color, setColor] = useState<string>('#000000');
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const updateCar = (): void => {
    if (!name || inputRef.current === null) return;
    try {
      axios
        .put(
          `${Api.HOST_URL}/garage/${updateId}`,
          {
            name,
            color
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(() => {
          getCars(page).then(data => {
            if (data.statusText !== 'OK') throw new Error('wrong data');
            setCars(data.data);
            setTotalCarsCount(data.headers['x-total-count']);
          });
        });
      setName('');
      inputRef.current.value = '';
    } catch {
      /* empty */
    }
  };

  return (
    <div className="flex gap-1">
      <input
        type="text"
        className="border w-28 rounded-xl p-1"
        placeholder="Type car name"
        onChange={e => setName(e.target.value)}
        ref={inputRef}
      />
      <input
        type="color"
        value={color}
        className="w-5"
        onChange={e => setColor(e.target.value)}
      />
      <button
        type="button"
        className="border border-red-300 pl-1.5 pr-1.5 rounded-xl hover:border-red-500 "
        onClick={updateCar}
      >
        Update
      </button>
    </div>
  );
}

export default UpdateCar;

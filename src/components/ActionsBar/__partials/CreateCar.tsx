import React, { useRef, useState } from 'react';
import axios from 'axios';
import { ICars } from '../../../interfaces/ICars';
import { getCars } from '../../../api';
import Api from '../../../constants/api';

interface Props {
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
}

function CreateCar({ page, setCars, setTotalCarsCount }: Props) {
  const [color, setColor] = useState<string>('#00000');
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const createNewCar = (): void => {
    if (!name || inputRef.current === null) return;
    try {
      axios
        .post(
          `${Api.HOST_URL}/garage/`,
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
    } catch (error) {
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
        className="w-5 rounded-l"
        onChange={e => setColor(e.target.value)}
      />
      <button
        type="button"
        className="border border-red-300 pl-1.5 pr-1.5 rounded-xl hover:border-red-500 "
        onClick={createNewCar}
      >
        Create
      </button>
    </div>
  );
}

export default CreateCar;

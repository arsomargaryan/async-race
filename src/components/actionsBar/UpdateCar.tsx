import React, { useRef, useState } from 'react';
import axios from 'axios';
import { ICars } from '../../interfaces/ICars';
import { getCars } from '../../api';

interface Props {
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
  page: number;
  updateId: number | null;
}
function UpdateCar({ setCars, setTotalCarsCount, page, updateId }: Props) {
  const [color, setColor] = useState<string>('#00000');
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const colorHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value);
  };

  const updateCar = (): void => {
    if (!name) return;
    try {
      axios
        .put(
          `http://127.0.0.1:3000/garage/${updateId}`,
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
      console.log(error);
    }
  };

  return (
    <div className="flex gap-1">
      <input
        type="text"
        className="border w-28"
        placeholder="Type car name"
        onChange={nameHandler}
        ref={inputRef}
      />
      <input
        type="color"
        value={color}
        className="w-5"
        onChange={colorHandler}
      />
      <button onClick={updateCar}>Update</button>
    </div>
  );
}

export default UpdateCar;

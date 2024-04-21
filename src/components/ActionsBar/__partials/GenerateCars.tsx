import React from 'react';
import axios from 'axios';
import { firstPartName, secondPartName } from '../../../constants/random-names';
import { ICars } from '../../../interfaces/ICars';
import { getCars } from '../../../api';
import Api from '../../../constants/api';

const randomNumber = (): number => Math.floor(Math.random() * 10);

const randomColor = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};
interface Props {
  page: number;
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
}

function GenerateCars({ page, setCars, setTotalCarsCount }: Props) {
  const carGenerate = () => {
    for (let i: number = 0; i < 100; i += 1) {
      const name: string = `${firstPartName[randomNumber()]} ${secondPartName[randomNumber()]}`;
      const color = randomColor();

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
          .then();
      } catch {
        /* empty */
      }
    }
    try {
      getCars(page).then(data => {
        if (data.statusText !== 'OK') throw new Error('wrong data');
        setCars(data.data);
        setTotalCarsCount(data.headers['x-total-count']);
      });
    } catch {
      /* empty */
    }
  };

  return (
    <div>
      <button
        type="button"
        className="border border-green-300 pl-1.5 pr-1.5 rounded-xl hover:border-green-500 "
        onClick={carGenerate}
      >
        Generate Cars
      </button>
    </div>
  );
}

export default GenerateCars;

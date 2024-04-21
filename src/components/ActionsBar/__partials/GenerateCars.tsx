import React from 'react';
import axios from 'axios';
import { firstPartName, secondPartName } from '../../../constants/random-names';
import { ICars } from '../../../interfaces/ICars';
import { getCars } from '../../../api';

interface Props {
  page: number;
  setCars: React.Dispatch<ICars[]>;
  setTotalCarsCount: React.Dispatch<React.SetStateAction<number | null>>;
}

const randomNumber = (): number => Math.floor(Math.random() * 10);

const randomColor = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

function GenerateCars({ page, setCars, setTotalCarsCount }: Props) {
  const carGenerate = () => {
    for (let i: number = 0; i < 100; i += 1) {
      const name: string = `${firstPartName[randomNumber()]} ${secondPartName[randomNumber()]}`;
      const color = randomColor();

      try {
        axios
          .post(
            'http://127.0.0.1:3000/garage/',
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
            console.log('good');
          });
      } catch (error) {
        console.log(error);
      }
    }
    try {
      getCars(page).then(data => {
        if (data.statusText !== 'OK') throw new Error('wrong data');
        setCars(data.data);
        setTotalCarsCount(data.headers['x-total-count']);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className="border border-green-300 pl-1.5 pr-1.5 rounded-xl hover:border-green-500 "
        onClick={carGenerate}
      >
        Generate Cars
      </button>
    </div>
  );
}

export default GenerateCars;

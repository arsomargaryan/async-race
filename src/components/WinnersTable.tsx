import React from 'react';
import { IWinner } from '../interfaces/IWinner';
import WinnerItem from './WinnerItem';

interface Props {
  winners: IWinner[];
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

function WinnersTable({ winners, sort, setSort, order, setOrder }: Props) {
  const sortHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    if (sort === '') {
      setSort(value);
    } else if (sort === value) {
      if (order === 'ABC') {
        setOrder('DESC');
      } else setOrder('ABC');
    } else {
      setSort(value);
    }
  };

  return (
    <div className="mt-5">
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-[19%] text-left">
              <button
                type="button"
                onClick={sortHandler}
                value="id"
                className="underline text-amber-400"
              >
                No
              </button>
            </th>
            <th className="w-[19%] text-left">Car</th>
            <th className="w-[19%] text-left">Name</th>
            <th className="w-[19%] text-left">
              <button
                type="button"
                onClick={sortHandler}
                value="wins"
                className="underline text-amber-400"
              >
                Wins
              </button>
            </th>
            <th className="w-[19%] text-left">
              <button
                type="button"
                onClick={sortHandler}
                value="time"
                className="underline text-amber-400"
              >
                Best Time(seconds)
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {winners.map(winner => (
            <WinnerItem key={winner.id} winner={winner} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WinnersTable;

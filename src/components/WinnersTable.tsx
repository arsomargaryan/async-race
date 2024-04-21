import React from 'react';
import { IWinner } from '../interfaces/IWinner';
import WinnerItem from './WinnerItem';

interface Props {
  winners: IWinner[];
}

function WinnersTable({ winners }: Props) {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-[19%]">No</th>
            <th className="w-[19%]">Car</th>
            <th className="w-[19%]">Name</th>
            <th className="w-[19%]">Wins</th>
            <th className="w-[19%]">Best Time(seconds)</th>
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

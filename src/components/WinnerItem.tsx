import React from 'react';
import { IWinner } from '../interfaces/IWinner';

interface Props {
  winner: IWinner;
}

function WinnerItem({ winner }: Props) {
  return (
    <tr>
      <td className="text-center">{winner.id}</td>
      <td className="text-center">
        <i aria-label="Car icon" className="fa-solid fa-car-side" />
      </td>
      <td className="text-center">name</td>
      <td className="text-center">{winner.wins}</td>
      <td className="text-center">{winner.time}</td>
    </tr>
  );
}

export default WinnerItem;

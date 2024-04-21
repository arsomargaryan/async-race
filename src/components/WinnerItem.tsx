import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IWinner } from '../interfaces/IWinner';
import Api from '../constants/api';
import { ICars } from '../interfaces/ICars';

interface Props {
  winner: IWinner;
}

function WinnerItem({ winner }: Props) {
  const [car, setCar] = useState<ICars | null>(null);

  useEffect(() => {
    axios.get(`${Api.HOST_URL}/garage/${winner.id}`).then(response => {
      setCar(response.data);
    });
  }, [winner.id]);

  return (
    <tr>
      <td className="text-left">{winner.id}</td>
      <td className="text-left">
        <i
          aria-label="Car icon"
          className="fa-solid fa-car-side text-3xl"
          style={{ color: car?.color }}
        />
      </td>
      <td className="text-left">{car?.name}</td>
      <td className="text-left">{winner.wins}</td>
      <td className="text-left">{winner.time}</td>
    </tr>
  );
}

export default WinnerItem;

import React, { useEffect } from 'react';
import axios from 'axios';
import Api from '../constants/api';

interface Props {
  winner: {
    id: number;
    time: number;
    name: string;
  };
}

function WinnerModal({ winner }: Props) {
  useEffect(() => {
    try {
      axios
        .get(`${Api.HOST_URL}/winners/${winner.id}`)
        .then(response => {
          axios
            .put(`${Api.HOST_URL}/winners/${winner.id}`, {
              wins: response.data.wins + 1,
              time:
                winner.time < response.data.time
                  ? winner.time
                  : response.data.time
            })
            .then();
        })
        .catch(data => {
          if (data.response.status === 404) {
            axios
              .post(`${Api.HOST_URL}/winners`, {
                id: winner.id,
                wins: 1,
                time: winner.time
              })
              .then();
          }
        });
    } catch {
      /* empty */
    }
  }, [winner.id, winner.time]);

  return (
    <div className="w-36 h-32 fixed top-[40%] left-[45%] border border-fuchsia-700 rounded-2xl flex flex-col justify-center items-center">
      <div className="text-xl text-amber-500">Winner:</div>
      <div className="text-xl text-green-500">{winner.name}</div>
      <div className="text-xl text-green-500">{winner.time}s</div>
    </div>
  );
}

export default WinnerModal;

import React, { useEffect } from 'react';

interface Props {
  winner: {
    id: number;
    time: number;
    name: string;
  };
}

function WinnerModal({ winner }: Props) {
  useEffect(() => {}, [winner.id]);

  return (
    <div className="border-amber-100 w-36 h-32 fixed top-[40%] left-[50%]">
      <div>Winner</div>
      <div>{winner.name}</div>
      <div>{winner.time}ms</div>
    </div>
  );
}

export default WinnerModal;

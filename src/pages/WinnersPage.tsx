import React, { useEffect, useState } from 'react';
import { IWinner } from '../interfaces/IWinner';
import { getWinners } from '../api';
import WinnersTable from '../components/WinnersTable';
import PaginationWinners from '../components/PaginationWinners';

function WinnersPage() {
  const [winners, setWinners] = useState<IWinner[]>([]);
  const [totalWinnnersCount, setTotalWinnnersCount] = useState<number | null>(
    null
  );
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    try {
      getWinners(page).then(data => {
        if (data.statusText !== 'OK') throw new Error('error');
        setWinners(data.data);
        setTotalWinnnersCount(data.headers['x-total-count']);
      });
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  return (
    <div>
      <div>Winners</div>
      <WinnersTable winners={winners} />
      <PaginationWinners />
    </div>
  );
}

export default WinnersPage;

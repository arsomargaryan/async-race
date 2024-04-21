import React, { useEffect, useState } from 'react';
import { IWinner } from '../interfaces/IWinner';
import { getWinners } from '../api';
import WinnersTable from '../components/WinnersTable';
import PaginationWinners from '../components/PaginationWinners';

function WinnersPage() {
  const [winners, setWinners] = useState<IWinner[]>([]);
  const [totalWinnersCount, setTotalWinnersCount] = useState<number | null>(
    null
  );
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('');
  const [order, setOrder] = useState<string>('DESC');

  useEffect(() => {
    try {
      getWinners(page, sort, order).then(data => {
        if (data.statusText !== 'OK') throw new Error('error');
        setWinners(data.data);
        setTotalWinnersCount(data.headers['x-total-count']);
      });
    } catch {
      /* empty */
    }
  }, [order, page, sort]);

  return (
    <div>
      <div className="text-5xl text-fuchsia-700  shadow-inner shadow-amber-300 pb-2 w-56 text-center rounded-xl">
        Winners
      </div>
      <WinnersTable
        winners={winners}
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />
      {totalWinnersCount && (
        <PaginationWinners
          totalWinnersCount={totalWinnersCount}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default WinnersPage;

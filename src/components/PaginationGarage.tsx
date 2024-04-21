import React, { useEffect, useState } from 'react';

interface Props {
  carCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function PaginationGarage({ carCount, page, setPage }: Props) {
  const [pageCount, setPageCount] = useState<number>(Math.ceil(carCount / 7));

  useEffect(() => {
    setPageCount(Math.ceil(carCount / 7));
  }, [carCount]);

  const nextPage = (): void => {
    setPage(prev => prev + 1);
    if (page === pageCount) setPage(1);
  };

  const prevPage = (): void => {
    setPage(prev => prev - 1);
    if (page === 1) setPage(pageCount);
  };

  return (
    <div className="flex justify-between m-10 text-xl">
      <div className="shadow-2xl">Garage ({carCount})</div>
      <div>
        <i
          className="fa-solid fa-arrow-left cursor-pointer mr-1"
          style={{ cursor: 'pointer' }}
          onClick={prevPage}
        />
        Page {page}
        <i
          className="fa-solid fa-arrow-right cursor-pointer ml-1"
          style={{ cursor: 'pointer' }}
          onClick={nextPage}
        />
      </div>
    </div>
  );
}

export default PaginationGarage;

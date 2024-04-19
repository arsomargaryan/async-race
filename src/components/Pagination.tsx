import React, { useState } from 'react';

interface Props {
  carCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ carCount, page, setPage }: Props) {
  const [pageCount] = useState<number>(Math.ceil(carCount / 7));

  const nextPage = (): void => {
    setPage(prev => prev + 1);
    if (page === pageCount) setPage(1);
  };

  const prevPage = (): void => {
    setPage(prev => prev - 1);
    if (page === 1) setPage(pageCount);
  };

  return (
    <div
      className="flex justify-between m-10"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px'
      }}
    >
      <div>Garage ({carCount})</div>
      <div>
        <i
          className="fa-solid fa-arrow-left cursor-pointer"
          style={{ cursor: 'pointer' }}
          onClick={prevPage}
        />
        Page {page}
        <i
          className="fa-solid fa-arrow-right cursor-pointer"
          style={{ cursor: 'pointer' }}
          onClick={nextPage}
        />
      </div>
    </div>
  );
}

export default Pagination;

import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import GaragePage from './pages/GaragePage';
import WinnersPage from './pages/WinnersPage';
import Header from './components/Header';
import { ICars } from './interfaces/ICars';
import { getCars } from './api';

function App() {
  const [cars, setCars] = useState<ICars[]>([]);
  const [totalCarsCount, setTotalCarsCount] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [updateId, setUpdateId] = useState<number | null>(null);
  const [isRaceAll, setIsRaceAll] = useState(false);

  useEffect(() => {
    try {
      getCars(page).then(data => {
        if (data.statusText !== 'OK') throw new Error('error');
        setCars(data.data);
        setTotalCarsCount(data.headers['x-total-count']);
      });
    } catch {
      /* empty */
    }
  }, [page]);

  return (
    <div className="mx-auto container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <GaragePage
              cars={cars}
              setCars={setCars}
              carCount={totalCarsCount}
              setTotalCarsCount={setTotalCarsCount}
              page={page}
              setPage={setPage}
              setUpdateId={setUpdateId}
              isRaceAll={isRaceAll}
              setIsRaceAll={setIsRaceAll}
              updateId={updateId}
            />
          }
        />
        <Route path="/winners" element={<WinnersPage />} />
      </Routes>
    </div>
  );
}

export default App;

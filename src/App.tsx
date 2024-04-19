import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-duplicates
import GaragePage from './pages/GaragePage';
// eslint-disable-next-line import/no-duplicates
import WinnersPage from './pages/WinnersPage';
import Header from './components/Header';
import ActionsBar from './components/actionsBar/ActionsBar';
import { ICars } from './interfaces/ICars';
import { getCars } from './api';

function App() {
  const [cars, setCars] = useState<ICars[]>([]);
  const [totalCarsCount, setTotalCarsCount] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    try {
      getCars(page).then(data => {
        if (data.statusText !== 'OK') throw new Error('error');
        setCars(data.data);
        setTotalCarsCount(data.headers['x-total-count']);
      });
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  return (
    <div className="mx-auto container">
      <Header />
      <ActionsBar />
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
            />
          }
        />
        {'}'} /{'>'}
        <Route path="/winners" element={<WinnersPage />} />
      </Routes>
    </div>
  );
}

export default App;

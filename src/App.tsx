import React from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-duplicates
import GaragePage from './pages/GaragePage';
// eslint-disable-next-line import/no-duplicates
import WinnersPage from './pages/GaragePage';
import Header from './components/Header';
import ActionsBar from './components/actionsBar/ActionsBar';

function App() {
  return (
    <div className="mx-auto container">
      <Header />
      <ActionsBar />
      <Routes>
        <Route path="/" element={<GaragePage />} />
        <Route path="/winners" element={<WinnersPage />} />
      </Routes>
    </div>
  );
}

export default App;

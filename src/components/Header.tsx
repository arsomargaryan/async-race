import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-400 " style={{ backgroundColor: 'gray' }}>
      <div
        className="flex flex-col gap-2 items-start m-10"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          alignItems: 'start',
          margin: '40px'
        }}
      >
        <button type="button" onClick={() => navigate('/')}>
          Garage
        </button>
        <button type="button" onClick={() => navigate('/winners')}>
          Winners
        </button>
      </div>
    </div>
  );
}

export default Header;

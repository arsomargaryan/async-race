import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 items-start m-5 mb-14 relative">
      <button
        type="button"
        className="border-2 border-amber-400 hover:border-amber-500 hover:font-bold p-2 w-24 rounded-xl"
        onClick={() => navigate('/')}
      >
        Garage
      </button>
      <button
        type="button"
        className="border-2 border-amber-400 hover:border-amber-500 hover:font-bold p-2 w-24 rounded-xl"
        onClick={() => navigate('/winners')}
      >
        Winners
      </button>

      <div className="absolute top-4 right-[30%] text-4xl p-4 flex flex-col">
        <span>ASYNC</span>
        <span>RACE</span>
      </div>
    </div>
  );
}

export default Header;

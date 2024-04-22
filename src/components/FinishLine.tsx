import React from 'react';

function FinishLine() {
  console.log(window.innerWidth + 250 - window.innerWidth);
  return (
    <div className="-z-20 absolute text-green-500 border border-gray-400  bg-gray-100 w-7 h-full right-[110px] top-0 flex justify-center items-center">
      <div className="rotate-90 text-2xl">Finish</div>
    </div>
  );
}

export default FinishLine;

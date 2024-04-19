import React from 'react';

interface Props {
  mark: string;
  color: string;
}
function Car({ mark, color }: Props) {
  return (
    <>
      <i
        className="fa-solid fa-car-side text-4xl"
        style={{ color, fontSize: '30px' }}
      />
      <span
        className="opacity-15 text-xl ml-2"
        style={{ marginLeft: '5px', opacity: '0.3' }}
      >
        {mark}
      </span>
    </>
  );
}

export default Car;

import React, { useEffect, useState } from 'react';
import { IEngineStart } from '../interfaces/IEngineStart';

interface Props {
  mark: string;
  color: string;
  isDrive: boolean;
  engineState: IEngineStart | null;
}
function Car({ mark, color, isDrive, engineState }: Props) {
  const [speed, setSpeed] = useState<string>('');
  const [screenSize, setScreenSize] = useState<string>('');

  useEffect(() => {
    setSpeed(`${Math.ceil(engineState?.distance / engineState?.velocity)}ms`);
    setScreenSize(`${window.innerWidth - 180}px`);
  }, [engineState]);

  return (
    <>
      <i
        className={`fa-solid fa-car-side text-4xl ${isDrive ? 'carAnimation' : ''}`}
        style={{
          color,
          fontSize: '30px',
          '--animation-duration': speed,
          '--screen-size': screenSize
        }}
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

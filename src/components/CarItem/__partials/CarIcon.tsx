import React, { useEffect, useRef, useState, CSSProperties } from 'react';
import { IEngineStart } from '../../../interfaces/IEngineStart';

interface Props {
  mark: string;
  color: string;
  isDrive: boolean;
  engineState: IEngineStart | null;
  isBroke: boolean;
}
function CarIcon({ mark, color, isDrive, engineState, isBroke }: Props) {
  const [speed, setSpeed] = useState<string>('');
  const [screenSize, setScreenSize] = useState<string>('');
  const carRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setSpeed(`${(engineState?.distance / engineState?.velocity).toFixed(2)}ms`);
    setScreenSize(`${window.innerWidth - 180}px`);
  }, [engineState]);

  useEffect(() => {
    if (!isBroke || !carRef.current) return;
    carRef.current.style.animationPlayState = 'paused';
  }, [isBroke]);

  return (
    <>
      <i
        className={`fa-solid fa-car-side text-4xl ${isDrive ? 'carAnimation' : ''}`}
        style={
          {
            color,
            fontSize: '30px',
            '--animation-duration': speed,
            '--screen-size': screenSize
          } as CSSProperties
        }
        ref={carRef}
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

export default CarIcon;

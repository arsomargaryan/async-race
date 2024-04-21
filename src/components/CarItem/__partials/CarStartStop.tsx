import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { IEngineStart } from '../../../interfaces/IEngineStart';
import Globals from '../../../constants/globals';

interface Props {
  id: number;
  carName: string;
  setEngineState: React.Dispatch<React.SetStateAction<IEngineStart | null>>;
  setIsDrive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBroke: React.Dispatch<React.SetStateAction<boolean>>;
  isRaceAll: boolean;
  setWinner: React.Dispatch<
    React.SetStateAction<{
      id: number;
      time: number;
      name: string;
    } | null>
  >;
}
function CarStartStop({
  id,
  carName,
  setEngineState,
  setIsDrive,
  setIsBroke,
  isRaceAll,
  setWinner
}: Props) {
  const [isRace, setIsRace] = useState<boolean>(false);
  const skipFirstEffect = useRef<boolean>(true);

  const startFunc = useCallback(() => {
    setIsRace(prevState => !prevState);

    try {
      axios
        .patch(`http://127.0.0.1:3000/engine/?id=${id}&status=started`)
        .then(response => {
          if (response.statusText === 'OK') {
            setEngineState(response.data);
            setIsDrive(true);
            axios
              .patch(`http://127.0.0.1:3000/engine/?id=${id}&status=drive`)
              .then(data => {
                if (data?.data.success === true) {
                  if (Globals.winnersModalAlreadyShown) return;
                  if (Globals.hasRaceStarted) {
                    Globals.winnersModalAlreadyShown = true;
                    setWinner({
                      id,
                      name: carName,
                      time: Number(
                        (
                          response.data.distance / response.data.velocity
                        ).toFixed(2)
                      )
                    });
                  }
                }
              })
              .catch(hey => {
                if (hey.request.status === 500) {
                  setIsBroke(true);
                }
              });
          }
        });
    } catch {
      /* empty */
    }
  }, [id, setEngineState, setIsDrive, setWinner, carName, setIsBroke]);

  const stopFunc = useCallback(() => {
    setIsRace(prevState => !prevState);
    setIsDrive(false);
    setIsBroke(false);
    setWinner(null);
    try {
      axios
        .patch(`http://127.0.0.1:3000/engine/?id=${id}&status=stopped`)
        .then();
    } catch {
      /* empty */
    }
  }, [id, setIsBroke, setIsDrive, setWinner]);

  useEffect(() => {
    if (skipFirstEffect.current) {
      skipFirstEffect.current = false;
      return;
    }
    if (isRaceAll) {
      Globals.hasRaceStarted = true;
      startFunc();
    } else {
      Globals.hasRaceStarted = false;
      Globals.winnersModalAlreadyShown = false;
      stopFunc();
    }
  }, [isRaceAll, startFunc, stopFunc]);

  return (
    <div className="flex flex-col">
      <button
        className={`border-2 border-amber-400 text-amber-400 p-1 rounded-b text-xs ${isRace ? 'border-gray-500 text-gray-500' : 'hover:border-amber-500'}`}
        onClick={startFunc}
        disabled={isRace}
      >
        A
      </button>
      <button
        className={`border-2 border-red-400 text-red-500 p-1 rounded-b text-xs mt-1 ${!isRace ? 'border-gray-500 text-gray-500' : 'hover:border-red-500'}`}
        onClick={stopFunc}
        disabled={!isRace}
      >
        B
      </button>
    </div>
  );
}

export default CarStartStop;

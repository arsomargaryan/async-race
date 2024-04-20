import React, { useState } from 'react';
import axios from 'axios';
import { IEngineStart } from '../interfaces/IEngineStart';

interface Props {
  id: number;
  setEngineState: React.Dispatch<React.SetStateAction<IEngineStart | null>>;
  setIsDrive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBroke: React.Dispatch<React.SetStateAction<boolean>>;
}
function CarStartStop({ id, setEngineState, setIsDrive, setIsBroke }: Props) {
  const [isRace, setIsRace] = useState<boolean>(false);
  const startFunc = () => {
    setIsRace(!isRace);
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
                  console.log('good');
                }
              })
              .catch(hey => {
                if (hey.request.status === 500) {
                  setIsBroke(true);
                }
              });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const stopFunc = () => {
    setIsRace(!isRace);
    setIsDrive(false);
    setIsBroke(false);
    try {
      axios
        .patch(`http://127.0.0.1:3000/engine/?id=${id}&status=stopped`)
        .then(response => {
          if (response.statusText === 'OK') {
            console.log('good');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex flex-col"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <button className="text-xs" onClick={startFunc} disabled={isRace}>
        A
      </button>
      <button className="text-xs" onClick={stopFunc} disabled={!isRace}>
        B
      </button>
    </div>
  );
}

export default CarStartStop;

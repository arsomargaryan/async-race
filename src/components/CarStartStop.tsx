import React from 'react';
import axios from 'axios';
import { IEngineStart } from '../interfaces/IEngineStart';

interface Props {
  id: number;
  setEngineState: React.Dispatch<React.SetStateAction<IEngineStart | null>>;
  setIsDrive: React.Dispatch<React.SetStateAction<boolean>>;
}
function CarStartStop({ id, setEngineState, setIsDrive }: Props) {
  const startFunc = () => {
    try {
      axios
        .patch(`http://127.0.0.1:3000/engine/?id=${id}&status=started`)
        .then(response => {
          if (response.statusText === 'OK') {
            setEngineState(response.data);
            axios
              .patch(`http://127.0.0.1:3000/engine/?id=${id}&status=drive`)
              .then(data => {
                if (data.data.success === true) {
                  setIsDrive(true);
                } else setIsDrive(false);
              });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const stopFunc = () => {
    setIsDrive(false);
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
      <button className="text-xs" onClick={startFunc}>
        A
      </button>
      <button className="text-xs" onClick={stopFunc}>
        B
      </button>
    </div>
  );
}

export default CarStartStop;

import React from 'react';
import CarsRace from './CarsRace';
import CreateCar from './CreateCar';
import UpdateCar from './UpdateCar';
import GenerateCars from './GenerateCars';

function ActionsBar() {
  return (
    <div
      className="flex justify-between items-center"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <CarsRace />
      <CreateCar />
      <UpdateCar />
      <GenerateCars />
    </div>
  );
}

export default ActionsBar;

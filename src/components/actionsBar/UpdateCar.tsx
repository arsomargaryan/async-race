import React from 'react';

function UpdateCar() {
  return (
    <div className="flex gap-1">
      <input type="text" className="border w-28" placeholder="Type car name" />
      <input type="color" className="w-5" />
      <button>Update</button>
    </div>
  );
}

export default UpdateCar;

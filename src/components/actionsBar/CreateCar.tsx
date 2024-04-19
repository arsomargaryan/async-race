import React from 'react';

function CreateCar() {
  return (
    <div className="flex gap-1">
      <input type="text" className="border w-28" placeholder="Type car name" />
      <input type="color" className="w-5" />
      <button>Create</button>
    </div>
  );
}

export default CreateCar;

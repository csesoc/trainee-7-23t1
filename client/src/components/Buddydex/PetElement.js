import React from 'react';

function PetElement({ imageSrc, name, type, description, collected }) {
  return (
    <div className={`pet ${collected ? 'collected' : ''}`}>
      <img src={imageSrc} alt="Pet" width="50px" />
      <h3>{collected ? name : '???'}</h3>
      <p>{collected ? type : '???'}</p>
      <p>{collected ? description : '???'}</p>
    </div>
  );
}

export default PetElement;
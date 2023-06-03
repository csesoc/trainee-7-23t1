import React, { useState } from 'react';

function Grave(props) {
  const { petImage, name, deathDate, funFact } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="grave-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="grave-image" src="https://art.pixilart.com/1d506ddb543c512.png" alt="Grave" width="200px"/>
      {isHovered && (
        <div className="grave-info">
          <div className="pet-image">
            <img src={petImage} alt={name} />
          </div>
          <div className="pet-name">{name}</div>
          <div className="death-date">{deathDate}</div>
          <div className="fun-fact">{funFact}</div>
        </div>
      )}
    </div>
  );
}

export default Grave;
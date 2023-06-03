import React, { useState, useEffect } from 'react';

function Pet(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (props.tag === 'running') {
      setIsRunning(true);
    }
  }, [props.tag]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        const top = Math.random() * window.innerHeight;
        const left = Math.random() * window.innerWidth;
        setPosition({ top, left });
      }, 30000); 

      return () => {
        clearInterval(interval);
      };
    }
  }, [isRunning]);

  return (
    <div
      className={`pet-container ${isRunning ? 'running' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      style={{ top: position.top, left: position.left }}
    >
        <img id="pet" src={props.image} 
        width = "200px" alt = {props.name}></img>
        {isHovered && (
            <div className="details-popup">
                <p>Name: {props.name}</p>
                <p>Birthday: {props.birthday}</p>
                <p>Limbs: {props.limbs}</p>
            </div>
        )}
    </div>
  );
}

export default Pet;

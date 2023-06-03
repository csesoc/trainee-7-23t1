import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock">
      <div className="icon">
        <img src="https://img.freepik.com/free-icon/sun_318-334779.jpg" alt="Sun" width="30px"/>
      </div>
      <div className="time">{time.toLocaleTimeString()}</div>
      <div className="pet-count">Pet Count: 1</div>
    </div>
  );
}

export default Clock;
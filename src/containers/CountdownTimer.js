import React, { useEffect, useState } from "react";


const  CountdownTimer = ({startDate}) => {
  const calculateTimeLeft = () => {
    // check time zone
    // maybe better to use moment
    const difference = +new Date(startDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
    // maybe translate intervals
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  // false could be replaced by a gentle message
  return (
    <div>
      {timerComponents.length ? timerComponents : false}
    </div>
  );
}

export default CountdownTimer;
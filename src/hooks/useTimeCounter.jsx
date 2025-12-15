import { useEffect, useState } from "react";

const useTimerCounter = (targetDate, extraHours) => {
  // Compute final timestamp = targetDate + extraHours
  const countDownDate =
    new Date(targetDate).getTime() + extraHours * 60 * 60 * 1000;

  const [countDown, setCountDown] = useState(() =>
    Math.max(countDownDate - new Date().getTime(), 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = Math.max(countDownDate - now, 0);
      setCountDown(distance);

      if (distance === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
 const totalHours = Math.floor(countDown / (1000 * 60 * 60)); // total hours
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [ totalHours, minutes, seconds];
};

export { useTimerCounter };

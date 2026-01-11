import { useEffect, useState } from "react";

const useTimerCounter = (targetDate, extraHours) => {

  const countDownDate = new Date(targetDate).getTime() + extraHours * 60 * 60 * 1000;

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
  const totalHours = Math.floor(countDown / (1000 * 60 * 60));

  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [totalHours, minutes, seconds];
};
export { useTimerCounter };


const useTimerCounterTwo = (targetDate, extraHours) => {

  const countDownDate = new Date(targetDate).getTime() + extraHours * 60 * 60 * 1000;

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
  return getReturnValues2(countDown);
};
const getReturnValues2 = (countDown) => {

const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

return [ days, hours, minutes, seconds];

};
export { useTimerCounterTwo };

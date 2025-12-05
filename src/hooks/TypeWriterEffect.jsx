import { useEffect, useState } from "react";

const TypeWriterEffect = ({
  text,
  delay,
  infinite,
  restartDelay = 800,
  className,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    let interval;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      interval = setInterval(() => {
        setCurrentIndex(0);
        setCurrentText("");
      }, text.length * delay + restartDelay);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [currentIndex, delay, infinite, text, restartDelay]);

  return (
    <span className={`${className ? className : "text-primary"}`}>
      {`${currentText?.split("undefined").join(" ")}`}
    </span>
  );
};

export default TypeWriterEffect;

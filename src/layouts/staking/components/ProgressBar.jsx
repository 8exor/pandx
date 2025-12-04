import { useEffect, useState } from "react";

export const ProgressBar = ({ label, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(value);
    }, 100);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="progress-container">
      <div className="progress-bar">

        {/* FULL width centered label */}
        <span className="progress-text">
          {label} {progress}%
        </span>

        {/* Animated fill */}
        <div
          className="progress-fill loading-animation"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
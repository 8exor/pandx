import { useEffect, useState } from "react";

export default function MaxCapProgress({ value, maxCap, percent }) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const safeValue = Math.min(100, Math.max(0, value));
    setTimeout(() => setWidth(`${safeValue}%`), 50);
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2 md:ml-auto">
      {maxCap && (
        <p className="text-[16px] w-full text-center sm:text-[18px] md:text-[20px]">
          Max Cap
        </p>
      )}

      {/* Progress Container */}
      <div
        className={`${
          maxCap ? "w-full md:w-30" : "w-20"
        } h-3 rounded-full bg-[#26316A] overflow-hidden relative`}
      >
        {/* Progress Fill */}
        <div
          className="h-full bg-gradient-to-r from-[#28DB8C] via-[#6AEA94] to-[#B8FC9D]
                     rounded-full transition-all duration-[1500ms] ease-out"
          style={{ width }}
        />

        {/* Centered Percentage */}
        {percent && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[10px] font-extrabold text-white">
              {percent}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function MaxCapProgress({ value, maxCap }) {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    // ensure valid range (0–100)
    const safeValue = Math.min(100, Math.max(0, value));
    setTimeout(() => setWidth(`${safeValue}%`), 50);
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2  md:ml-auto">
    {maxCap &&  <p className="text-[16px] w-full text-center sm:text-[18px] 
        md:text-[20px]">Max Cap</p>}

      <div className={`${maxCap ? "w-full md:w-30" : "w-20"} h-4 rounded-full bg-[#26316A] overflow-hidden`}>
        <div
          className="h-full bg-gradient-to-r from-[#28DB8C] via-[#6AEA94] to-[#B8FC9D] rounded-full transition-all duration-[1500ms] ease-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}
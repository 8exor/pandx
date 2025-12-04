import React, { useEffect, useState } from "react";

const FullPageLoader = ({ defaultLoader = true }) => {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    const clear = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => {
      clearInterval(clear);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-90 bg-[#000000f5] flex justify-center items-center">
      <div className="flex items-center justify-center">
        {defaultLoader ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="matrix(0 0 0 0 12 12)"
            >
              <animateTransform
                id="svgSpinnersPulseRingsMultiple0"
                attributeName="transform"
                begin="0;svgSpinnersPulseRingsMultiple2.end"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="translate"
                values="12 12;0 0"
              />
              <animateTransform
                additive="sum"
                attributeName="transform"
                begin="0;svgSpinnersPulseRingsMultiple2.end"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="scale"
                values="0;1"
              />
              <animate
                attributeName="opacity"
                begin="0;svgSpinnersPulseRingsMultiple2.end"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                values="1;0"
              />
            </path>
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="matrix(0 0 0 0 12 12)"
            >
              <animateTransform
                id="svgSpinnersPulseRingsMultiple1"
                attributeName="transform"
                begin="svgSpinnersPulseRingsMultiple0.begin+0.2s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="translate"
                values="12 12;0 0"
              />
              <animateTransform
                additive="sum"
                attributeName="transform"
                begin="svgSpinnersPulseRingsMultiple0.begin+0.2s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="scale"
                values="0;1"
              />
              <animate
                attributeName="opacity"
                begin="svgSpinnersPulseRingsMultiple0.begin+0.2s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                values="1;0"
              />
            </path>
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="matrix(0 0 0 0 12 12)"
            >
              <animateTransform
                id="svgSpinnersPulseRingsMultiple2"
                attributeName="transform"
                begin="svgSpinnersPulseRingsMultiple0.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="translate"
                values="12 12;0 0"
              />
              <animateTransform
                additive="sum"
                attributeName="transform"
                begin="svgSpinnersPulseRingsMultiple0.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="scale"
                values="0;1"
              />
              <animate
                attributeName="opacity"
                begin="svgSpinnersPulseRingsMultiple0.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                values="1;0"
              />
            </path>
          </svg>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              />
              <rect
                width="2"
                height="7"
                x="11"
                y="6"
                fill="currentColor"
                rx="1"
              >
                <animateTransform
                  attributeName="transform"
                  dur="9s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </rect>
              <rect
                width="2"
                height="9"
                x="11"
                y="11"
                fill="currentColor"
                rx="1"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </rect>
            </svg>
            {timer} Second
            <p className="text-2xl text-center text-secondary w-2xl max-md:w-full max-md:text-xl">
              Please Wait don't Refresh The Page
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullPageLoader;

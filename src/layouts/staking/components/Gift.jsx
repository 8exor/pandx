import { useEffect } from "react";
import anime from "https://esm.sh/animejs@3.2.1/lib/anime.es.js";

const Gift = () => {
  useEffect(() => {
    let coin;
    let coinRotation;

    const createCoin = () => {
      coin = document.createElement("img");
      coin.src = "assets/images/Panda-logo-Final.png";
      coin.className = "coin";

      Object.assign(coin.style, {
        position: "absolute",
        width: "35px",
        height: "35px",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: -10,
      });

      document.querySelector(".gift-container").appendChild(coin);
    };

    const startCycle = () => {
      // 1️⃣ Open Lid
      anime({
        targets: ".lid",
        translateX: [0, 20],
        translateY: [38, -5],
        rotate: ["0turn", "0.1turn"],
        duration: 1000,
        easing: "easeOutQuad",
        complete: showCoin,
      });
    };

    const showCoin = () => {
      createCoin();

      anime({
        targets: coin,
        translateY: [50, -10],
        duration: 800,
        easing: "easeOutQuad",
        begin: () => {
          coin.style.zIndex = -10;
        },
        complete: () => {
          coinRotation = anime({
            targets: coin,
            rotateY: "+=360",
            loop: true,
            duration: 2000,
            easing: "linear",
          });

          // Wait 2 seconds then hide coin
          setTimeout(hideCoin, 3000);
        },
      });
    };

    const hideCoin = () => {
      coinRotation.pause();

      anime({
        targets: coin,
        translateY: [-10, 60],
        duration: 800,
        easing: "easeInQuad",
        complete: () => {
          coin.remove();
          closeLid();
        },
      });
    };

    const closeLid = () => {
      anime({
        targets: ".lid",
        translateX: [20, 0],
        translateY: [-5, 38],
        rotate: ["0.1turn", "0turn"],
        duration: 1000,
        easing: "easeInQuad",
        complete: () => {
          // 🔁 Restart cycle after 2s
          setTimeout(startCycle, 2000);
        },
      });
    };

    // 🚀 Start animation
    startCycle();
  }, []);

  return (
    <div className="py-6 text-2xl text-center">
      <div
        className="flex flex-col items-center justify-center gift-container"
        style={{ perspective: "900px", position: "relative" }}
      >
        <div className="z-10 lid w-18 h-18 sm:w-20 sm:h-20">
          <img src="assets/images/Box-Top.png" alt="" />
        </div>

        <div className="w-18 h-18 sm:w-20 sm:h-20">
          <img src="assets/images/Box-Bottom.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gift;

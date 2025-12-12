import { useEffect } from "react";
import anime from "https://esm.sh/animejs@3.2.1/lib/anime.es.js";

const Gift = () => {

  useEffect(() => {
   
    // Lid animation


    // anime({
    //   targets: ".lid",
    //   translateX: 10,
    //   translateY: 25, 
    //   rotate: "0.1turn",
    //   duration: 1000,
    //   easing: "easeOutQuad",
    //   delay: 300,
    //   complete: () => setTimeout(showCoin, 500)
    // });
    anime({
  targets: ".lid",
  translateX: [0, 10],
  translateY: [38, 25], // start from 20px, end at 25px
  rotate: ["0turn", "0.1turn"],
  duration: 1000,
  easing: "easeOutQuad",
  delay: 300,
  complete: () => setTimeout(showCoin, 500),
});




    function showCoin() {
      const coin = document.createElement("img");
      coin.src = "assets/images/Panda-logo-Final.png";
      coin.className = "coin";
      Object.assign(coin.style, {
        position: "absolute",
        width: "90px",
        height: "90px",
        left: "0%",
        top: "0%",
        transform: "translate(50%, 10%)",
        zIndex: -10,
      });

      document.body.appendChild(coin);

      anime({
        targets: coin,
        translateY: -42,
        duration: 800,
        easing: "easeOutQuad",

    complete: () => {
      coin.style.zIndex = 10;
      rotateCoin(coin);
    },
        // complete: () => rotateCoin(coin),
      });
    }

    const rotateCoin = (coin) =>
      anime({
        targets: coin,
        rotateX: 0,
        // rotateY: 180,
         rotateY: '+=360',
        loop: true,
        duration: 2000,
        easing: "linear",
  
      });

  }, []);

  return (
    <div className="text-2xl text-center py-6">
      <div className="gift-container flex justify-center flex-col items-center"
        style={{ perspective: "900px" }}>

        <div  className="lid w-20 h-20  z-10">
          <img src="assets/images/Box-Top.png" alt="" />
        </div>

        <div className=" w-20 h-20">
          <img  src="assets/images/Box-Bottom.png" alt="" />
        </div>

      </div>
    </div>
  );
}

export default Gift;

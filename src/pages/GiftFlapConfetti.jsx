import { useEffect, useRef, useState } from "react";
import { animate } from 'animejs';
export default function GiftFlapConfetti() {
  const lidRef = useRef(null);
  const giftRef = useRef(null);
  const canvasRef = useRef(null);

  const [opened, setOpened] = useState(false);

  // Resize canvas to match element
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.scale(ratio, ratio);
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Confetti particle class
  class Particle {
    constructor(x, y, angle, speed, size, color, gravity, drag, tiltSpeed) {
      this.x = x;
      this.y = y;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.size = size;
      this.color = color;
      this.gravity = gravity;
      this.drag = drag;
      this.tilt = 0;
      this.tiltSpeed = tiltSpeed;
      this.rotation = Math.random() * Math.PI * 2;
    }
    update(dt) {
      this.vx *= this.drag;
      this.vy = this.vy * this.drag + this.gravity * dt;
      this.x += this.vx * dt * 60;
      this.y += this.vy * dt * 60;
      this.tilt += this.tiltSpeed * dt * 60;
      this.rotation += 0.06;
    }
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
      ctx.restore();
    }
  }

  let particles = [];
  let running = false;
  let lastTime = performance.now();

  const emitBurst = (x, y, count) => {
    const colors = ["#FF3B3B", "#FFD93D", "#3BE8FF", "#7A3BFF", "#3BFF7A"];
    for (let i = 0; i < count; i++) {
      const angle = Math.PI / 2 + (Math.random() - 0.5) * 1.2;
      const speed = 2 + Math.random() * 6;
      const size = 6 + Math.random() * 8;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const gravity = 0.045 + Math.random() * 0.08;
      const drag = 0.995 - Math.random() * 0.01;
      const tiltSpeed = (Math.random() - 0.5) * 0.4;
      particles.push(new Particle(x, y, angle, speed, size, color, gravity, drag, tiltSpeed));
    }
  };

  const loop = (now) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dt = Math.min(0.06, (now - lastTime) / 1000);
    lastTime = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => p.update(dt));

    particles = particles.filter(
      (p) =>
        p.y < canvas.height / devicePixelRatio + 60 &&
        p.x > -50 &&
        p.x < canvas.width / devicePixelRatio + 50
    );

    particles.forEach((p) => p.draw(ctx));

    if (running) requestAnimationFrame(loop);
  };

  const openLid = () => {
    if (opened) return;
    setOpened(true);

    const lid = lidRef.current;
    const gift = giftRef.current;

    animate
      .timeline({ easing: "easeOutCubic", duration: 550 })
      .add({
        targets: lid,
        translateY: -18,
        scale: [1, 1.02],
        duration: 180,
      })
      .add({
        targets: lid,
        rotateX: -120,
        duration: 650,
        elasticity: 300,
        update: (anim) => {
          if (!running && anim.currentTime > 150) {
            running = true;
            requestAnimationFrame(loop);

            const rect = gift.getBoundingClientRect();
            const baseX = rect.width / 2;
            const baseY = rect.height * 0.28;

            let bursts = 0;
            const interval = setInterval(() => {
              emitBurst(
                baseX + (Math.random() - 0.5) * 50,
                baseY + (Math.random() - 0.4) * 20,
                18 + Math.floor(Math.random() * 10)
              );
              bursts++;
              if (bursts > 6) {
                clearInterval(interval);
                setTimeout(() => {
                  running = false;
                }, 2000);
              }
            }, 120);
          }
        },
      });
  };

  return (
    <div className="flex items-center justify-center w-full h-full py-10">
      <div>
        <div
          ref={giftRef}
          className="relative w-[260px] h-[200px] perspective-[900px] mx-auto"
        >
          {/* Lid */}
          <div
            ref={lidRef}
            onClick={openLid}
            className="absolute left-1/2 top-0 w-[110%] h-[40%] -translate-x-1/2 -translate-y-[18%] rounded-[10px] flex items-center justify-center cursor-pointer shadow-lg"
            style={{
              background: "linear-gradient(180deg,#ff9a9a,#ff6b6b)",
              transformOrigin: "center bottom",
            }}
          >
            <div className="absolute w-[60px] h-[16px] bg-white/90 rounded-[8px] top-[6px] left-1/2 -translate-x-1/2" />
          </div>

          {/* Confetti Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-10 w-full h-full pointer-events-none"
          />

          {/* Gift Box */}
          <div
            className="absolute bottom-0 left-0 w-full h-[70%] rounded-[8px] shadow-xl flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(180deg,#ff6b6b,#ff3b3b)",
            }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[28px] h-full bg-white/20" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[28px] bg-white/20" />
          </div>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={openLid}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow"
          >
            Open Gift
          </button>
        </div>
      </div>
    </div>
  );
}

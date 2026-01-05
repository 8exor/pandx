import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const RAINBOW = [
  "#ef4444",
  "#f97316",
  "#facc15",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
];

export default function RainbowConfetti({
  duration = 4,   // seconds
  intensity = 5,  // 1–10
  trigger = true, // change to re-trigger
}) {
  const rafId = useRef(null);
  const endAt = useRef(0);

const rainFrame = () => {
  confetti({
    particleCount: intensity * 10,

    angle: 90,
    spread: 180,

    origin: {
      x: Math.random(),
      y: -0.15
    },

    colors: RAINBOW,

    startVelocity: 30, // ❗ lower, not higher
    gravity: 1.2,      // ❗ stronger gravity = reaches bottom
    decay: 0.9,

    ticks: 500,        // 🔥 THIS IS THE KEY
    scalar: 1.1
  });
};

  const loop = () => {
    if (Date.now() >= endAt.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
      return;
    }
    rainFrame();
    rafId.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    if (!trigger) return;

    endAt.current = Date.now() + duration * 1000;
    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [trigger, duration, intensity]);

  return null; // 🔥 effect-only, no DOM
}

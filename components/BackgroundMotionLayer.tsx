"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

type BackgroundMotionLayerProps = {
  className?: string;
};

export function BackgroundMotionLayer({ className = "" }: BackgroundMotionLayerProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.35);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18, mass: 0.8 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) {
      const timer = window.setInterval(() => {
        mouseX.set(0.45 + Math.random() * 0.1);
        mouseY.set(0.3 + Math.random() * 0.18);
      }, 2600);

      return () => window.clearInterval(timer);
    }

    const onMove = (event: PointerEvent) => {
      mouseX.set(event.clientX / window.innerWidth);
      mouseY.set(event.clientY / window.innerHeight);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  const glowTransform = useMotionTemplate`translate3d(calc(${springX} * 42px - 21px), calc(${springY} * 34px - 17px), 0)`;
  const gridTransform = useMotionTemplate`translate3d(calc(${springX} * 18px - 9px), calc(${springY} * 16px - 8px), 0)`;
  const orbTransform = useMotionTemplate`translate3d(calc(${springX} * -28px + 14px), calc(${springY} * -24px + 12px), 0)`;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="absolute left-[-8%] top-[8%] h-[34vw] w-[34vw] rounded-full bg-cyan/10 blur-[90px]"
        style={{ transform: glowTransform }}
      />
      <motion.div
        className="absolute right-[-8%] top-[10%] h-[26vw] w-[26vw] rounded-full bg-gold/10 blur-[100px]"
        style={{ transform: orbTransform }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[28%] h-[28vw] w-[28vw] rounded-full bg-mint/10 blur-[110px]"
        style={{ transform: glowTransform }}
      />
      <motion.div className="soft-grid absolute inset-0 opacity-40" style={{ transform: gridTransform }} />
      <motion.div
        className="absolute inset-[10%] rounded-[48px] border border-white/8"
        style={{ transform: orbTransform }}
      />
      <motion.div
        className="absolute left-[22%] top-[18%] h-[40%] w-[56%] rounded-full border border-cyan/15"
        style={{ transform: glowTransform }}
      />
    </div>
  );
}

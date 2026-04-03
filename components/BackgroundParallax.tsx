"use client";

import { useEffect } from "react";

export function BackgroundParallax() {
  useEffect(() => {
    const root = document.documentElement;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isCoarsePointer || prefersReducedMotion) {
      root.style.setProperty("--bg-shift-x", "0px");
      root.style.setProperty("--bg-shift-y", "0px");
      return;
    }

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      root.style.setProperty("--bg-shift-x", `${currentX.toFixed(2)}px`);
      root.style.setProperty("--bg-shift-y", `${currentY.toFixed(2)}px`);
      frame = window.requestAnimationFrame(animate);
    };

    const onMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      targetX = x * -42;
      targetY = y * -28;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    frame = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      root.style.setProperty("--bg-shift-x", "0px");
      root.style.setProperty("--bg-shift-y", "0px");
    };
  }, []);

  return null;
}

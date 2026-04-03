"use client";

import type { CSSProperties } from "react";

const petals = [
  { left: "8%", size: 14, delay: "0s", duration: "14s" },
  { left: "18%", size: 10, delay: "2s", duration: "12s" },
  { left: "31%", size: 16, delay: "5s", duration: "16s" },
  { left: "47%", size: 12, delay: "1s", duration: "13s" },
  { left: "59%", size: 18, delay: "4s", duration: "17s" },
  { left: "73%", size: 11, delay: "7s", duration: "15s" },
  { left: "86%", size: 15, delay: "3s", duration: "18s" },
];

export function PetalOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
      {petals.map((petal, index) => (
        <span
          key={`${petal.left}-${index}`}
          className="petal"
          style={
            {
              left: petal.left,
              width: `${petal.size}px`,
              height: `${petal.size * 1.45}px`,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

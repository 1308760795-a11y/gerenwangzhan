"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type OpeningLoaderProps = {
  brand: string;
};

export function OpeningLoader({ brand }: OpeningLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 3400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[80] overflow-hidden bg-[#06070a]"
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(8px)",
            transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('/rose-background-hires.jpg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.74),rgba(6,7,10,0.48),rgba(6,7,10,0.82))]" />
          <motion.div
            className="absolute inset-[8%] rounded-[40px] border border-white/8"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: [0, 0.65, 0.22], scale: [0.98, 1, 1.01] }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-x-[14%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#b03a60]/60 to-transparent"
            initial={{ scaleX: 0.2, opacity: 0 }}
            animate={{ scaleX: [0.2, 1.05], opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5, delay: 1.35, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.78, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-[min(54vw,420px)] w-[min(54vw,420px)] items-center justify-center"
            >
              <motion.div
                className="absolute h-full w-full rounded-full border border-white/10"
                animate={{ scale: [0.88, 1.04], opacity: [0.16, 0.46, 0.16] }}
                transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute h-[82%] w-[82%] rounded-full border border-[#9d274f]/30"
                animate={{ scale: [1.03, 0.96, 1.03], rotate: [0, 16, 0] }}
                transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}
              />
              <div className="absolute inset-[18%] rounded-full bg-[#7a1738]/18 blur-3xl" />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8.5, ease: "linear", repeat: Infinity }}
                className="relative h-[72%] w-[72%]"
              >
                <Image
                  src="/rose-loader.png"
                  alt=""
                  fill
                  sizes="400px"
                  className="object-contain drop-shadow-[0_12px_40px_rgba(88,0,28,0.48)]"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: [0, -24, 0], y: [0, -10, 0] }}
                transition={{ duration: 4.8, ease: "easeInOut", repeat: Infinity }}
              />
              <div className="absolute bottom-[-12%] left-1/2 w-max -translate-x-1/2 text-center">
                <motion.p
                  className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[0.08em] text-white"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.7 }}
                >
                  {brand}
                </motion.p>
                <motion.p
                  className="mt-2 font-display text-[0.68rem] uppercase tracking-[0.32em] text-white/52"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 1.05 }}
                >
                  Personal Editions 2026
                </motion.p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_42%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

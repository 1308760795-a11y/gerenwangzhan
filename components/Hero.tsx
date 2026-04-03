"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/site";

export function Hero() {
  const { brand } = siteContent;

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="section-shell relative">
        <div className="noise-overlay relative overflow-hidden rounded-[40px] border border-white/10 bg-[rgba(7,7,10,0.06)] px-6 pb-10 pt-10 shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-[2px] md:px-10 md:pb-14 md:pt-16">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,11,0.24)_0%,rgba(7,8,11,0.05)_42%,rgba(7,8,11,0.02)_62%,rgba(7,8,11,0.1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_32%,rgba(255,255,255,0.04),transparent_20%),radial-gradient(circle_at_50%_68%,rgba(120,32,54,0.05),transparent_24%)]" />

          <div className="relative z-10 grid items-end gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-[760px] pt-12 md:pt-20">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.05, duration: 0.7 }}
                className="section-kicker"
              >
                {brand.edition}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.1, duration: 0.7 }}
                className="mt-4 max-w-[34ch] text-sm uppercase tracking-[0.2em] text-white/54"
              >
                {brand.role}
              </motion.p>

              <div className="mt-5 space-y-1">
                {brand.heroLines.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 3.12 + index * 0.12,
                      duration: 0.95,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <h1 className="display-title text-[clamp(3rem,7vw,7rem)] leading-[1.0]">
                      {index === 2 ? (
                        <span className="bg-gradient-to-r from-white via-[#ffd8c0] to-[#e8b07c] bg-clip-text text-transparent">
                          {line}
                        </span>
                      ) : (
                        line
                      )}
                    </h1>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.35, duration: 0.9 }}
                className="mt-8 max-w-[620px] text-base leading-8 text-white/76 md:text-lg"
              >
                {brand.heroSubtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.9 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                {brand.ctas.map((cta, index) => (
                  <a
                    key={cta.href}
                    href={cta.href}
                    download={cta.download}
                    className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition ${
                      index === 0
                        ? "border border-white/14 bg-[rgba(255,255,255,0.04)] text-white"
                        : "border border-white/10 bg-[rgba(10,10,14,0.04)] text-white/88"
                    }`}
                  >
                    {cta.label}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 3.4, duration: 1.05 }}
              className="relative min-h-[520px]"
            >
              <motion.div
                className="absolute bottom-[12%] right-[4%] w-full max-w-[460px] rounded-[28px] border border-white/12 bg-[rgba(10,10,14,0.08)] p-6 backdrop-blur-[8px] md:p-8"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-display text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
                  {brand.heroCardKicker}
                </p>
                <h2 className="mt-4 max-w-[10ch] font-display text-3xl leading-[0.96] text-white md:text-5xl">
                  {brand.heroCardTitle}
                </h2>
                <p className="mt-5 max-w-[28ch] text-sm leading-7 text-white/72">
                  {brand.heroCardText}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {brand.heroCardTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/66"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-white/44">{brand.heroCardNote}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

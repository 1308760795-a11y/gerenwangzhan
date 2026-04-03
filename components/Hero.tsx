"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/site";

export function Hero() {
  const { brand } = siteContent;

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="section-shell relative">
        <div className="noise-overlay relative overflow-hidden rounded-[40px] border border-white/10 px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-16">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,11,0.3)_0%,rgba(7,8,11,0.14)_24%,rgba(7,8,11,0.03)_56%,rgba(7,8,11,0.06)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(255,255,255,0.04),transparent_24%),radial-gradient(circle_at_72%_22%,rgba(246,200,138,0.08),transparent_18%),radial-gradient(circle_at_72%_68%,rgba(120,32,54,0.07),transparent_22%)]" />

          <div className="pointer-events-none absolute inset-y-[10%] right-[4%] hidden w-[33%] min-w-[320px] lg:block">
            <div className="absolute left-[8%] top-[12%] flex items-center gap-4">
              <span className="h-px w-14 bg-gradient-to-r from-[#f6c88a]/80 to-transparent" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/42">Quality Loop</span>
            </div>

            <motion.div
              className="absolute right-[6%] top-[14%] h-[220px] w-[220px] rounded-full border border-white/8 bg-[radial-gradient(circle,rgba(255,255,255,0.06),rgba(255,255,255,0.015)_54%,transparent_72%)]"
              animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 11.5, ease: "easeInOut", repeat: Infinity }}
            />

            <motion.div
              className="absolute right-[18%] top-[22%] h-[96px] w-[96px]"
              animate={{ y: [0, 9, 0], rotate: [-4, 3, -4] }}
              transition={{ duration: 9.8, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src="/rose-loader.png"
                alt=""
                fill
                sizes="120px"
                className="object-contain opacity-62 drop-shadow-[0_12px_24px_rgba(72,0,22,0.16)]"
              />
            </motion.div>

            <div className="absolute right-[28%] top-[32%] h-[30%] w-px bg-gradient-to-b from-white/0 via-white/16 to-white/0" />

            <motion.div
              className="absolute right-[4%] bottom-[10%] h-[280px] w-[280px]"
              animate={{ y: [0, -12, 0], rotate: [-5, 3, -5] }}
              transition={{ duration: 12.5, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src="/rose-loader.png"
                alt=""
                fill
                sizes="320px"
                className="object-contain opacity-88 drop-shadow-[0_18px_40px_rgba(72,0,22,0.24)]"
              />
            </motion.div>

            <motion.div
              className="absolute left-[6%] bottom-[18%] rounded-full border border-white/10 bg-[rgba(10,10,16,0.14)] px-5 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-[6px]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 8.8, ease: "easeInOut", repeat: Infinity }}
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/44">Rules / Review / Iterate</p>
            </motion.div>
          </div>

          <div className="relative z-10 min-h-[76vh] pt-12 md:pt-20">
            <div className="max-w-[920px]">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.05, duration: 0.7 }}
                className="section-kicker"
              >
                {brand.edition}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.1, duration: 0.7 }}
                className="mt-4 flex flex-wrap items-center gap-3"
              >
                <span className="meta-chip">{brand.role}</span>
                <span className="text-xs uppercase tracking-[0.22em] text-white/42">{brand.slogan}</span>
              </motion.div>

              <div className="editorial-rule mt-7 space-y-1">
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
                className="mt-12 max-w-[620px] text-base leading-8 text-white/76 md:text-lg"
              >
                {brand.heroSubtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.44, duration: 0.9 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {brand.heroPillars.map((pillar) => (
                  <span key={pillar} className="meta-chip">
                    {pillar}
                  </span>
                ))}
              </motion.div>

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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.58, duration: 0.9 }}
                className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/8 pt-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/38">Current Focus</p>
                  <p className="mt-2 text-sm leading-7 text-white/68">{brand.heroCardNote}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {brand.heroCardTags.map((item) => (
                    <span key={item} className="meta-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

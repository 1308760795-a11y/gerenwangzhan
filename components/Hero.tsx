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

          <div className="pointer-events-none absolute inset-y-[10%] right-[3%] hidden w-[35%] min-w-[320px] lg:block">
            <motion.div
              className="absolute right-0 top-[9%] h-[72%] w-[82%] rounded-[38px] border border-white/8"
              animate={{ y: [0, 10, 0], rotate: [0, 0.8, 0] }}
              transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
            />

            <motion.div
              className="absolute right-[5%] top-[2%] h-[72%] w-[82%] overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_90px_rgba(0,0,0,0.16)] backdrop-blur-[10px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_24%,rgba(246,200,138,0.14),transparent_22%),radial-gradient(circle_at_68%_72%,rgba(176,58,96,0.18),transparent_32%),linear-gradient(180deg,rgba(8,10,16,0.04),rgba(8,10,16,0.18))]" />
              <div className="absolute left-6 top-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">Quality Loop</p>
                <div className="mt-3 h-px w-24 bg-gradient-to-r from-[#f6c88a]/80 to-transparent" />
              </div>

              <div className="absolute inset-x-[11%] bottom-[10%] h-[48%] rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))]" />

              <motion.div
                className="absolute right-[12%] bottom-[9%] h-[58%] w-[58%]"
                animate={{ y: [0, -8, 0], rotate: [-4, 2, -4] }}
                transition={{ duration: 10.5, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src="/rose-loader.png"
                  alt=""
                  fill
                  sizes="360px"
                  className="object-contain opacity-85 drop-shadow-[0_18px_50px_rgba(72,0,22,0.34)]"
                />
              </motion.div>

              <motion.div
                className="absolute left-[16%] top-[28%] h-20 w-20"
                animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 9.5, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src="/rose-loader.png"
                  alt=""
                  fill
                  sizes="120px"
                  className="object-contain opacity-42 blur-[0.2px]"
                />
              </motion.div>

              <div className="absolute left-[14%] top-[42%] h-28 w-px bg-gradient-to-b from-white/0 via-white/18 to-white/0" />
            </motion.div>

            <motion.div
              className="absolute left-[2%] bottom-[16%] rounded-[26px] border border-white/10 bg-[rgba(10,10,16,0.18)] px-5 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur-[8px]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 9.2, ease: "easeInOut", repeat: Infinity }}
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">Current Focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {brand.heroCardTags.map((item) => (
                  <span key={item} className="meta-chip">
                    {item}
                  </span>
                ))}
              </div>
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

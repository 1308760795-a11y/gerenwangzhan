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
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 3.4, duration: 1.05 }}
              className="relative flex min-h-[620px] items-center justify-center py-6 lg:justify-end"
            >
              <motion.div
                className="relative w-full max-w-[470px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 9.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="surface-note rounded-[34px] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.18)] backdrop-blur-[4px]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10">
                    <Image
                      src="/profile-portrait.jpg"
                      alt="李佳成个人照片"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,0.03),rgba(8,10,16,0.18))]" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/14 bg-[rgba(10,10,16,0.28)] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/74 backdrop-blur-[6px]">
                      {brand.heroCardKicker}
                    </div>
                  </div>

                  <div className="grid gap-4 px-3 pb-2 pt-4 md:grid-cols-[1fr_auto] md:items-end">
                    <div>
                      <h3 className="font-display text-[2rem] leading-none text-white">{brand.heroCardTitle}</h3>
                      <p className="mt-3 max-w-[34ch] text-sm leading-7 text-white/62">
                        {brand.heroCardText}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {brand.heroCardTags.slice(0, 2).map((item) => (
                        <span key={item} className="meta-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-10 hidden w-[240px] rounded-[28px] border border-white/10 bg-[rgba(11,12,18,0.18)] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.14)] backdrop-blur-[8px] lg:block">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/42">Current Focus</p>
                  <p className="mt-3 font-display text-2xl leading-tight text-white">{brand.heroCardNote}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {brand.heroCardTags.map((item) => (
                      <span key={item} className="meta-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

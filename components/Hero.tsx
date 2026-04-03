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
              className="relative min-h-[620px]"
            >
              <motion.div
                className="absolute right-[4%] top-[4%] w-full max-w-[450px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 9.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="surface-note rounded-[32px] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-[6px]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10">
                    <Image
                      src="/sheet-preview-extension-main.png"
                      alt="浏览器扩展预览面板截图"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,0.02),rgba(8,10,16,0.18))]" />
                  </div>

                  <div className="flex items-start justify-between gap-4 px-3 pb-2 pt-4">
                    <div>
                      <p className="section-kicker !text-white/42">Selected Build</p>
                      <h3 className="mt-2 font-display text-2xl text-white">Sheet Preview 扩展</h3>
                      <p className="mt-2 max-w-[30ch] text-sm leading-7 text-white/62">
                        用更轻的方式展示你的自动化工具作品，不再让右侧只剩一块空玻璃。
                      </p>
                    </div>
                    <span className="meta-chip hidden md:inline-flex">Tooling</span>
                  </div>
                </div>

                <div className="absolute -bottom-14 -left-6 hidden w-[190px] rounded-[26px] border border-white/10 bg-[rgba(11,12,18,0.28)] p-3 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-[8px] lg:block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-white/10">
                    <Image
                      src="/sheet-preview-extension-features.png"
                      alt="浏览器扩展功能说明截图"
                      fill
                      sizes="220px"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/42">Feature Notes</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-[4%] right-[4%] w-full max-w-[430px] rounded-[32px] border border-white/12 bg-[linear-gradient(180deg,rgba(14,16,24,0.34),rgba(10,10,14,0.12))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-[10px] md:p-8"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#f6c88a]/50 to-transparent" />
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
                <div className="mt-7 border-t border-white/8 pt-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/44">{brand.heroCardNote}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

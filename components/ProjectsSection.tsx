"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-24 md:pt-32">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">Projects</p>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display-title editorial-rule max-w-[10ch] text-4xl leading-[0.96] md:text-6xl">
              用真实项目和量化结果证明我的工作价值。
            </h2>
            <p className="max-w-[34ch] text-sm leading-7 text-white/60 md:text-base">
              下面这几类项目基本覆盖了我目前最有代表性的能力范围：多模态数据构建、Agent 训练评测，以及工具化提效。
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {siteContent.projects.map((project, index) => {
            return (
              <Reveal key={project.title} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel group relative overflow-hidden rounded-[30px] p-6 md:p-8 lg:p-10"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,232,255,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(246,200,138,0.1),transparent_24%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-y-0 left-[33%] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
                  <div className="relative z-10 grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-10">
                    <div className="flex flex-col justify-between gap-6">
                      <div>
                        <p className="section-kicker !tracking-[0.18em] !text-white/44">{project.category}</p>
                        <h3 className="mt-4 font-display text-3xl leading-none text-white md:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-5 max-w-[22ch] text-sm leading-7 text-white/56">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/48">
                          Project 0{index + 1}
                        </span>
                        <span className="rounded-full border border-cyan/15 bg-cyan/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/54">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div>
                      {"showcase" in project && project.showcase ? (
                        <div className="mb-6 grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
                          <div className="surface-note overflow-hidden">
                            <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] border border-white/10">
                              <Image
                                src={project.showcase[0].src}
                                alt={project.showcase[0].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 700px"
                                className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                              />
                            </div>
                            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/42">
                              {project.showcase[0].label}
                            </p>
                          </div>

                          <div className="surface-note overflow-hidden">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-white/10">
                              <Image
                                src={project.showcase[1].src}
                                alt={project.showcase[1].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 320px"
                                className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                              />
                            </div>
                            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/42">
                              {project.showcase[1].label}
                            </p>
                          </div>
                        </div>
                      ) : null}

                      <div className="surface-note md:p-6">
                        <div className="grid gap-5 md:grid-cols-2">
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-white/38">My Role</p>
                            <p className="mt-3 text-sm leading-7 text-white/72">{project.role}</p>
                          </div>
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-white/38">Outcome</p>
                            <p className="mt-3 text-sm leading-7 text-white/72">{project.result}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/62"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-white transition hover:bg-white/[0.08]"
                      >
                        联系聊项目
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

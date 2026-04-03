import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site";

export function WritingSection() {
  const { automation } = siteContent;
  const [primaryShowcase, secondaryShowcase] = automation.showcase;

  return (
    <section id="writing" className="pt-24 md:pt-32">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
            <div>
              <p className="section-kicker">{automation.kicker}</p>
              <h2 className="display-title editorial-rule mt-5 max-w-[9ch] text-4xl leading-[0.94] md:text-6xl">
                {automation.title}
              </h2>
            </div>

            <div className="surface-note max-w-[38rem] justify-self-end rounded-[30px] px-6 py-6">
              <p className="text-sm leading-8 text-white/68 md:text-base">{automation.intro}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <Reveal className="glass-panel rounded-[36px] p-4 md:p-5">
            <article className="relative overflow-hidden rounded-[28px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,200,138,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(176,58,96,0.12),transparent_30%)]" />

              <div className="relative grid gap-5 p-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="surface-note overflow-hidden rounded-[30px] p-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10">
                    <Image
                      src={primaryShowcase.src}
                      alt={primaryShowcase.alt}
                      fill
                      sizes="(max-width: 1280px) 100vw, 780px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,0.06),rgba(8,10,16,0.18))]" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/14 bg-[rgba(10,10,16,0.34)] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/76 backdrop-blur-[8px]">
                      {primaryShowcase.label}
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="section-kicker !text-white/42">浏览器扩展</p>
                      <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.92] text-white">
                        Sheet Preview
                      </h3>
                    </div>
                    <span className="meta-chip hidden md:inline-flex">Selected Build</span>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="surface-note rounded-[30px] p-6">
                    <p className="section-kicker !text-white/42">{automation.cards[0].tag}</p>
                    <p className="mt-4 text-base leading-8 text-white/74 md:text-lg">{automation.cards[0].excerpt}</p>
                  </div>

                  <div className="surface-note overflow-hidden rounded-[30px] p-4">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10">
                      <Image
                        src={secondaryShowcase.src}
                        alt={secondaryShowcase.alt}
                        fill
                        sizes="(max-width: 1280px) 100vw, 360px"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="mt-4 section-kicker !text-white/42">{secondaryShowcase.label}</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6">
            <Reveal className="glass-panel rounded-[32px] p-7">
              <p className="section-kicker !text-white/42">Capabilities</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {automation.features.map((feature) => (
                  <span key={feature} className="meta-chip">
                    {feature}
                  </span>
                ))}
              </div>
            </Reveal>

            {automation.cards.slice(1).map((item, index) => (
              <Reveal key={item.title} className="glass-panel rounded-[30px] p-7" delay={0.08 + index * 0.06}>
                <p className="section-kicker !tracking-[0.18em] !text-white/44">{item.tag}</p>
                <h3 className="mt-4 font-display text-[2rem] leading-[0.98] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{item.excerpt}</p>
              </Reveal>
            ))}

            <Reveal className="surface-note rounded-[30px] px-6 py-6" delay={0.2}>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-white/84">
                联系我聊自动化思路
                <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

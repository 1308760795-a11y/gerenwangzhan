import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site";

export function WritingSection() {
  const { automation } = siteContent;

  return (
    <section id="writing" className="pt-24 md:pt-32">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">{automation.kicker}</p>
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="display-title editorial-rule max-w-[11ch] text-4xl leading-[0.96] md:text-6xl">
              {automation.title}
            </h2>
            <p className="max-w-[36ch] text-sm leading-7 text-white/60 md:text-base">
              {automation.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="glass-panel rounded-[32px] p-4 md:p-5">
            <div className="grid gap-4 md:grid-cols-[1.18fr_0.82fr]">
              <div className="surface-note overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10">
                  <Image
                    src={automation.showcase[0].src}
                    alt={automation.showcase[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="section-kicker !text-white/42">{automation.showcase[0].label}</p>
                    <p className="mt-2 text-sm leading-7 text-white/64">
                      在表格场景里即时展开长文本内容，减少来回点开与手动处理的操作。
                    </p>
                  </div>
                  <span className="meta-chip hidden md:inline-flex">Extension</span>
                </div>
              </div>

              <div className="surface-note overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10">
                  <Image
                    src={automation.showcase[1].src}
                    alt={automation.showcase[1].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-4 section-kicker !text-white/42">{automation.showcase[1].label}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {automation.features.map((feature) => (
                    <span key={feature} className="meta-chip">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {automation.cards.map((item, index) => (
              <Reveal key={item.title} className="glass-panel rounded-[28px] p-7" delay={index * 0.08}>
                <p className="section-kicker !tracking-[0.18em] !text-white/44">{item.tag}</p>
                <h3 className="mt-5 font-display text-3xl leading-[1.02] text-white">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/64">{item.excerpt}</p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-white/82">
                  联系我
                  <ArrowRight size={16} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

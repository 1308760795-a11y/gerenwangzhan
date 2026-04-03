import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site";

export function WritingSection() {
  return (
    <section id="strengths" className="pt-24 md:pt-32">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">Strengths</p>
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="display-title editorial-rule max-w-[11ch] text-4xl leading-[0.96] md:text-6xl">
              这些经历说明我不只会做任务，也能把任务做稳。
            </h2>
            <p className="max-w-[34ch] text-sm leading-7 text-white/60 md:text-base">
              如果要快速判断我是否适合 AI 训练师岗位，这三点基本就是最核心的信号：成长速度、质量意识和工具化能力。
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {siteContent.strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-panel h-full rounded-[28px] p-7">
                <p className="section-kicker !tracking-[0.18em] !text-white/44">{item.tag}</p>
                <h3 className="mt-5 font-display text-3xl leading-[1.02] text-white">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/64">{item.excerpt}</p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-white/82">
                  联系我
                  <ArrowRight size={16} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <section id="about" className="pt-24 md:pt-32">
      <div className="section-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="glass-panel rounded-[32px] p-8 md:p-10">
          <p className="section-kicker">Profile</p>
          <h2 className="display-title mt-5 max-w-[10ch] text-4xl leading-[0.98] md:text-6xl">
            能做数据构建，也能把质量标准真正落下来。
          </h2>
          <p className="mt-6 max-w-[58ch] text-base leading-8 text-white/68 md:text-lg">
            {about.intro}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {about.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <p className="font-display text-4xl tracking-[-0.06em] text-white">{metric.value}</p>
                <p className="mt-3 text-sm leading-6 text-white/58">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-white/42">教育背景</p>
              <h3 className="mt-3 font-display text-2xl text-white">{about.education.school}</h3>
              <p className="mt-2 text-sm leading-7 text-white/62">{about.education.major}</p>
              <p className="mt-1 text-sm leading-7 text-white/42">{about.education.period}</p>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-white/42">常用模型与工具</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/64"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal className="glass-panel rounded-[32px] p-8 md:p-10" delay={0.1}>
            <p className="section-kicker">How I Work</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {about.principles.map((principle) => (
                <span
                  key={principle}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72"
                >
                  {principle}
                </span>
              ))}
            </div>
          </Reveal>

          {about.highlights.map((item, index) => (
            <Reveal key={item.title} className="glass-panel rounded-[28px] p-7" delay={0.14 + index * 0.08}>
              <p className="font-display text-[0.72rem] uppercase tracking-[0.24em] text-white/42">
                {item.title}
              </p>
              <p className="mt-3 text-xl leading-8 text-white/90">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site";

export function ExperienceSection() {
  const { experience } = siteContent;

  return (
    <section id="experience" className="pt-24 md:pt-32">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="glass-panel rounded-[32px] p-8 md:p-10">
          <p className="section-kicker">Experience</p>
          <h2 className="display-title editorial-rule mt-5 max-w-[11ch] text-4xl leading-[0.98] md:text-6xl">
            从基础标注到 AI 训练师，经历一直在往更高责任走。
          </h2>

          <div className="mt-12 space-y-7">
            {experience.timeline.map((item) => (
              <div key={item.period} className="border-l border-white/10 pl-5">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-white/42">{item.period}</p>
                <h3 className="mt-3 text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal className="glass-panel rounded-[32px] p-8 md:p-10" delay={0.08}>
            <p className="section-kicker">What I Can Help With</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {experience.services.map((service) => (
                <div key={service.title} className="surface-note">
                  <h3 className="font-display text-2xl text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{service.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass-panel rounded-[32px] p-8 md:p-10" delay={0.16}>
            <p className="section-kicker">Skills & Methods</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan/20 bg-cyan/5 px-4 py-2 text-sm text-white/74"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

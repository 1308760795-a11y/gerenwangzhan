import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site";

export function WritingSection() {
  return (
    <section id="writing" className="pt-24 md:pt-32">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">灵感随笔</p>
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="display-title max-w-[11ch] text-4xl leading-[0.96] md:text-6xl">
              把审美、直觉和项目背后的想法，慢慢写下来。
            </h2>
            <p className="max-w-[34ch] text-sm leading-7 text-white/60 md:text-base">
              这一栏不只是博客，更像一组个人视角下的编辑笔记，给合作方和面试官一个更完整的你。
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {siteContent.writing.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <article className="glass-panel h-full rounded-[28px] p-7">
                <p className="section-kicker !tracking-[0.18em] !text-white/44">{post.tag}</p>
                <h3 className="mt-5 font-display text-3xl leading-[1.02] text-white">{post.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/64">{post.excerpt}</p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-white/82">
                  查看更多
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

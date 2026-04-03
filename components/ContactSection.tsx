import { BackgroundMotionLayer } from "@/components/BackgroundMotionLayer";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="pt-24 md:pt-32">
      <div className="section-shell">
        <Reveal className="glass-panel relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <BackgroundMotionLayer className="opacity-60" />
          <p className="section-kicker">Contact</p>
          <div className="relative z-10 mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="display-title max-w-[11ch] text-4xl leading-[0.95] md:text-7xl">
                {contact.outro}
              </h2>
            </div>
            <div className="space-y-7">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/38">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-3 block font-display text-2xl text-white md:text-3xl"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/38">Social</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {contact.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/76"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

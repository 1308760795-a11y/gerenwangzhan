"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { sections, siteContent } from "@/data/site";

export function Header() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navItems = useMemo(() => sections, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.45, rootMargin: "-10% 0px -35% 0px" }
    );

    navItems.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [navItems]);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="section-shell transition-all duration-500">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-3 md:px-6 ${
            scrolled
              ? "border-white/12 bg-[rgba(13,12,15,0.38)] shadow-halo backdrop-blur-2xl"
              : "border-white/10 bg-[rgba(12,12,16,0.22)] backdrop-blur-xl"
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1 font-display text-[0.68rem] uppercase tracking-[0.24em] text-white/70">
                {siteContent.brand.age}
              </span>
              <div className="hidden md:block">
                <p className="font-display text-sm text-white">{siteContent.brand.chineseName}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/58">{siteContent.brand.name}</p>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative rounded-full px-4 py-2 text-sm text-white/72 transition-colors hover:text-white"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full border border-white/12 bg-white/10"
                      transition={{ type: "spring", stiffness: 240, damping: 24 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            className="mt-3 rounded-[28px] border border-white/10 bg-[rgba(12,12,16,0.76)] p-3 shadow-halo backdrop-blur-2xl md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block rounded-2xl px-4 py-3 text-sm transition ${
                    active === item.id ? "bg-white/8 text-white" : "text-white/70"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

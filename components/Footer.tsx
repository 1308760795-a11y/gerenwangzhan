import { siteContent } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-10 pt-8">
      <div className="section-shell flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <p>{siteContent.brand.name} / Personal Editions 2026</p>
        <p>{siteContent.contact.signature}</p>
      </div>
    </footer>
  );
}

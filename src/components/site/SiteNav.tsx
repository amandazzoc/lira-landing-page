import { useEffect, useState } from "react";
import liraLogo from "@/assets/lira-logo.png";

const links = [
  { href: "#quemsomos", label: "Quem somos" },
  { href: "#valores", label: "Valores" },
  { href: "#focusquest", label: "FocusQuest" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/95">
            <img src={liraLogo} alt="Logo LIRA" width={28} height={28} className="h-6 w-6" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">LIRA</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Fale conosco
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </div>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

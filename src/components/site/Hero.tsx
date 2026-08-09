import liraLogo from "@/assets/lira-logo.png";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="grid-eye relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-foreground/95 shadow-[0_20px_60px_-20px] shadow-accent/40 md:h-28 md:w-28">
            <img
              src={liraLogo}
              alt="Marca LIRA"
              width={96}
              height={96}
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </div>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance md:text-6xl">
            A melodia do olhar, o ritmo do design
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-6 max-w-xl text-base text-balance text-muted-foreground md:text-lg">
            Explorando o futuro com o olhar de quem transforma o presente.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#quemsomos"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Saiba mais
            </a>
            <a
              href="#focusquest"
              className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Conhecer o FocusQuest
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

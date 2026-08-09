import liraLogo from "@/assets/lira-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/95">
            <img
              src={liraLogo}
              aria-hidden="true"
              loading="lazy"
              width={24}
              height={24}
              className="h-5 w-5"
            />
          </span>
          <span className="text-sm text-muted-foreground">
            LIRA · FATEC Registro — Sua atenção, nosso foco.
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
          <a href="#quemsomos" className="transition-colors hover:text-accent">
            Quem somos
          </a>
          <a href="#focusquest" className="transition-colors hover:text-accent">
            FocusQuest
          </a>
          <a href="#equipe" className="transition-colors hover:text-accent">
            Equipe
          </a>
          <a href="#contato" className="transition-colors hover:text-accent">
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}

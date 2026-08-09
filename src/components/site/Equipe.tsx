import amanda from "@/assets/lira/amanda.png";
import arthur from "@/assets/lira/arthur.png";
import diego from "@/assets/lira/diego.jpg";
import giovana from "@/assets/lira/giovana.png";
import igor from "@/assets/lira/igor.jpg";
import { Reveal } from "./Reveal";
import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

type Membro = {
  nome: string;
  papel: string;
  foto: string;
  instagram: string;
  github: string;
  linkedin: string;
};

const equipe: Membro[] = [
  {
    nome: "Amanda Oliveira",
    papel: "UX/UI Designer e Front-end",
    foto: amanda,
    instagram: "https://instagram.com/amandazzoc",
    github: "https://github.com/amandazzoc",
    linkedin: "https://www.linkedin.com/in/amanda-oliveira-970410232/",
  },
  {
    nome: "Arthur Fudali",
    papel: "Back-end e AI Developer",
    foto: arthur,
    instagram: "https://www.instagram.com/arthurfudali/",
    github: "https://github.com/arthurfudali",
    linkedin: "https://www.linkedin.com/in/arthurfudali/",
  },
  {
    nome: "Diego Souza",
    papel: "Back-end Developer",
    foto: diego,
    instagram: "https://www.instagram.com/s0uza_diego/",
    github: "https://github.com/SouzaDiegoCl",
    linkedin: "https://www.linkedin.com/in/diegosouzaperfil/",
  },
  {
    nome: "Giovana Albanês",
    papel: "Back-end Developer",
    foto: giovana,
    instagram: "https://www.instagram.com/gialbanes/",
    github: "https://github.com/gialbanes",
    linkedin: "https://www.linkedin.com/in/giovana-alban%C3%AAs-b95853231/",
  },
  {
    nome: "Igor Leite",
    papel: "DevSecOps",
    foto: igor,
    instagram: "https://www.instagram.com/igomsleit/",
    github: "https://github.com/IgorLGomes",
    linkedin: "https://www.linkedin.com/in/igorleitegomes/",
  },
];

function Social({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="text-muted-foreground transition-colors hover:text-accent"
    >
      {icon}
    </a>
  );
}

export function Equipe() {
  return (
    <section id="equipe" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">Equipe</h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="mt-4 max-w-md text-muted-foreground">
            Conheça os integrantes que fazem tudo isso funcionar!
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((m, i) => (
            <Reveal key={m.nome} delay={i * 70}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                <img
                  src={m.foto}
                  alt={`Foto de ${m.nome}`}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="h-20 w-20 rounded-full border border-border object-cover"
                />
                <h3 className="mt-5 text-lg font-semibold">{m.nome}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.papel}</p>
                <div className="mt-5 flex items-center gap-4">
                  <Social
                    href={m.instagram}
                    label={`Instagram de ${m.nome}`}
                    icon={<InstagramLogoIcon />}
                  />
                  <Social href={m.github} label={`GitHub de ${m.nome}`} icon={<GithubLogoIcon />} />
                  <Social
                    href={m.linkedin}
                    label={`LinkedIn de ${m.nome}`}
                    icon={<LinkedinLogoIcon />}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

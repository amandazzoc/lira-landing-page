import liraLogo from "@/assets/lira-logo.png";
import { Reveal } from "./Reveal";

export function QuemSomos() {
  return (
    <section id="quemsomos" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">Quem somos?</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Somos um grupo de alunos do 6° semestre da FATEC de Registro dedicados a aplicar
              tecnologia de ponta para promover avanços na área da saúde mental e cognitiva. Neste
              projeto, unimos gamificação, rastreamento ocular e análise de desempenho atencional
              para criar uma ferramenta acessível e inovadora de triagem para o Transtorno de
              Déficit de Atenção e Hiperatividade (TDAH) em crianças de 10 a 12 anos.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Acreditamos no poder da tecnologia como aliada da inclusão e do bem-estar, e nossa
              missão é transformar dados visuais em conhecimento que possa gerar impacto real na
              vida das pessoas.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative rounded-3xl border border-border bg-surface p-10 text-center">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-foreground/95">
              <img
                src={liraLogo}
                alt="Logo do projeto LIRA"
                loading="lazy"
                width={112}
                height={112}
                className="h-24 w-24 object-contain"
              />
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Tecnologia, olhar e cuidado a serviço da triagem do TDAH.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

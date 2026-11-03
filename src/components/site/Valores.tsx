import { RocketLaunch, Handshake, Target, Eye } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

const valores = [
  {
    icon: RocketLaunch,
    title: "Inovação",
    text: "Para nós, inovar é encontrar caminhos únicos que transformam desafios em oportunidades.",
  },
  {
    icon: Handshake,
    title: "Colaboração",
    text: "Valorizamos o trabalho em equipe e o compartilhamento de conhecimento para alcançar resultados grandiosos.",
  },
  {
    icon: Target,
    title: "Precisão",
    text: "Com foco e atenção aos detalhes, garantimos a confiabilidade e a exatidão de nossos insights e soluções.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Enxergamos além do óbvio, antecipando tendências e mapeando comportamentos para desenvolver soluções que realmente façam a diferença.",
  },
];

export function Valores() {
  return (
    <section id="valores" className="scroll-mt-24 border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">O que nos move</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v, i) => {
            // Atribuímos o componente do ícone a uma variável com letra maiúscula
            // para o React entender que é um Componente e não uma tag HTML padrão.
            const Icon = v.icon;

            return (
              <Reveal key={v.title} delay={i * 80}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                  {/* Renderizando o ícone do Phosphor */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/30">
                    <Icon
                      size={32}
                      weight="regular"
                      className="text-accent" // Ajuste a cor aqui para dar o contraste ideal com seu fundo escuro
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import logoFocusQuest from "@/assets/lira/logo-focusquest.png";
import mockup from "@/assets/lira/img-software-focusquest.png";
import { Reveal } from "./Reveal";

export function FocusQuest() {
  return (
    <section
      id="focusquest"
      className="scroll-mt-24 bg-focusquest-surface py-20 text-focusquest-ink md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <img
                  src={logoFocusQuest}
                  alt="Logo FocusQuest"
                  loading="lazy"
                  width={72}
                  height={72}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <p className="font-display text-3xl leading-none font-bold text-focusquest">
                    FocusQuest
                  </p>
                  <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-focusquest-muted uppercase">
                    Triagem gamificada de TDAH
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-8 leading-relaxed text-focusquest-muted">
                Nossa solução propõe uma plataforma gamificada desenvolvida como{" "}
                <strong className="font-semibold text-focusquest">
                  instrumento de suporte clínico para neuropsicólogos e psicólogos
                </strong>
                , utilizando o rastreamento ocular e testes neuropsicológicos para auxiliar na{" "}
                <strong className="font-semibold text-focusquest">
                  triagem inicial e no pré-diagnóstico
                </strong>{" "}
                do TDAH em crianças de 10 a 12 anos.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 leading-relaxed text-focusquest-muted">
                Por meio de tarefas visuais interativas, o sistema coleta dados objetivos — como
                tempo de reação, métricas de erro e padrões oculares — gerando um feedback
                automatizado e acessível diretamente no navegador. Esse relatório serve como um{" "}
                <strong className="font-semibold text-focusquest">
                  embasamento técnico preliminar
                </strong>
                , permitindo que o especialista otimize o tempo de consulta e direcione a
                investigação clínica de forma mais assertiva.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 leading-relaxed text-focusquest-muted">
                Trata-se de uma abordagem inovadora que une tecnologia e saúde, oferecendo aos
                profissionais uma ferramenta de alta precisão que torna o processo de triagem mais
                objetivo, inclusivo e fundamentado em evidências biométricas.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-10 font-display text-2xl font-semibold text-focusquest md:text-3xl">
                Sua atenção, nosso foco.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="relative rounded-3xl border border-focusquest-border bg-focusquest-surface p-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="absolute -top-3 left-8 rounded-full bg-focusquest px-4 py-1 text-xs font-semibold tracking-wide text-focusquest-foreground uppercase">
                Plataforma
              </div>
              <img
                src={mockup}
                alt="Interface do software FocusQuest"
                loading="lazy"
                className="w-full rounded-2xl object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

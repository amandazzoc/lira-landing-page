import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const emails = [
  { nome: "Amanda Oliveira", email: "amanda.costa5@aluno.cps.sp.gov.br" },
  { nome: "Arthur Fudali", email: "arthur.fudali@aluno.cps.sp.gov.br" },
  { nome: "Diego Souza", email: "diego.claudio@aluno.cps.sp.gov.br" },
  { nome: "Giovana Albanês", email: "giovana.santos10@aluno.cps.sp.gov.br" },
  { nome: "Igor Leite", email: "igor.gomes2@aluno.cps.sp.gov.br" },
];

const inputClass =
"w-full rounded-xl border border-input bg-surface/80 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/80 focus:border-accent";

export function Contato() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    if (!nome || !email || !mensagem) {
      setError("Preencha todos os campos para enviar.");
      setSent(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Informe um e-mail válido.");
      setSent(false);
      return;
    }

    setError(null);
    setSent(true);
    form.reset();
  }

  return (
    <section id="contato" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">Contato</h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="mt-4 text-muted-foreground">
              Entre em contato conosco ou envie uma mensagem direta para um membro da equipe!
            </p>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
              <div>
                <label htmlFor="nome" className="mb-2 block text-sm font-medium text-foreground">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  className={inputClass}
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Como podemos ajudar?"
                />
              </div>

              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              {sent ? (
                <p className="text-sm text-accent">
                  Mensagem registrada! Em breve alguém da equipe responde.
                </p>
              ) : null}

              <button
                type="submit"
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Enviar
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="rounded-3xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold">Entre em contato com a equipe</h3>
            <ul className="mt-6 divide-y divide-border">
              {emails.map((m) => (
                <li key={m.email} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                  <span className="text-sm font-medium">{m.nome}</span>
                  <a
                    href={`mailto:${m.email}`}
                    className="text-sm break-all text-muted-foreground transition-colors hover:text-accent"
                  >
                    {m.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

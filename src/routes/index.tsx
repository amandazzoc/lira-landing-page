import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { QuemSomos } from "@/components/site/QuemSomos";
import { Valores } from "@/components/site/Valores";
import { FocusQuest } from "@/components/site/FocusQuest";
import { Equipe } from "@/components/site/Equipe";
import { Contato } from "@/components/site/Contato";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "LIRA — FocusQuest: triagem de TDAH com rastreamento ocular";
const description =
  "Projeto da FATEC Registro que une gamificação, rastreamento ocular e análise atencional para apoiar a triagem inicial do TDAH em crianças de 10 a 12 anos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <QuemSomos />
        <Valores />
        <FocusQuest />
        <Equipe />
        <Contato />
      </main>
      <SiteFooter />
    </div>
  );
}

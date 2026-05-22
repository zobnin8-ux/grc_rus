import Link from "next/link";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { RabotyCatalog } from "@/components/RabotyCatalog";
import { SubHeader } from "@/components/SubHeader";
import { workProjects } from "@/data/raboty";

export const metadata = {
  title: "Наши работы | GRC",
  description:
    "Примеры выполненных проектов GRC: мобильная металлообработка, ремонт на выезде и в цеху.",
};

export default function RabotyPage() {
  return (
    <>
      <SubHeader />
      <main>
        <section className="grc-band relative overflow-hidden border-b border-grc-border py-14">
          <div className="grc-grid-bg absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
              Портфолио
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase text-white sm:text-5xl">
              Примеры выполненных работ
            </h1>
            <p className="mt-4 max-w-2xl text-grc-muted">
              {workProjects.length} реальных проектов с предприятиями России —
              выездная мехобработка и стационарный ремонт. Три проекта с
              подробным разбором.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <Link
                href="/vyezd"
                className="text-grc-orange transition hover:text-grc-orange-light"
              >
                Выездное производство →
              </Link>
              <Link
                href="/ceh"
                className="text-grc-orange transition hover:text-grc-orange-light"
              >
                Стационарный цех →
              </Link>
              <Link
                href="/uslugi"
                className="text-grc-muted transition hover:text-white/90"
              >
                Услуги →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RabotyCatalog />
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

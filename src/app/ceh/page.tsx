import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SubHeader } from "@/components/SubHeader";
import { cehPage, mondelisCase } from "@/data/ceh";

export const metadata = {
  title: "Стационарное производство | GRC",
  description:
    "Ремонт промышленного оборудования в цеху GRC: редукторы, валы, сварка, изготовление деталей. Производственная база в Щёлково.",
};

export default function CehPage() {
  return (
    <>
      <SubHeader />
      <main>
        <section className="relative overflow-hidden border-b border-grc-border">
          <div className="grc-grid-bg absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
                {cehPage.subtitle}
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
                {cehPage.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-grc-muted">
                {cehPage.lead}
              </p>
              <ul className="mt-6 space-y-2">
                {cehPage.why.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white"
                  >
                    <span className="mt-1 text-grc-orange">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="rounded-sm bg-grc-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-grc-orange-light"
                >
                  Отправить чертёж или фото узла
                </Link>
                <Link
                  href="/raboty"
                  className="rounded-sm border border-grc-border bg-grc-steel px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-grc-muted"
                >
                  Все проекты
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-grc-border">
              <Image
                src={cehPage.heroImage}
                alt={cehPage.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-grc-border py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white sm:text-3xl">
              Возможности цеха
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-grc-muted">
              Стационарная металлообработка, подготовка оснастки и
              станкостроение для выездных бригад — на одной производственной базе.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {cehPage.capabilities.map((cap) => (
                <article
                  key={cap.title}
                  className="rounded-sm border border-grc-border bg-grc-steel p-6"
                >
                  <h3 className="font-semibold text-grc-orange-light">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-grc-muted">
                    {cap.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id={mondelisCase.id}
          className="scroll-mt-20 border-b border-grc-border bg-grc-steel/30 py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
              Кейс в цеху
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-white">
              {mondelisCase.title}
            </h2>
            <p className="mt-2 text-grc-orange-light">{mondelisCase.client}</p>
            <p className="mt-4 max-w-3xl text-grc-muted">{mondelisCase.intro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {mondelisCase.images.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm border border-grc-border"
                >
                  <Image
                    src={src}
                    alt={`${mondelisCase.title} — фото ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <div className="rounded-sm border border-grc-border bg-grc-graphite p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white">
                  {mondelisCase.task.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-grc-muted">
                  {mondelisCase.task.body.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-sm border border-grc-border bg-grc-graphite p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white">
                  {mondelisCase.solution.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-grc-muted">
                  {mondelisCase.solution.body.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-sm border border-grc-orange/40 bg-grc-orange/5 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white">
                  {mondelisCase.result.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-grc-muted">
                  {mondelisCase.result.body}
                </p>
                <p className="mt-6 text-xs text-grc-muted">
                  Также в каталоге:{" "}
                  <Link href="/raboty" className="text-grc-orange hover:underline">
                    все проекты →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

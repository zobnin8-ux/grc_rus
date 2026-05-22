import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SubHeader } from "@/components/SubHeader";
import { industries, serviceDirections } from "@/data/uslugi";
import { services } from "@/data/site";

export const metadata = {
  title: "Услуги | GRC",
  description:
    "Ремонт промышленного оборудования и спецтехники: мобильная металлообработка, стационарный цех, отрасли.",
};

export default function UslugiPage() {
  return (
    <>
      <SubHeader />
      <main>
        <section className="grc-band relative overflow-hidden border-b border-grc-border py-14">
          <div className="grc-grid-bg absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
              Услуги
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase text-white sm:text-5xl">
              Что мы ремонтируем
            </h1>
            <p className="mt-4 max-w-2xl text-grc-muted">
              Четыре направления работ и конкретные компетенции — от выездной
              расточки до восстановления редукторов в цеху.
            </p>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {serviceDirections.map((dir) => (
                <Link
                  key={dir.slug}
                  href={dir.href}
                  className="group overflow-hidden rounded-sm border border-grc-line bg-white shadow-sm transition hover:border-grc-orange/50 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={dir.image}
                      alt={dir.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-grc-ink">
                      {dir.title}
                    </h2>
                    <p className="mt-2 text-sm text-grc-ink-muted">
                      {dir.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {dir.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-sm border border-grc-line bg-grc-soft px-2 py-1 text-xs text-grc-ink-muted"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-grc-orange">
                      Подробнее →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="otrasli"
          className="scroll-mt-20 border-y border-grc-line bg-grc-soft py-12"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-grc-ink">
              Отрасли
            </h2>
            <p className="mt-2 text-sm text-grc-ink-muted">
              Работаем с предприятиями полного цикла — примеры в{" "}
              <Link href="/raboty" className="text-grc-orange hover:underline">
                каталоге проектов
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((name) => (
                <span
                  key={name}
                  className="rounded-sm border border-grc-line bg-white px-4 py-2 text-xs font-semibold text-grc-ink-muted"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-grc-ink">
              Компетенции по узлам
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-sm border border-grc-line bg-grc-paper p-4"
                >
                  <h3 className="text-sm font-semibold text-grc-ink">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-grc-ink-muted">
                    {s.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

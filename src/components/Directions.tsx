import Image from "next/image";
import Link from "next/link";
import { directions } from "@/data/site";

export function Directions() {
  return (
    <section id="directions" className="scroll-mt-20 border-b border-grc-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
            Два формата работ
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-white sm:text-4xl">
            Выезд и стационарный цех
          </h2>
          <p className="mt-4 text-grc-muted">
            Внешнее ремонтное подразделение для завода: приезжаем на простой или
            принимаем узел на базе.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {directions.map((dir) => (
            <article
              key={dir.title}
              className="group overflow-hidden rounded-sm border border-grc-border bg-grc-steel transition hover:border-grc-orange/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={dir.image}
                  alt={dir.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grc-steel via-grc-steel/20 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white">
                  {dir.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-grc-muted">
                  {dir.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {dir.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-sm border border-grc-border bg-grc-graphite px-3 py-1 text-xs text-grc-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                {dir.href ? (
                  <Link
                    href={dir.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-grc-orange transition hover:text-grc-orange-light"
                  >
                    Подробнее о выезде
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

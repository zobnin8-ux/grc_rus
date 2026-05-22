import Image from "next/image";
import Link from "next/link";
import type { CaseDetail } from "@/data/case-details";

export function CaseDetailView({ data }: { data: CaseDetail }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/raboty"
          className="text-sm text-grc-muted transition hover:text-grc-orange"
        >
          ← Все проекты
        </Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
          Разбор проекта
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
          {data.title}
        </h1>
        <p className="mt-2 text-lg text-grc-orange-light">{data.client}</p>
        <p className="mt-4 max-w-3xl text-grc-muted">{data.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {data.images.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-sm border border-grc-border"
            >
              <Image
                src={src}
                alt={`${data.title} — ${i + 1}`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-sm border border-grc-border bg-grc-graphite p-6">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white">
              {data.task.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-grc-muted">
              {data.task.body.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-grc-border bg-grc-graphite p-6">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white">
              {data.solution.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-grc-muted">
              {data.solution.body.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-grc-orange/40 bg-grc-orange/5 p-6">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white">
              {data.result.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-grc-muted">
              {data.result.body}
            </p>
            {data.meta ? (
              <dl className="mt-6 space-y-3 border-t border-grc-border pt-4 text-xs">
                {data.meta.map((row) => (
                  <div key={row.label}>
                    <dt className="uppercase tracking-wider text-grc-muted">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-white">{row.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </div>

        <Link
          href="/#contact"
          className="mt-10 inline-block rounded-sm bg-grc-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-grc-orange-light"
        >
          Обсудить похожую задачу
        </Link>
      </div>
    </section>
  );
}

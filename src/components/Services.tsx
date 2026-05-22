import Link from "next/link";
import { serviceDirections } from "@/data/uslugi";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
              Компетенции
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-white sm:text-4xl">
              Что ремонтируем
            </h2>
            <p className="mt-4 text-grc-muted">
              Язык задач главного механика — конкретные узлы и сроки возврата в
              работу.
            </p>
          </div>
          <Link
            href="/uslugi"
            className="shrink-0 rounded-sm border border-grc-orange px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-grc-orange transition hover:bg-grc-orange hover:text-white"
          >
            Все услуги
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {serviceDirections.map((dir) => (
            <Link
              key={dir.slug}
              href={dir.href}
              className="rounded-sm border border-grc-border bg-grc-steel/60 p-5 transition hover:border-grc-orange/40"
            >
              <h3 className="font-semibold text-white">{dir.title}</h3>
              <p className="mt-2 text-sm text-grc-muted">{dir.description}</p>
              <span className="mt-3 inline-block text-xs font-bold uppercase text-grc-orange">
                Подробнее →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-sm border border-grc-border/60 bg-grc-graphite/40 p-4"
            >
              <h3 className="text-xs font-semibold text-white">{service.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-grc-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

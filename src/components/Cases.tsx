import Image from "next/image";
import { cases } from "@/data/site";

export function Cases() {
  return (
    <section id="cases" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
              Практика
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-white sm:text-4xl">
              Реальные проекты
            </h2>
            <p className="mt-4 text-grc-muted">
              Кейсы с реальными заказчиками — восстановление вместо закупки нового
              узла и срыва графика ремонта.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-sm border border-grc-border bg-grc-steel"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider text-grc-orange"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-2 text-base font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-grc-orange-light">
                  {item.client}
                </p>
                <p className="mt-3 flex-1 text-sm text-grc-muted">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

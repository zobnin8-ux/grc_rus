import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
            Компетенции
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-white sm:text-4xl">
            Что ремонтируем
          </h2>
          <p className="mt-4 text-grc-muted">
            Язык задач главного механика — не «адаптивное производство», а
            конкретные узлы и сроки возврата в работу.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="flex flex-col rounded-sm border border-grc-border bg-grc-steel/60 p-5 transition hover:border-grc-orange/40 hover:bg-grc-steel"
            >
              <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-grc-border transition group-hover:text-grc-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-semibold text-white">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-grc-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

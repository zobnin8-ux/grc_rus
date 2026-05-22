export function Urgency() {
  return (
    <section className="border-y border-grc-orange/30 bg-grc-orange/10 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white sm:text-3xl">
          Станок встал — производство теряет деньги каждый час
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-grc-muted">
          Мобилизуем бригаду и оборудование под ваш график ремонта. Цель — вернуть
          узел в работу без покупки нового агрегата и без растягивания простоя.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase tracking-wide text-white">
          <span className="rounded-sm border border-grc-border bg-grc-graphite px-4 py-2">
            Срочный выезд
          </span>
          <span className="rounded-sm border border-grc-border bg-grc-graphite px-4 py-2">
            Работа в окно ремонта
          </span>
          <span className="rounded-sm border border-grc-border bg-grc-graphite px-4 py-2">
            Восстановление вместо замены
          </span>
        </div>
      </div>
    </section>
  );
}

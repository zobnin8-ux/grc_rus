import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-y border-grc-line bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
            Процесс
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-grc-ink sm:text-4xl">
            Как проходит работа
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-sm border border-grc-line bg-grc-paper p-6"
            >
              <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-grc-orange/25">
                {item.step}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold uppercase text-grc-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grc-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

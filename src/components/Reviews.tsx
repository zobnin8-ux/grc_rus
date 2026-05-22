import { clientLogos, reviews } from "@/data/site";

export function Reviews() {
  return (
    <section className="border-t border-grc-line bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
            Доверие
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-grc-ink sm:text-4xl">
            Отзывы заказчиков
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {clientLogos.map((name) => (
            <span
              key={name}
              className="rounded-sm border border-grc-line bg-grc-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-grc-ink-muted"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              className="flex flex-col rounded-sm border border-grc-line bg-grc-paper p-6"
            >
              <p className="flex-1 text-sm leading-relaxed text-grc-ink-muted">
                «{review.quote}»
              </p>
              <footer className="mt-4 border-t border-grc-line pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-grc-ink">
                    {review.author}
                  </span>
                  <span className="text-xs text-grc-orange">{review.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

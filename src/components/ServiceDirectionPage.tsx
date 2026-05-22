import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  lead: string;
  heroImage: string;
  operations: { title: string; description: string }[] | string[];
  when: string[];
  relatedCase: { title: string; client: string; href: string };
  productionHref: string;
  productionLabel: string;
};

export function ServiceDirectionPage({
  title,
  subtitle,
  lead,
  heroImage,
  operations,
  when,
  relatedCase,
  productionHref,
  productionLabel,
}: Props) {
  const opsList = operations.map((op) =>
    typeof op === "string" ? { title: op, description: "" } : op,
  );

  return (
    <main>
      <section className="relative overflow-hidden border-b border-grc-border">
        <div className="grc-grid-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <Link
              href="/uslugi"
              className="text-sm text-grc-muted transition hover:text-grc-orange"
            >
              ← Все услуги
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
              {subtitle}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-grc-muted">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="rounded-sm bg-grc-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-grc-orange-light"
              >
                Запросить оценку
              </Link>
              <Link
                href={productionHref}
                className="rounded-sm border border-grc-border bg-grc-steel px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-grc-muted"
              >
                {productionLabel}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-grc-border">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-grc-border py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white">
            Что входит в услугу
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {opsList.map((op) => (
              <article
                key={op.title}
                className="rounded-sm border border-grc-border bg-grc-steel p-5"
              >
                <h3 className="font-semibold text-grc-orange-light">{op.title}</h3>
                {op.description ? (
                  <p className="mt-2 text-sm text-grc-muted">{op.description}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-grc-border bg-grc-steel/30 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white">
            Когда обращаются
          </h2>
          <ul className="mt-6 space-y-2">
            {when.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-grc-muted">
                <span className="text-grc-orange">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={relatedCase.href}
            className="mt-8 inline-block rounded-sm border border-grc-orange/50 bg-grc-graphite p-5 transition hover:border-grc-orange"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-grc-orange">
              Пример из практики
            </p>
            <p className="mt-2 font-semibold text-white">{relatedCase.title}</p>
            <p className="text-sm text-grc-muted">{relatedCase.client}</p>
            <span className="mt-2 inline-block text-xs font-bold uppercase text-grc-orange">
              Смотреть →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

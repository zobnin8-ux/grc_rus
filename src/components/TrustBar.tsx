import { trustStats } from "@/data/site";

export function TrustBar() {
  return (
    <section className="border-b border-grc-border bg-grc-steel">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-grc-border sm:grid-cols-3 lg:grid-cols-5">
        {trustStats.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center bg-grc-steel px-4 py-8 text-center"
          >
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-grc-orange sm:text-3xl">
              {item.value}
            </span>
            <span className="mt-1 text-xs uppercase tracking-wider text-grc-muted">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

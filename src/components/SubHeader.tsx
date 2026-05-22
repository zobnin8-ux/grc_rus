import Link from "next/link";
import { brand } from "@/data/site";

export function SubHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-grc-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-wide text-grc-orange transition group-hover:text-grc-orange-light">
            {brand.name}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-grc-ink-muted">
            {brand.tagline}
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm text-grc-ink-muted transition hover:text-grc-ink"
        >
          ← На главную
        </Link>
      </div>
    </header>
  );
}

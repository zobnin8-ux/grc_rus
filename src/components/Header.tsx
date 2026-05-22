import { brand } from "@/data/site";

const nav = [
  { href: "/uslugi", label: "Услуги" },
  { href: "#directions", label: "Производство" },
  { href: "/raboty", label: "Наши работы" },
  { href: "#process", label: "Как работаем" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-grc-border/80 bg-grc-graphite/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="group flex flex-col leading-none">
          <span
            className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-wide text-grc-orange transition group-hover:text-grc-orange-light"
          >
            {brand.name}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-grc-muted">
            {brand.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-grc-muted md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={brand.phoneHref}
            className="hidden text-sm font-semibold text-white sm:block"
          >
            {brand.phone}
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-grc-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-grc-orange-light"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </header>
  );
}

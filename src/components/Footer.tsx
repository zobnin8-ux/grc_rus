import { brand } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-grc-border bg-grc-graphite py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-grc-muted sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-bold text-grc-orange">
            {brand.name}
          </p>
          <p className="text-xs uppercase tracking-widest">{brand.tagline}</p>
        </div>
        <p className="max-w-md text-xs leading-relaxed">
          Концепт-демо промышленного лендинга. Не является официальным сайтом
          заказчика. Создано для демонстрации подхода к B2B-ремонту.
        </p>
        <p className="text-xs">© {new Date().getFullYear()} GRC concept demo</p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { brand, images } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-grc-border">
      <div className="grc-grid-bg absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-grc-graphite via-grc-graphite/95 to-grc-graphite/40" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="mb-4 inline-block border border-grc-orange/40 bg-grc-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-grc-orange-light">
            {brand.legal} · концепт-демо
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Ремонт промышленного оборудования и спецтехники
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-grc-muted">
            Валы, корпуса, посадки, гидравлика, редукторы, прессы и
            крупногабаритные узлы.{" "}
            <span className="text-white">
              Свой цех и выездные бригады с мобильными станками
            </span>{" "}
            — по всей России, в том числе при аварийном простое.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-sm bg-grc-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-grc-orange-light"
            >
              Отправить фото поломки
            </a>
            <a
              href={brand.phoneHref}
              className="rounded-sm border border-grc-border bg-grc-steel px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-grc-muted"
            >
              Связаться с инженером
            </a>
          </div>

          <p className="mt-6 text-sm text-grc-muted">
            Ответим в рабочее время · оценим сроки и формат работ: выезд или цех
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-grc-border shadow-2xl shadow-black/50 lg:aspect-square">
          <Image
            src={images.hero}
            alt="Промышленный ремонт GRC — работы на объекте"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grc-graphite/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 rounded-sm border border-white/10 bg-grc-graphite/80 p-4 backdrop-blur-sm">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase text-white">
              Мобильные станки на объекте
            </p>
            <p className="text-sm text-grc-muted">
              Без демонтажа · без лишней логистики · под график ремонта
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

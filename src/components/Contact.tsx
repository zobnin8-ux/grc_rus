"use client";

import { brand } from "@/data/site";
import { FormEvent, useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-grc-orange">
            Связь
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase text-white sm:text-4xl">
            Опишите задачу
          </h2>
          <p className="mt-4 text-grc-muted">
            Укажите узел, оборудование и срочность. Инженер уточнит возможность
            выезда или работы в цеху.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={brand.phoneHref}
              className="block font-[family-name:var(--font-display)] text-2xl font-bold text-white hover:text-grc-orange-light"
            >
              {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="block text-grc-muted hover:text-white"
            >
              {brand.email}
            </a>
          </div>
        </div>

        <div className="rounded-sm border border-grc-border bg-grc-steel p-6 sm:p-8">
          {sent ? (
            <div className="py-12 text-center">
              <p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white">
                Заявка принята
              </p>
              <p className="mt-2 text-sm text-grc-muted">
                Демо-форма: в продакшене здесь будет отправка на почту или CRM.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs font-semibold uppercase text-grc-muted">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-sm border border-grc-border bg-grc-graphite px-3 py-2 text-white outline-none focus:border-grc-orange"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs font-semibold uppercase text-grc-muted">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-sm border border-grc-border bg-grc-graphite px-3 py-2 text-white outline-none focus:border-grc-orange"
                />
              </div>
              <div>
                <label htmlFor="company" className="text-xs font-semibold uppercase text-grc-muted">
                  Организация
                </label>
                <input
                  id="company"
                  name="company"
                  className="mt-1 w-full rounded-sm border border-grc-border bg-grc-graphite px-3 py-2 text-white outline-none focus:border-grc-orange"
                />
              </div>
              <div>
                <label htmlFor="task" className="text-xs font-semibold uppercase text-grc-muted">
                  Описание задачи
                </label>
                <textarea
                  id="task"
                  name="task"
                  rows={4}
                  required
                  placeholder="Узел, оборудование, срочность, есть ли фото..."
                  className="mt-1 w-full resize-y rounded-sm border border-grc-border bg-grc-graphite px-3 py-2 text-white outline-none placeholder:text-grc-muted/60 focus:border-grc-orange"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-grc-orange py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-grc-orange-light"
              >
                Отправить заявку
              </button>
              <p className="text-center text-xs text-grc-muted">
                Нажимая кнопку, вы соглашаетесь на обработку данных (демо).
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

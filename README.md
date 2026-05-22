# GRC RU — концепт-демо

Одностраничный лендинг на русском языке для демонстрации подхода к промышленному B2B (ремонт оборудования, выезд + цех).

- **Стек:** Next.js 15, React 19, Tailwind CSS 4
- **Деплой:** Vercel
- **Репозиторий:** [github.com/zobnin8-ux/grc_rus](https://github.com/zobnin8-ux/grc_rus)

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm run start
```

## Примечание

Демо-форма заявки не отправляет данные на сервер. Изображения подгружаются с `www.1grc.ru` (remote images в `next.config.ts`).

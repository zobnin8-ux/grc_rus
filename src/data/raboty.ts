export type WorkFilter =
  | "all"
  | "vyezd"
  | "ceh"
  | "metal"
  | "tpa"
  | "press";

export type WorkProject = {
  slug: string;
  title: string;
  client: string;
  result: string;
  image: string;
  tags: string[];
  filters: Exclude<WorkFilter, "all">[];
  detail?: boolean;
  href?: string;
};

const img = {
  i3: "https://www.1grc.ru/wp-content/uploads/2025/12/image-3.jpg",
  i4: "https://www.1grc.ru/wp-content/uploads/2025/12/image-4.jpg",
  i5: "https://www.1grc.ru/wp-content/uploads/2025/12/image-5.jpg",
  i6: "https://www.1grc.ru/wp-content/uploads/2025/12/image-6.jpg",
  home1: "https://www.1grc.ru/wp-content/themes/grc/assets/images/home_1.jpg",
  home2: "https://www.1grc.ru/wp-content/themes/grc/assets/images/home_2.jpg",
  hero: "https://www.1grc.ru/wp-content/themes/grc/assets/images/video-poster.jpg",
};

export const workFilters: { id: WorkFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "vyezd", label: "Выезд" },
  { id: "ceh", label: "Цех" },
  { id: "metal", label: "Металлургия" },
  { id: "tpa", label: "ТПА" },
  { id: "press", label: "Прессы" },
];

export const workProjects: WorkProject[] = [
  {
    slug: "nlmk-stan-2000",
    title: "Восстановление проёма станины клетей СТАН-2000",
    client: "ПАО «НЛМК»",
    result: "Проём под упоры рабочих планок — в проектные размеры, в срок капремонта.",
    image: img.i3,
    tags: ["Металлургия", "Выезд"],
    filters: ["vyezd", "metal"],
  },
  {
    slug: "severstal-konverter",
    title: "Фрезеровка паза цапфы конвертера",
    client: "ПАО «Северсталь»",
    result: "Работы в окно капитального ремонта — качество и сроки по договору.",
    image: img.i4,
    tags: ["Металлургия", "Выезд"],
    filters: ["vyezd", "metal"],
  },
  {
    slug: "szfk-melnica",
    title: "Восстановление цапфы шаровой мельницы",
    client: "АО «СЗФК»",
    result: "Восстановление ширины борта цапфы на обогатительной фабрике без лишнего простоя.",
    image: img.i6,
    tags: ["ГОК", "Выезд"],
    filters: ["vyezd", "metal"],
  },
  {
    slug: "norilsk-zf",
    title: "Проточка жёлоба копровых шкивов на ЗФ",
    client: "ПАО «ГМК «Норильский никель»",
    result: "Работы впервые в условиях ЗФ — выполнены в минимальные сроки.",
    image: img.hero,
    tags: ["Металлургия", "Выезд"],
    filters: ["vyezd", "metal"],
    detail: true,
    href: "/raboty/norilsk-zf",
  },
  {
    slug: "uaz-press",
    title: "Мобильная расточка траверсы пресса Эрфурт",
    client: "Ульяновский автомобильный завод",
    result: "10 букс на площадке завода, соосность ±0,05 мм без снятия с линии.",
    image: img.i4,
    tags: ["Пресс", "Выезд"],
    filters: ["vyezd", "press"],
    detail: true,
    href: "/vyezd#kejs-uaz",
  },
  {
    slug: "kamaz-press",
    title: "Ремонт станины пресса LZK-6300",
    client: "ПАО «КАМАЗ», Кузнечный завод",
    result: "Мобильное оборудование на КПК-1 — качественно и в согласованные сроки.",
    image: img.i5,
    tags: ["Пресс", "Выезд"],
    filters: ["vyezd", "press"],
    detail: true,
    href: "/raboty/kamaz-press",
  },
  {
    slug: "mondelis-frisse",
    title: "Восстановление зубчатого колеса конш-машины FRISSE",
    client: "Mondelēz Русь",
    result: "Узел возвращён в работу без закупки импортного компонента.",
    image: img.i3,
    tags: ["Редуктор", "Цех"],
    filters: ["ceh", "press"],
  },
  {
    slug: "husky-grajner",
    title: "Мобильная фрезеровка колонны ТПА Husky",
    client: "ООО «Грайнер Пэкэджин Систем»",
    result: "Работы раньше срока, параллельность и соосность в допуске.",
    image: img.i5,
    tags: ["ТПА", "Выезд"],
    filters: ["vyezd", "tpa"],
  },
  {
    slug: "demag-mir-upakovki",
    title: "Восстановление отверстий в плитах ТПА Demag",
    client: "ООО «Мир Упаковки Сибирь»",
    result: "Первый совместный проект — в установленные сроки, высокий уровень работ.",
    image: img.i6,
    tags: ["ТПА", "Выезд"],
    filters: ["vyezd", "tpa"],
  },
  {
    slug: "ammoniy-m68",
    title: "Расточка отверстия М68×3 на площадке аппарата",
    client: "АО «Аммоний»",
    result: "3 дня на площадке — ремонтный срок аппарата не увеличен.",
    image: img.home1,
    tags: ["Химия", "Выезд"],
    filters: ["vyezd", "metal"],
  },
  {
    slug: "volgodonsk-kran",
    title: "Мехобработка колонн портального крана",
    client: "Волгодонский ЗМО",
    result: "Крупногабаритные работы мобильным оборудованием на площадке заказчика.",
    image: img.i5,
    tags: ["Кран", "Выезд"],
    filters: ["vyezd", "metal"],
  },
  {
    slug: "balakovo-kran",
    title: "Аварийный ремонт барабана мостового крана 240 т",
    client: "АО «Металлургический завод Балаково»",
    result: "Оперативная помощь при аварии — профессионализм и результативность.",
    image: img.hero,
    tags: ["Кран", "Выезд"],
    filters: ["vyezd", "metal"],
  },
  {
    slug: "petromax-fuchs",
    title: "Фрезеровка фланцев перегружателя FUCHS MHL340",
    client: "АО «Петромакс»",
    result: "Опорные поворотные устройства — в срок и с надлежащим качеством.",
    image: img.i4,
    tags: ["Спецтехника", "Выезд"],
    filters: ["vyezd"],
  },
  {
    slug: "es-del-iveco",
    title: "Восстановление цапфы моста Iveco Daily",
    client: "ООО «Эс-Дэл»",
    result: "Оперативная помощь — надёжный партнёр по восстановлению узлов.",
    image: img.i3,
    tags: ["Спецтехника", "Цех"],
    filters: ["ceh"],
  },
  {
    slug: "tomskneftekhim",
    title: "Шлифовка роторных колец компрессоров",
    client: "ООО «Томскнефтехим»",
    result: "Мобильные станки собственной разработки — без демонтажа узлов.",
    image: img.home2,
    tags: ["Химия", "Выезд"],
    filters: ["vyezd", "metal"],
  },
  {
    slug: "sveza-traversa",
    title: "Ремонт траверсы прижимной линейки",
    client: "НАО «СВЕЗА Усть-Ижора»",
    result: "Оперативный ремонт сложного узла лущильной линии.",
    image: img.i6,
    tags: ["ЦБП", "Выезд"],
    filters: ["vyezd"],
  },
  {
    slug: "ashinsky-dsp",
    title: "Ремонт электрододержателей ДСП-120",
    client: "ПАО «Ашинский метзавод»",
    result: "Портативный фрезерный станок с ЧПУ — цех продолжил работу без срыва.",
    image: img.i4,
    tags: ["Металлургия", "Выезд"],
    filters: ["vyezd", "metal"],
  },
  {
    slug: "konar-frezer",
    title: "Мобильный фрезерный станок для ЦСКМС",
    client: "АО «КОНАР»",
    result: "Нестандартный станок под проект — надёжная работа в полевых условиях.",
    image: img.home1,
    tags: ["Судостроение", "Выезд"],
    filters: ["vyezd"],
  },
];

export const featuredOnHome = workProjects.filter((p) =>
  [
    "mondelis-frisse",
    "uaz-press",
    "volgodonsk-kran",
    "szfk-melnica",
    "ashinsky-dsp",
    "kamaz-press",
  ].includes(p.slug),
);

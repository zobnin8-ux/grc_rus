import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  variable: "--font-source",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GRC | Ремонт промышленного оборудования и спецтехники",
  description:
    "Ремонт промышленного оборудования и спецтехники: мобильная металлообработка, стационарный цех, выезд по России. Концепт-демо.",
  openGraph: {
    title: "GRC — ваше ремонтное подразделение",
    description:
      "Восстановление узлов на объекте и в цеху. Срочный выезд, собственные мобильные станки.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${oswald.variable} ${sourceSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

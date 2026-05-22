import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { CaseDetailView } from "@/components/CaseDetailView";
import { Footer } from "@/components/Footer";
import { SubHeader } from "@/components/SubHeader";
import { caseDetails, caseDetailSlugs } from "@/data/case-details";

export function generateStaticParams() {
  return caseDetailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = caseDetails[slug];
  if (!data) return { title: "Проект | GRC" };
  return {
    title: `${data.title} | GRC`,
    description: data.intro,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = caseDetails[slug];
  if (!data) notFound();

  return (
    <>
      <SubHeader />
      <main>
        <CaseDetailView data={data} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

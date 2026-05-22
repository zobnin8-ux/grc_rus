import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ServiceDirectionPage } from "@/components/ServiceDirectionPage";
import { SubHeader } from "@/components/SubHeader";
import { industrialServicePage } from "@/data/uslugi";

export const metadata = {
  title: "Ремонт промышленного оборудования | GRC",
  description: industrialServicePage.lead,
};

export default function PromyshlennoePage() {
  return (
    <>
      <SubHeader />
      <ServiceDirectionPage
        {...industrialServicePage}
        productionLabel="Стационарный цех →"
      />
      <Contact />
      <Footer />
    </>
  );
}

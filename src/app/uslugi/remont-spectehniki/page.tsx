import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ServiceDirectionPage } from "@/components/ServiceDirectionPage";
import { SubHeader } from "@/components/SubHeader";
import { specServicePage } from "@/data/uslugi";

export const metadata = {
  title: "Ремонт спецтехники | GRC",
  description: specServicePage.lead,
};

export default function SpectehnikaPage() {
  return (
    <>
      <SubHeader />
      <ServiceDirectionPage
        {...specServicePage}
        productionLabel="Примеры работ →"
      />
      <Contact />
      <Footer />
    </>
  );
}

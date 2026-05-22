import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ServiceDirectionPage } from "@/components/ServiceDirectionPage";
import { SubHeader } from "@/components/SubHeader";
import { mobileServicePage } from "@/data/uslugi";

export const metadata = {
  title: "Мобильная металлообработка | GRC",
  description: mobileServicePage.lead,
};

export default function MobilnayaPage() {
  return (
    <>
      <SubHeader />
      <ServiceDirectionPage
        {...mobileServicePage}
        productionLabel="Выездное производство →"
      />
      <Contact />
      <Footer />
    </>
  );
}

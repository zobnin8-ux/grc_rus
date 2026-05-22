import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Directions } from "@/components/Directions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { Urgency } from "@/components/Urgency";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Directions />
        <Services />
        <Process />
        <Cases />
        <Reviews />
        <Urgency />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

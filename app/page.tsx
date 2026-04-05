import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Schedule from "@/components/sections/Schedule";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Schedule />
      <FAQ />
      <Footer />
    </main>
  );
}

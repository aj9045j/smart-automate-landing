import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Technologies } from "@/components/Technologies";
import { CaseStudies } from "@/components/CaseStudies";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Technologies />
      <CaseStudies />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
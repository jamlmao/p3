import CTABanner from "@/components/CTA";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen">
        <HeroSection />
        <Services />
        <CTABanner />
      </div>
    </>
  );
}

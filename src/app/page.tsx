import CallToAction from "@/components/CTA";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import LogoCloud from "@/components/LogoCloud"



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen  items-center">
        <HeroSection />
        <Services />
        <LogoCloud />
        <CallToAction />
      </div>
    </>
  );
}

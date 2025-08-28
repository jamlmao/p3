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
        {/*  
          About with stat
          content or other information for advertising or something like a hero component
          pricing
          testimonials
          logocloud
          faqs
          contact
          footer
        */}
        <LogoCloud />
        <CallToAction />
      </div>
    </>
  );
}

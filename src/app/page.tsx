
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import LogoCloud from "@/components/LogoCloud"
import AboutPage from "@/components/About";
import RetailPOSShowcase from "@/components/ShowCase";
import TestimonialsSection from "@/components/Testimonials";
import Price from "@/components/Price";
import FAQ from "@/components/Faqs";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen  items-center">
        <HeroSection />
        <Services />
        <AboutPage />
        <RetailPOSShowcase />
        <Price />
        <TestimonialsSection />
        <LogoCloud />      
        <FAQ />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

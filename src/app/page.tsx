import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen">
        <HeroSection />
      </div>
    </>
  );
}

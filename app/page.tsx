import Navbar from "@/src/landing/components/Navbar";
import Hero from "@/src/landing/sections/Hero";
import TrustBar from "@/src/landing/sections/TrustBar";
import ValueProp from "@/src/landing/sections/ValueProp";
import MenuCarousel from "@/src/landing/sections/MenuCarousel";
import Story from "@/src/landing/sections/Story";
import HowItWorks from "@/src/landing/sections/HowItWorks";
import Footer from "@/src/landing/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBEB] selection:bg-[#D52A28] selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <ValueProp />
      <MenuCarousel />
      <Story />
      <HowItWorks />
      <Footer />
    </main>
  );
}

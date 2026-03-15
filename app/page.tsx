import { Navbar } from "@/src/landing/sections/Navbar";
import { Hero } from "@/src/landing/sections/Hero";
import { ValueGrid } from "@/src/landing/sections/ValueGrid";
import { Signatures } from "@/src/landing/sections/Signatures";
import { ProcessTrust } from "@/src/landing/sections/ProcessTrust";
import { Footer } from "@/src/landing/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueGrid />
      <Signatures />
      <ProcessTrust />
      <Footer />
    </main>
  );
}

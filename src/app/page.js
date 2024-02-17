import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212">
      <Navbar />
      <div class="container mt-28 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        </div>
    </main>
  );
}

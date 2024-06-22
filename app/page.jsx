import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import Topbar from "@/components/home/Topbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

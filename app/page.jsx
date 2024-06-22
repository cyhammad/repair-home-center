import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/header/home/AboutSection";
import Header from "@/components/header/home/Header";
import StatsSection from "@/components/header/home/StatsSection";
import Topbar from "@/components/header/home/Topbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
    </div>
  );
}

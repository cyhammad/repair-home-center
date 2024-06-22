import HeroSection from "@/components/HeroSection";
import Header from "@/components/header/home/Header";
import Topbar from "@/components/header/home/Topbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Header />
      <HeroSection />
    </div>
  );
}

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/home/Header";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Topbar from "@/components/Topbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ScheduleAppointmentSection from "@/components/ScheduleAppointmentSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ScheduleAppointmentSection />
      <Footer />
    </div>
  );
}

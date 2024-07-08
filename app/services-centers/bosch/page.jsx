import HeroSection from "@/components/HeroSection";
import BoschHeader from "@/components/bosch/BoschHeader";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScheduleAppointmentSection from "@/components/ScheduleAppointmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const BoschPage = () => {
  return (
    <div className="flex flex-col">
      <BoschHeader />
      <HeroSection company="bosch" title="Bosch Service Center:" />
      <StatsSection />
      <AboutSection company="bosch" />
      <ServicesSection company="bosch" />
      <WhyChooseUs />
      <ScheduleAppointmentSection company="bosch" />
      <Footer
        logo={
          <Link
            href="/services-centers/bosch"
            className="group flex items-center gap-2"
          >
            <Image
              src="/company/bosch-logo.svg"
              width={120}
              height={50}
              alt="logo"
            />
          </Link>
        }
      />
    </div>
  );
};

export default BoschPage;

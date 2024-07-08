import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/home/Header";
import ScheduleAppointmentSection from "@/components/ScheduleAppointmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const SiemensPage = () => {
  return (
    <div className="flex flex-col">
      <Header
        company="siemens"
        logo={
          <Link
            href="/services-centers/siemens"
            className="group flex items-center gap-2"
          >
            <Image
              src="/company/siemens-logo.svg"
              width={120}
              height={50}
              alt="logo"
            />
          </Link>
        }
      />
      <HeroSection
        company="siemens"
        title="Siemens Service Center:"
      />
      <StatsSection company="siemens" />
      <AboutSection company="siemens" />
      <ServicesSection company="siemens" />
      <WhyChooseUs />
      <ScheduleAppointmentSection company="siemens" />
      <Footer
        logo={
          <Link
            href="/services-centers/siemens"
            className="group flex items-center gap-2"
          >
            <Image
              src="/company/siemens-logo.svg"
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

export default SiemensPage;

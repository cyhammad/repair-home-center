import HeroSection from "@/components/lgHero";
import AboutSection from "@/components/AboutUs";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/home/Header";
import ScheduleAppointmentSection from "@/components/ScheduleAppointmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const LgPage = () => {
  return (
    <div className="flex flex-col">
      <Header
        company="lg"
        logo={
          <Link
            href="/services-centers/lg"
            className="group flex items-center gap-2"
          >
            <Image
              src="/company/lg-logo.svg"
              width={100}
              height={50}
              alt="logo"
            />
          </Link>
        }
      />
      <HeroSection company="lg" title="LG Service Center:" />
      <StatsSection company="lg" />
      <AboutSection company="lg" />
      <ServicesSection company="lg" />
      <WhyChooseUs />
      <ScheduleAppointmentSection company="lg" />
      <Footer
        logo={
          <Link
            href="/services-centers/lg"
            className="group flex items-center gap-2"
          >
            <Image
              src="/company/lg-logo.svg"
              width={100}
              height={50}
              alt="logo"
            />
          </Link>
        }
      />
    </div>
  );
};

export default LgPage;

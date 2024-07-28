import HeroSection from "@/components/samsungHero";
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

const SamsungPage = () => {
  return (
    <div className="flex flex-col">
      <Header 
              company="samsung"
        logo={
          <Link
            href="/services-centers/samsung"
            className="group flex items-center gap-2"
          >
            <Image
              src="/company/samsung-logo.svg"
              width={120}
              height={50}
              alt="logo"
            />
          </Link>
        }
      />
      <HeroSection
        company="samsung"
        title="Samsung Service Center:"
       
      />
      <StatsSection company="samsung" />
      <AboutSection company="samsung" />
      <ServicesSection company="samsung" />
      <WhyChooseUs />
      <ScheduleAppointmentSection company="samsung" />
      <Footer
        logo={
          <Link
            href="/services-centers/samsung"
            className="group flex items-center gap-2"
          >
            <Image
              src="/company/samsung-logo.svg"
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

export default SamsungPage;

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/home/Header";

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
      <HeroSection company="samsung" />
      <StatsSection />
      <AboutSection company="samsung" />
      <ServicesSection />
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

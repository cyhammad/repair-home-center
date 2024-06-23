import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/home/Header";

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
      <HeroSection company="lg" />
      <StatsSection />
      <AboutSection company="lg" />
      <ServicesSection />
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

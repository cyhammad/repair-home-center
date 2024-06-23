import HeroSection from "@/components/HeroSection";
import BoschHeader from "@/components/bosch/BoschHeader";
import AboutSection from "@/components/home/AboutSection";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BoschPage = () => {
  return (
    <div className="flex flex-col">
      <BoschHeader />
      <HeroSection company="bosch" />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
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

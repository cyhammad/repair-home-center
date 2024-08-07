import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  const cards = [
    {
      title: "20 Years Of Experience",
      description:
        "Delivering top-tier home repair services across the UAE with two decades of unmatched expertise and dedication to quality craftsmanship.",
    },
    {
      title: "30 Minutes Quick Appointment",
      description:
        "Get your home repairs done swiftly with our 30-minute quick appointment service, ensuring efficient solutions tailored to your needs.",
    },
    {
      title: "16 Technicians",
      description:
        "With a team of 16 skilled technicians, we offer comprehensive coverage and rapid response to all your home repair needs across the UAE.",
    },
    {
      title: "10k Repairs Experience",
      description:
        "Benefit from our extensive 10,000 repairs worth of experience, ensuring reliable solutions and expertise for your home repair needs.",
    },
  ];

  return (
    <div className="flex min-h-[600px] w-full items-center justify-center pb-16 pt-8 md:pt-5">
      <div className="flex w-full max-w-7xl flex-col px-5">
        <h1 className="text-center text-3xl font-black">Our Qualities</h1>
        <h1 className="mt-5 text-center text-gray-500">
          Appliances Care UAE established in Dubai and Abu Dhabi, provides
          home appliance repair and maintenance services over the phone.
        </h1>
        <div className="flex flex-wrap justify-between">
          {cards.map((card, index) => (
            <AboutUsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import ServicesCard from "./ServicesCard";

const Services = () => {
  const cards = [
    {
      title: "Washing Machine Repair",
      description:
        "Delivering top-tier, professional solutions that guarantee the optimal performance of your washing machine.",
      imageSrc: "/service1.jpg",
    },
    {
      title: "Refrigerator Repair",
      description:
        "Virtually every refrigerator problem can be fixed with our company services. We can fix any situation that involves refrigerators.",
      imageSrc: "/service2.jpg",
    },
    {
      title: "Television Repair",
      description:
        "Our professional TV repair service provides expert diagnostics and precise repairs ensuring optimal functionality.",
      imageSrc: "/service3.jpg",
    },
    {
      title: "Stove/Cooker Repair",
      description:
        "We offer fast and efficient repairs for all types of stoves and cookers. We only use high quality replacement part.",
      imageSrc: "/service4.jpg",
    },
    {
      title: "Dishwasher Repair",
      description:
        "We resolve common issues such as leaks, poor cleaning and unusual noises to ensure efficient cleaning.",
      imageSrc: "/service5.jpg",
    },
    {
      title: "Gas Oven Repair",
      description:
        "Be sure that you work with a team of professionals who will be able to help you every step of the way with your oven repair needs.",
      imageSrc: "/service6.jpg",
    },
    {
      title: "Dryer Repair",
      description:
        "Delivering top-tier, professional solutions that guarantee the optimal performance of your Dryer.",
      imageSrc: "/service7.jpg",
    },
  ];
  return (
    <>
      <div className="pt-10 px-5 text-center" id="services">
        <h1 className="mx-3 py-3 text-2xl font-bold md:mx-0 md:text-3xl">
          Our Services
        </h1>
        <p className="mx-3 md:mx-0">
          We are the largest full-service appliance repair company in the world.
          We service all types and brands of home appliances. People trust us.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {cards.map((card, index) => (
          <ServicesCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default Services;

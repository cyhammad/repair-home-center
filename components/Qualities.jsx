import QualityCard from "./QualityCard";

const Qualities = () => {
  const cards = [
    {
      number: 1,
      title: "High Quality Parts",
      description:
        "We use top-notch Parts to repair the Home Appliances in most efficient way for our customers",
    },
    {
      number: 2,
      title: "Dedicated 24-7 Support",
      description:
        "You can rely on our 24/7 tech support that will gladly solve any appliance issue you may have.",
    },
    {
      number: 3,
      title: "Excellent Customer Services",
      description:
        "We offer excellent customer services with highest ratio of retained Customers.",
    },
    {
      number: 4,
      title: "Quick Service and Appointments",
      description:
        "This type of approach to our work helps our specialists to quickly repair the Appliance.",
    },
    {
      number: 5,
      title: "High Quality Repairs",
      description:
        "We provide High Quality Repairs that can Last Longer improving the performance of the Appliance.",
    },
    {
      number: 6,
      title: "High Level of Usability",
      description:
        "All our repaired products have high usability allowing users to easily operate the appliances.",
    },
  ];

  return (
    <div className="mt-10 flex flex-col flex-wrap border-y border-black bg-gray-100 py-5">
      <h1 className="mb-6 pt-10 text-center text-4xl font-bold md:mb-0">
        Why Choose Us?
      </h1>
      <div className="mx-auto grid gap-4 md:gap-8 lg:grid-cols-3">
        {cards.map((card, index) => (
          <QualityCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Qualities;

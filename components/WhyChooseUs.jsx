import {
  AlarmClockCheck,
  Boxes,
  Clock,
  MessageCircleReply,
  ServerCrash,
  ShieldCheck,
  TimerReset,
  UsersRound,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section
      id="services"
      className="flex w-full items-center justify-center bg-secondary px-5 py-20"
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <Boxes className="h-5 w-5 text-yellow-500" />
          <span className="text-lg">Our Benefits</span>
        </div>
        <h1 className="text-4xl font-bold">
          Why Should We Be Your Top <br /> Choice?
        </h1>
        <span className="max-w-3xl text-sm font-medium text-primary/70">
          Our certified and experienced technicians bring unmatched expertise to
          every repair. Trust us to diagnose and fix your appliances accurately.
          We provide upfront quotes and transparent pricing. Choose Repair Home
          Center for reliable, hassle-free repairs.
        </span>
        <div className="grid items-center justify-center gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex w-full flex-col items-center gap-5 border-b border-black pb-7">
            <span className="rounded-full bg-black px-4 py-1.5 text-xs text-white">
              1
            </span>
            <h1 className="text-lg font-semibold">Quick Response Time</h1>
            <span className="text-black/75">
              This type of approach to our work helps our specialists to quickly
              repair the Appliance.
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-5 border-b border-black pb-7">
            <span className="rounded-full bg-black px-4 py-1.5 text-xs text-white">
              2
            </span>
            <h1 className="text-lg font-semibold">Experienced Technicians</h1>
            <span className="text-black/75">
              Delivering top-tier home repair services with unmatched expertise
              and dedication.
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-5 border-b border-black pb-7">
            <span className="rounded-full bg-black px-4 py-1.5 text-xs text-white">
              3
            </span>
            <h1 className="text-lg font-semibold">High Quality Parts</h1>
            <span className="text-black/75">
              We provide High Quality Repairs that can Last Longer improving the
              performance.
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-5 border-b border-black pb-7">
            <span className="rounded-full bg-black px-4 py-1.5 text-xs text-white">
              4
            </span>
            <h1 className="text-lg font-semibold">24/7 Support</h1>
            <span className="text-black/75">
              You can rely on our 24/7 tech support that will gladly solve any
              appliance issue.
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-5 border-b border-black pb-7">
            <span className="rounded-full bg-black px-4 py-1.5 text-xs text-white">
              5
            </span>
            <h1 className="text-lg font-semibold">Quality Service</h1>
            <span className="text-black/75">
              We offer excellent customer services with highest ratio of
              retained Customers.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

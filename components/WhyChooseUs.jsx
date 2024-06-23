import { Boxes, MessageCircleReply } from "lucide-react";

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
        <div className="flex flex-wrap items-center justify-center gap-5 py-10">
          <div className="flex h-56 w-56 cursor-pointer flex-col items-center justify-center gap-5 border-2 border-black/20 p-5 transition-all duration-200 ease-in-out hover:border-yellow-400">
            <MessageCircleReply className="h-16 w-16 text-yellow-500" />
            <h1 className="text-sm font-semibold">Quick Response Time</h1>
          </div>
          <div className="flex h-56 w-56 cursor-pointer flex-col items-center justify-center gap-5 border-2 border-black/20 p-5 transition-all duration-200 ease-in-out hover:border-yellow-400">
            <MessageCircleReply className="h-16 w-16 text-yellow-500" />
            <h1 className="text-sm font-semibold">Experienced Technicians</h1>
          </div>
          <div className="flex h-56 w-56 cursor-pointer flex-col items-center justify-center gap-5 border-2 border-black/20 p-5 transition-all duration-200 ease-in-out hover:border-yellow-400">
            <MessageCircleReply className="h-16 w-16 text-yellow-500" />
            <h1 className="text-sm font-semibold">High Quality Parts</h1>
          </div>
          <div className="flex h-56 w-56 cursor-pointer flex-col items-center justify-center gap-5 border-2 border-black/20 p-5 transition-all duration-200 ease-in-out hover:border-yellow-400">
            <MessageCircleReply className="h-16 w-16 text-yellow-500" />
            <h1 className="text-sm font-semibold">
              Excellent Customer Service
            </h1>
          </div>
          <div className="flex h-56 w-56 cursor-pointer flex-col items-center justify-center gap-5 border-2 border-black/20 p-5 transition-all duration-200 ease-in-out hover:border-yellow-400">
            <MessageCircleReply className="h-16 w-16 text-yellow-500" />
            <h1 className="text-sm font-semibold">24/7 Support</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

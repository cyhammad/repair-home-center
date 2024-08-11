import Image from "next/image";

const ServicesBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-black px-4 py-5 md:flex md:justify-between md:gap-3">
      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white bg-black px-4 py-3 md:h-20 md:w-20"
          src="/subService1.svg"
          width={75} // Default width for larger screens
          height={50} // Default height for larger screens
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide text-white md:mt-0">
          Customer Satisfaction
        </p>
      </div>

      <div className="flex flex-row items-center ">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white bg-black px-4 py-3 md:h-20 md:w-20"
          src="/subService2.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide text-white md:mt-0">
          Authorized Service Center
        </p>
      </div>
      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white bg-black px-4 py-3 md:h-20 md:w-20"
          src="/subService2.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide text-white md:mt-0">
          Expert Technicians
        </p>
      </div>
      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white bg-black px-4 py-1 md:h-20 md:w-20"
          src="/subService4.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide text-white md:mt-0">
          Genuine Spare Parts
        </p>
      </div>
      <div className="flex flex-row items-center">
        <Image
          className="flex h-14 w-14 rounded-full border-2 border-white bg-black px-4 md:h-20 md:w-20"
          src="/subService5.svg"
          width={50}
          height={40}
          alt="Logo"
        />
        <p className="ml-3 mt-3 text-sm font-medium tracking-wide text-white md:mt-0">
          Transparent Pricing
        </p>
      </div>
    </div>
  );
};

export default ServicesBar;

import Image from "next/image";
import Navlinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-center px-5 py-3 shadow">
      <div className="flex w-full max-w-7xl items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-2">
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
          <h1 className="cursor-pointer text-lg font-semibold group-hover:text-primary">
            Repair Home Center
          </h1>
        </Link>
        <Navlinks />
      </div>
    </header>
  );
};

export default Header;

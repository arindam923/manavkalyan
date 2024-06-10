import { IconHeart, IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import CashfreeCheckout from "../PayoutButton";
import MobileMenu from "./MobileMenu";

export const tabs = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "About us",
    href: "/about-us",
  },
  {
    id: 2,
    name: "News",
    href: "/news",
  },
  {
    id: 3,
    name: "Fundraising Events",
    href: "/events",
  },
  {
    id: 4,
    name: "Gallery",
    href: "/gallery",
  },
  {
    id: 5,
    name: "Contact Us",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <header className="flex items-center container mx-auto justify-between p-4 lg:px-4 lg:py-2 border-b border-slate-100">
      <div className="flex items-center space-x-2">
        <MobileMenu />
        <Link href={"/"}>
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpeg" width={40} height={40} alt="logo" />
            <h2 className="text-xl lg:text-2xl font-semibold">
              Manav <span className="text-primary">Kalyan</span>
            </h2>
          </div>
        </Link>
      </div>

      <nav className="lg:flex hidden items-center space-x-8">
        {tabs.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="text-sm text-zinc-800 hover:font-semibold transition-all duration-100 ease-in-out"
          >
            <p>{item.name}</p>
          </Link>
        ))}
      </nav>

      <Link
        className="flex items-center  rounded-md space-x-2 px-4 py-2 bg-primary text-white"
        href="/donation"
      >
        Donate Now
      </Link>
    </header>
  );
};

export default Header;

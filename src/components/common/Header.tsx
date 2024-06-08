import { IconHeart } from "@tabler/icons-react";
import Link from "next/link";
import CashfreeCheckout from "../PayoutButton";

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
    <header className="flex items-center container mx-auto justify-between py-2 border-b border-slate-100">
      <div>
        <h2 className="text-2xl font-semibold">
          Manav <span className="text-primary">Kalyan</span>
        </h2>
      </div>

      <nav className="flex items-center space-x-8">
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

      <div className="flex items-center space-x-4 text-sm font-semibold">
        <CashfreeCheckout />
      </div>
    </header>
  );
};

export default Header;

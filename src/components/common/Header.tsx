import { IconHeart } from "@tabler/icons-react";
import Link from "next/link";

export const tabs = [
  {
    id: 0,
    name: "Services",
    href: "/services",
  },
  {
    id: 1,
    name: "Wisdom",
    href: "/wisdom",
  },
  {
    id: 2,
    name: "Events",
    href: "/event",
  },
  {
    id: 3,
    name: "Center",
    href: "/center",
  },
  {
    id: 4,
    name: "Health",
    href: "/health",
  },
  {
    id: 5,
    name: "Contact Us",
    href: "/contact-us",
  },
];

const Header = () => {
  return (
    <header className="flex items-center container mx-auto justify-between py-2 border-b border-slate-100">
      <div>
        <h2 className="text-2xl font-semibold">ManavKalyan</h2>
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
        <button className="px-4 py-2 rounded-md">Login</button>
        <button className="flex items-center  rounded-md space-x-2 px-4 py-2 bg-primary text-white">
          <span>Donate Now</span>
          <IconHeart />
        </button>
      </div>
    </header>
  );
};

export default Header;

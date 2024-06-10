"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu } from "@tabler/icons-react";
import { tabs } from "./Header";
import Link from "next/link";
import CashfreeCheckout from "../PayoutButton";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <IconMenu />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-xl lg:text-2xl text-center font-semibold">
            Manav <span className="text-primary">Kalyan</span>
          </SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
        <nav className="flex flex-col items-center mt-8 space-y-4">
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

        <div className="flex items-center justify-center mt-4">
          <CashfreeCheckout />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

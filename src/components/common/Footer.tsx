import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconMap,
  IconPhoneCall,
  IconPin,
} from "@tabler/icons-react";
import React from "react";
import { tabs } from "./Header";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full p-8 grid grid-cols-1 lg:grid-cols-8 gap-5 bg-neutral-950 text-white">
      <div className="col-span-4">
        <h1 className="text-3xl font-bold ">
          MANAV KALYAN VIDHYAPEETH SANSTHAN
        </h1>
        <p className="mt-2 text-sm ">
          Emphasizing on the empowerment, it suppports female, children and
          trans-gender from every starta of society.
        </p>
        <div className="my-4 flex items-center space-x-4">
          <h3 className="font-bold text-xl">Follow us</h3>
          <IconBrandInstagram />
          <IconBrandFacebook />
          <IconBrandLinkedin />
        </div>

        <p className="text-xs lg:text-sm">
          Together let&apos;s nurture a world where tradition, sustainbility and
          compassion unite
        </p>
      </div>
      <div className="lg:col-span-2 hidden lg:block">
        <h3 className="font-bold text-xl">Legal Links</h3>

        <div className="space-y-2 mt-4">
          <Link
            className="text-sm block text-zinc-100 hover:font-semibold transition-all duration-100 ease-in-out"
            href={"/privacy-policy"}
          >
            <p>Privacy Policy</p>
          </Link>
          <Link
            className="text-sm block text-zinc-100 hover:font-semibold transition-all duration-100 ease-in-out"
            href={"/terms-and-condition"}
          >
            <p>Terms & Conditions</p>
          </Link>
          <Link
            className="text-sm block text-zinc-100 hover:font-semibold transition-all duration-100 ease-in-out"
            href={"/refund-policy"}
          >
            <p>Refund & Return Policy</p>
          </Link>
        </div>
      </div>
      <div className="lg:col-span-2 text-xs lg:text-sm">
        <h3 className="font-bold text-xl">Contact us</h3>
        <p className="text-xs lg:text-sm">
          Our work aims to break the vicious cycle of poverty and social
          isolation and to restore hope for a better future
        </p>
        <div className="flex items-center space-x-4 mt-2">
          <IconPhoneCall />
          <span>+91-7062885333</span>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <IconMail />
          <span>helpmanavkalyan@gmail.com</span>
        </div>

        <div className="flex items-center space-x-4 mt-2">
          <IconMap />
          <span>Plot No. 16, Gandhi Vihar, Sanganer Jaipur - 302029</span>
        </div>
      </div>
    </footer>
  );
}

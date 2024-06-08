import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhoneCall,
  IconPin,
} from "@tabler/icons-react";
import React from "react";
import { tabs } from "./Header";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full p-8 grid grid-cols-8 gap-5 bg-neutral-950 text-white">
      <div className="col-span-4">
        <h1 className="text-3xl font-bold ">ManavKalyan</h1>
        <p className="mt-2 text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aut
          quis, doloremque accusantium facere optio! Doloremque voluptates ut
          exercitationem assumenda, voluptatum fugit illum ullam voluptatibus
          fugiat.
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
      <div className="col-span-2">
        <h3 className="font-bold text-xl">Useful Links</h3>

        <div className="gap-2">
          {tabs.map((item) => (
            <Link
              className="text-sm block text-zinc-100 hover:font-semibold transition-all duration-100 ease-in-out"
              key={item.id}
              href={item.href}
            >
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="font-bold text-xl">Contact us</h3>
        <p className="text-xs lg:text-sm">
          Together let&apos;s nurture a world where tradition, sustainbility and
          compassion unite
        </p>
        <div className="flex items-center space-x-4 mt-2">
          <IconPhoneCall />
          <span>+3857837435</span>
          <span>+4589375735</span>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <IconMail />
          <span>manavkalyan@gmail.com</span>
        </div>

        <div className="flex items-center space-x-4 mt-2">
          <IconPin />
          <span>Jaipur, Rajasthan</span>
        </div>
      </div>
    </footer>
  );
}

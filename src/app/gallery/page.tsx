import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "MANAV KALYAN VIDHYAPEETH SANSTHAN - Gallery",
  description:
    "Welcome to MANAV KALYAN VIDHYAPEETH SANSTHAN. Learn about our mission and how you can help.",
};

export default function page({}: Props) {
  const data = [
    "https://s6.imgcdn.dev/3aqNL.png",
    "https://s6.imgcdn.dev/3aegu.png",
    "https://s6.imgcdn.dev/3aFGa.png",
    "https://s6.imgcdn.dev/3aHew.png",
    "https://s6.imgcdn.dev/3agMt.png",
    "https://s6.imgcdn.dev/3aEzT.png",
    "https://s6.imgcdn.dev/3a8tD.png",
    "https://s6.imgcdn.dev/3aoD9.png",
    "https://s6.imgcdn.dev/3ap5y.png",
    "https://s6.imgcdn.dev/31DA8.png",
    "https://s6.imgcdn.dev/31Yg2.png",
  ];

  return (
    <section className="container mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

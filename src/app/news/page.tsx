import { Metadata } from "next";
import React from "react";

type Props = {};

// "https://s6.imgcdn.dev/3aqNL.png",
// "https://s6.imgcdn.dev/3aegu.png",
// "https://s6.imgcdn.dev/3aFGa.png",
// "https://s6.imgcdn.dev/3aHew.png",
// "https://s6.imgcdn.dev/3agMt.png",
// "https://s6.imgcdn.dev/3aEzT.png",
// "https://s6.imgcdn.dev/3a8tD.png",
// "https://s6.imgcdn.dev/3aoD9.png",
// "https://s6.imgcdn.dev/3ap5y.png",
// "https://s6.imgcdn.dev/31DA8.png",
// "https://s6.imgcdn.dev/31Yg2.png",

export const metadata: Metadata = {
  title: "MANAV KALYAN VIDHYAPEETH SANSTHAN - News",
  description:
    "Welcome to MANAV KALYAN VIDHYAPEETH SANSTHAN. Learn about our mission and how you can help.",
};

export default function page({}: Props) {
  const data = [
    {
      src: "https://s6.imgcdn.dev/3a3DN.jpg",
      headline: `2007-08
      Safe Motherhood programme
      Training and best practices for safe
      motherhood.
      Indian Council of Social Science Reserach`,
    },
    {
      src: "https://s6.imgcdn.dev/3aWfv.jpg",
      headline: `2007-08
      Safe Motherhood programme
      Training and best practices for safe
      motherhood.
      Indian Council of Social Science Reserach`,
    },
    {
      src: "https://s6.imgcdn.dev/3aLyq.png",
      headline: `2007-08
      Safe Motherhood programme
      Training and best practices for safe
      motherhood.
      Indian Council of Social Science Reserach`,
    },
    {
      src: "https://s6.imgcdn.dev/3abAB.png",
      headline: `2007-08
      Safe Motherhood programme
      Training and best practices for safe
      motherhood.
      Indian Council of Social Science Reserach`,
    },
    {
      src: "https://s6.imgcdn.dev/31jQi.png",
      headline: `2007-08
      Safe Motherhood programme
      Training and best practices for safe
      motherhood.
      Indian Council of Social Science Reserach`,
    },
    {
      src: "https://s6.imgcdn.dev/31wGH.png",
      headline: `2007-08
      Safe Motherhood programme
      Training and best practices for safe
      motherhood.
      Indian Council of Social Science Reserach`,
    },
    {
      src: "https://s6.imgcdn.dev/316eS.png",
      headline: `2007-08
      Safe Motherhood programme
      Training and best practices for safe
      motherhood.
      Indian Council of Social Science Reserach`,
    },
  ];

  return (
    <main className="container mx-auto py-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex border p-4 rounded-md flex-col items-center"
          >
            <img
              src={item.src}
              className="w-full h-64 object-cover"
              style={{ maxWidth: "300px" }}
            />
            <h2 className="mt-4 text-sm text-center font-semibold">
              {item.headline}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}

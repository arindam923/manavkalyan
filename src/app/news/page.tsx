import React from "react";

type Props = {};

export default function page({}: Props) {
  const data = [
    "https://s6.imgcdn.dev/3a3DN.jpg",
    "https://s6.imgcdn.dev/3aWfv.jpg",
    "https://s6.imgcdn.dev/3aLyq.png",
    "https://s6.imgcdn.dev/3abAB.png",
  ];

  return (
    <main className="container mx-auto py-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <img src={item} className="" />
        ))}
      </div>
    </main>
  );
}

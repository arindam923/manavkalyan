import React from "react";

type Props = {};

export default function Whatwedo({}: Props) {
  const data = [
    {
      id: 0,
      name: "Help the community",
    },
    {
      id: 1,
      name: "Youth Empowerment",
    },
    {
      id: 2,
      name: "Care for all the member",
    },
  ];

  return (
    <section className="container flex flex-col items-center mt-5 mx-auto">
      <p className="text-primary uppercase font-semibold text-sm">What we do</p>
      <h2 className="text-2xl font-semibold ">Change the world</h2>
      <p className="my-2 text-sm text-muted-foreground lg:w-[60%] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima ad
        dignissimos voluptatem vitae autem, laudantium error. A, at quisquam?
        Asperiores totam tenetur eligendi odit error esse?
      </p>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {data.map((item) => (
          <article
            key={item.id}
            className="shadow-xl p-5 rounded-md bg-white flex flex-col items-center justify-center h-[300px]"
          >
            <h2 className="text-zinc-900 font-semibold text-2xl mb-2">
              {item.name}
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, facere sint officiis quam cum maxime at, voluptas,
              veritatis repellat doloremque dolor eligendi magni consectetur.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

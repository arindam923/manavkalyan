import Image from "next/image";
import React from "react";

type Props = {};

export default function Whatwedo({}: Props) {
  const data = [
    {
      id: 0,
      name: "Help the community",
      image: "/care-48.png",
      description:
        "Engage in activities that uplift and support local communities, providing essential services and fostering a sense of togetherness.",
    },
    {
      id: 1,
      name: "Youth Empowerment",
      image: "/youth.png",
      description:
        "Empower the younger generation with education, skills, and opportunities to become leaders and change-makers in their communities.",
    },
    {
      id: 2,
      name: "Care for all the members",
      image: "/volunteer.png",
      description:
        "Provide comprehensive support and care for all community members, ensuring everyone has access to necessary resources and assistance.",
    },
  ];

  return (
    <section className="container flex flex-col items-center mt-5 mx-auto">
      <p className="text-primary uppercase font-semibold text-sm">What we do</p>
      <h2 className="text-4xl text-slate-900 font-semibold">
        Make a Difference
      </h2>
      <p className="my-2 text-sm text-muted-foreground lg:w-[60%] text-center">
        Join us in our efforts to create positive change. Your support helps us
        provide essential services, foster community development, and bring hope
        to those in need. Together, we can build a better future.
      </p>

      <div className="mt-4 grid lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <article
            key={item.id}
            className="shadow-xl p-5 rounded-md bg-white flex flex-col items-center justify-center h-[300px]"
          >
            <Image src={item.image} alt="" width={60} height={60} />
            <h2 className="text-zinc-900 font-semibold text-2xl mb-2">
              {item.name}
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

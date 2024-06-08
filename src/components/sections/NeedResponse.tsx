import React from "react";

type Props = {};

export default function NeedResponse({}: Props) {
  return (
    <section className="container flex items-center justify-between mt-10 mx-auto">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <p className="text-sm text-primary uppercase font-semibold">
          need response
        </p>
        <h2 className="text-2xl font-semibold ">Emergency Food</h2>
        <p className="my-2 text-sm text-muted-foreground ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima
          ad dignissimos voluptatem vitae autem, laudantium error. A, at
          quisquam? Asperiores totam tenetur eligendi odit error esse?
        </p>

        <div>
          <button className="px-4 py-2 bg-primary text-white font-semibold">
            Donate now
          </button>
        </div>
      </div>
    </section>
  );
}

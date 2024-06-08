import React from "react";

type Props = {};

export default function NeedResponse({}: Props) {
  return (
    <section className="container bg-white flex items-center space-x-10 mt-10 mx-auto">
      <div className="w-1/2 flex items-center justify-center">
        <img
          className="h-[500px] object-cover rounded-md"
          src="https://images.unsplash.com/photo-1619271816535-07433c30e8bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9vciUyMGNoaWxkfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div className="w-1/2">
        <p className="text-sm text-primary uppercase font-semibold">
          need response
        </p>
        <h2 className="text-4xl text-slate-900 font-semibold ">
          Emergency Food
        </h2>
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

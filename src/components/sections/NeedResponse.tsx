import React from "react";

type Props = {};

export default function NeedResponse({}: Props) {
  return (
    <section className="container bg-white flex flex-col lg:flex-row items-center space-x-10 mt-10 mx-auto">
      <div className="lg:w-1/2 flex items-center justify-center">
        <img
          className="h-[500px] object-cover rounded-md"
          src="https://s6.imgcdn.dev/3aGl0.jpg"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 mt-4 lg:mt-0">
        <p className="text-sm text-primary uppercase font-semibold">
          Urgent Response
        </p>
        <h2 className="text-4xl text-slate-900 font-semibold">
          Emergency Food Relief
        </h2>
        <p className="my-2 text-sm text-muted-foreground">
          In times of crisis, immediate action is crucial. Our emergency food
          relief program ensures that those affected by disasters receive
          essential nourishment and support promptly. Join us in providing hope
          and sustenance to those in need.
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

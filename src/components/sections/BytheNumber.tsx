import React from "react";

type Props = {};

export default function BytheNumber({}: Props) {
  return (
    <section className="container flex flex-col items-center mx-auto mt-5">
      <h2 className="text-2xl lg:text-4xl font-semibold">By the Numbers</h2>
      <p className="text-sm mt-2 text-center lg:w-[60%] text-slate-600">
        Witness the impact of collective action with our powerful crowdfunding
        statistics that underscore our commitment to meaningful change.
      </p>

      <div className="mt-4 grid grid-cols-3 gap-5">
        <div className="bg-gray-100 p-5 rounded-md flex items-center flex-col justify-center">
          <h3 className="font-semibold">357</h3>
          <p className="text-xs font-medium">Projects Funded</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-md flex items-center flex-col justify-center">
          <h3 className="font-semibold">20000</h3>
          <p className="text-xs font-medium">People Helped</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-md flex items-center flex-col justify-center">
          <h3 className="font-semibold">8000</h3>
          <p className="text-xs font-medium">Live Saved</p>
        </div>
      </div>
    </section>
  );
}

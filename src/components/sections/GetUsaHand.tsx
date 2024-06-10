import React from "react";

type Props = {};

export default function GetUsaHand({}: Props) {
  return (
    <section className="container flex flex-col items-center mt-10 mx-auto">
      <p className="text-sm text-primary font-semibold uppercase">
        Lend a Hand
      </p>
      <h2 className="text-4xl text-center text-slate-900 font-semibold">
        Explore Our Programs
      </h2>
      <p className="my-2 text-sm lg:w-[60%] text-center text-muted-foreground">
        Discover the various ways you can make an impact. Our programs are
        designed to address critical needs, promote sustainable development, and
        foster community growth. Join us in our mission to create a brighter
        future for all.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://s6.imgcdn.dev/3aSfM.jpg"
            alt="Community Outreach"
          />
          <div className="p-4">
            <div className="font-bold text-xl mb-2">Community Outreach</div>
            <p className="text-gray-700 text-base">
              Engage with local communities to provide education and food for
              less fortunate kids.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://s6.imgcdn.dev/3arpd.jpg"
            alt="Environmental Conservation"
          />
          <div className="p-4">
            <div className="font-bold text-xl mb-2">Food Stations</div>
            <p className="text-gray-700 text-base">
              Set up food stations to support individuals who can't afford food
              and to combat malnourishment.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://s6.imgcdn.dev/3axyl.jpg"
            alt="Education Support"
          />
          <div className="p-4">
            <div className="font-bold text-xl mb-2">Medical Camps</div>
            <p className="text-gray-700 text-base">
              Organize medical camps to provide healthcare services for the poor
              and underserved communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

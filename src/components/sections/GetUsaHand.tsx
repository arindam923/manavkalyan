import React from "react";

type Props = {};

export default function GetUsaHand({}: Props) {
  return (
    <section className="container flex flex-col items-center mt-10 mx-auto">
      <p className="text-sm text-primary font-semibold uppercase">
        Get Us a hand
      </p>
      <h2 className="text-4xl text-slate-900 font-semibold">
        Explore our Programs
      </h2>
      <p className="my-2 text-sm lg:w-[60%] text-center text-muted-foreground ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
        dignissimos magni velit quos, sint quibusdam perspiciatis tempora nisi.
      </p>

      <div className="flex flex-col md:flex-row justify-center mt-10 gap-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1623122617524-18ca7a791c37?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmdvfGVufDB8fDB8fHww"
            alt="Community Outreach"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Community Outreach</div>
            <p className="text-gray-700 text-base">
              Engage with local communities to provide support and resources for
              those in need.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmdvfGVufDB8fDB8fHww"
            alt="Environmental Conservation"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Environmental Conservation
            </div>
            <p className="text-gray-700 text-base">
              Participate in activities aimed at preserving natural habitats and
              promoting sustainability.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1613399421095-41f5c68e9f8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmdvfGVufDB8fDB8fHww"
            alt="Education Support"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Education Support</div>
            <p className="text-gray-700 text-base">
              Assist in educational programs to help children and adults achieve
              their academic goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

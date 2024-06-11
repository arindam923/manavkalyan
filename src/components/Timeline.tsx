import React from "react";

const timelineData = [
  {
    year: "2006-07",
    title: "Watershed Development",
    description:
      "Training and Construction of water harvesting/conservation structures.",
    organization: "Forest Department Jamwaramgarh, Jaipur",
  },
  {
    year: "2007-08",
    title: "Production and Supply of vermin compost",
    description:
      "Training were provided to farmers for production of vermin compost and to fill the demand of agricultural institutes.",
    organization: "Assistant Director, Agricultural Extension, Bhilwara",
  },
  {
    year: "2007-08",
    title: "Production and Supply of Vermin compost",
    description:
      "Trainings were provided to farmers for production of vermin compost and to fill the demand of agricultural institutes.",
    organization: "Assistant Director, Agricultural",
  },
  {
    year: "2007-08",
    title: "Safe Motherhood programme",
    description: "Training and best practices for safe motherhood.",
    organization: "Indian Council of Social Science Research (ICSSR)",
  },
  {
    year: "2008-09",
    title: "SC/ST Legal Awareness Programme in Niwai block for SC/ST Community",
    description: "Centre for Dalit Rights",
    organization: "Nurturing Young Minds",
  },
  {
    year: "2008-09",
    title: "Making soft toys-Women Training Programme",
    description:
      "30 days training imparted manufacturing of softy toys from scrap cloth.",
    organization: "From Fee",
  },
  {
    year: "2009-10",
    title: "National Environment Awareness Campaign",
    description:
      "Trainings were given to students and teachers of 10 schools for water harvesting, solid waste management and manufacturing of vermin compost.",
    organization: "Ministry of Environment and Forest, New Delhi",
  },
  {
    year: "2009-10",
    title: "Teachers Educational Status in Private School",
    description:
      "A Survey was conducted to obtain the educational status of 20 private school teachers in Jaipur.",
    organization: "Naree Sansthan",
  },
  {
    year: "2010-11",
    title: "Best Practices for Healthy and Hygienic Health issues of girls.",
    description:
      "The Programmes were conducted in two girl's schools of Sanganer block in Jaipur district",
    organization: "Naree Sansthan",
  },
  {
    year: "2015-16",
    title: "Bridge",
    description: "Vocational training programme for school dropout candidates.",
    organization: "BOSCH Limited",
  },
  {
    year: "2019",
    title: "PMKVY RPL Project",
    description: "Vocational training in Plumbing and Painting.",
    organization: "Labournet",
  },
  {
    year: "2019",
    title: "CEAT -Tyre Fitter operator",
    description: "Vocational training for Fitter operator",
    organization: "Labournet",
  },
  {
    year: "2019",
    title: "SKILLSATHI",
    description: "Counselling Awareness Programme",
    organization: "NSDC",
  },
  {
    year: "2018-19",
    title: "SWACHH BHARAT AWARENESS PROGRAMME",
    description: "SWACHH BHARAT AWARENESS PROGRAMME By Manav Kalyan Sansthan",
    organization: "",
  },
  {
    year: "2019",
    title: "Ministry of Women Awareness Programme",
    description: "Increasing knowledge and awareness",
    organization: "",
  },
  {
    year: "2019",
    title: "Environment Awareness programme",
    description: "AN ENVIRONMENTAL AWARENESS PROGRAM 'AWAKEN'",
    organization: "Nurturing Young Minds",
  },
];

const Timeline = () => {
  return (
    <div className="max-w-2xl w-full mx-auto ">
      <h2 className="text-4xl font-bold my-4 text-center">
        Some of our Last Project
      </h2>
      {timelineData.map((item, index) => (
        <div key={index} className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              {item.description}
            </h3>
            <button
              type="button"
              className="mt-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <span className="flex flex-shrink-0 justify-center items-center px-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                {item.year}
              </span>
              <p>{item.title}</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

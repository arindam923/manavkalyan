import Timeline from "@/components/Timeline";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="container mx-auto py-5">
      <div className="font-bold text-2xl mb-4">
        MANAV KALYAN VIDHYAPEETH SANSTHAN
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          <span className="text-primary">
            {" "}
            MANAV KALYAN VIDHYAPEETH SANSTHAN{" "}
          </span>
          is a non-governmental NGO established in 2002 to uplift the deprived
          and poor people of the society and connect them with the mainstream of
          the society.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          The institute has done many social upliftment and human welfare works
          till date. In which financially weak families are provided free
          education, families deprived of education such as slum dwellers or
          people who waste garbage on the roads, encouraging children to connect
          with mainstream education etc.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Apart from this, women empowerment, sanitation campaign, environmental
          protection and health are also areas we focus on. We look forward to
          working for the upliftment of the society and human welfare for the
          awareness of the same.
        </p>
      </div>

      <div>
        <h2 className="text-4xl lg:text-2xl font-semibold text-center">
          Our Team
        </h2>

        <img
          src="https://s6.imgcdn.dev/3a9Bo.jpg"
          className="h-[500px] mx-auto mt-4"
          alt="our team"
        />
      </div>
      <div className="font-bold text-2xl my-4">Causes We Work For</div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Education programs on socio-cultural and economic activities,
          providing training for the welfare of youth, linking them to income
          promotion activities, and organizing sports.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Organizing programs for environmental protection, preservation, and
          pollution control of material items, and the development of
          humanities.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Family welfare and population control by providing primary health
          facilities to women and children, and spreading awareness for
          de-addiction.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Agriculture and horticulture development, animal husbandry, and
          organic farming by providing information and training to farmers and
          youth about new technologies in water and land conservation works.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Working for the all-round development of disabled, destitute, old
          widows, child laborers, abandoned, and neglected people.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Arranging for the rehabilitation of nomadic castes to make them
          self-dependent, and conducting research by developing and studying
          handicrafts, village industry, and the arts hidden in them.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Providing satisfactory education to boys and girls in the public
          education sector by ensuring their enrollment and retention.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Eradicating child labor and poverty, addressing social issues for the
          overall development of child laborers and girls, providing informal
          education, handicrafts, professional training in sewing, weaving,
          music, dance, embroidery, and linking them to income promotion
          activities.
        </p>
      </div>

      <div className="text-gray-700 text-base mb-4">
        <p>
          Cooperating in the formation of self-help groups and providing
          training in beekeeping.
        </p>
      </div>

      <Timeline />
    </main>
  );
}

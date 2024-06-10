import Link from "next/link";

const MeetOurTeam = () => {
  return (
    <section className="container flex flex-col items-center mt-5 mx-auto">
      <p className="text-primary uppercase text-sm font-semibold">Join Us</p>
      <h2 className="text-4xl font-semibold">Meet the Team</h2>
      <p className="mt-2 text-sm text-muted-foreground lg:w-[60%] text-center">
        Get to know the passionate individuals behind our mission. Our team is
        dedicated to making a difference and bringing positive change to
        communities in need. Together, we strive to create a better world.
      </p>

      <div className="bg-white max-w-3xl mt-2 p-6 rounded-lg shadow-lg">
        <div className="md:flex md:items-center">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48 md:h-full rounded-lg"
              src="https://via.placeholder.com/150" // Placeholder image, replace with actual image URL
              alt="Antram Baloda"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h3 className="text-2xl font-bold text-gray-900">Antram Baloda</h3>
            <p className="mt-2 text-sm text-gray-600">
              For the past 22 years, Antram Baloda has been the heart and soul
              of our NGO. His unwavering dedication and selfless service have
              transformed countless lives. From opening free schools and feeding
              the homeless to planting trees and cleaning drainage systems, his
              tireless efforts have made a lasting impact.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Thank you, Antram, for your remarkable contributions and for
              inspiring us all with your compassion and commitment. Your work
              continues to make our world a better place.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          href={"/join-us"}
          className="bg-white text-primary font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          Join Us in Our Mission
        </Link>
      </div>
    </section>
  );
};

export default MeetOurTeam;

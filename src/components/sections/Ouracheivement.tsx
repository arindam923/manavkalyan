import Link from "next/link";

export default function OurAchievements() {
  return (
    <div className="relative container mx-auto py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl text-center font-semibold mb-2 text-zinc-900">
              Our Achievements
            </h4>
            <h1 className="text-4xl text-center font-bold mb-4 text-zinc-900">
              Making a Difference
            </h1>
            <p className="text-black mb-4 text-sm text-muted-foreground text-center  lg:mb-8">
              At our NGO, we strive to create meaningful change in our
              community. Through dedication and collective effort, we have
              achieved remarkable milestones that uplift lives and inspire hope.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-8 lg:p-4 rounded-lg shadow-md">
                <h3 className="text-lg  text-center font-semibold mb-2">
                  Empowering Education
                </h3>
                <p className="lg:text-sm  text-xs text-center text-grey-600">
                  We have provided educational resources and support to over
                  5,000 children, fostering a brighter future for the next
                  generation.
                </p>
              </div>
              <div className="bg-white p-8 lg:p-4  rounded-lg shadow-md">
                <h3 className="text-lg text-center font-semibold mb-2">
                  Healthcare Initiatives
                </h3>
                <p className="lg:text-sm  text-xs text-center text-grey-600">
                  Our healthcare programs have reached remote areas, offering
                  medical assistance and promoting well-being among underserved
                  populations.
                </p>
              </div>
              <div className="bg-white p-8 lg:p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-center mb-2">
                  Sustainable Development
                </h3>
                <p className="lg:text-sm  text-xs text-center text-grey-600">
                  We have implemented sustainable practices in local
                  communities, ensuring environmental conservation and economic
                  growth.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Link
                  href={"/join-us"}
                  className="bg-primary cursor-pointer text-white font-semibold py-2 px-4 rounded mt-8 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://s6.imgcdn.dev/3aAXV.jpg"
              alt="NGO Image"
              className="rounded-lg  shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

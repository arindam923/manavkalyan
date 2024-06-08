export default function OurAchievements() {
  return (
    <div className="relative container mx-auto py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-2 text-zinc-900">
              Our Achievements
            </h4>
            <h1 className="text-4xl font-bold mb-4 text-zinc-900">
              Making a Difference
            </h1>
            <p className="text-white mb-8">
              At our NGO, we strive to create meaningful change in our
              community. Through dedication and collective effort, we have
              achieved remarkable milestones that uplift lives and inspire hope.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Empowering Education
                </h3>
                <p>
                  We have provided educational resources and support to over
                  5,000 children, fostering a brighter future for the next
                  generation.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Healthcare Initiatives
                </h3>
                <p>
                  Our healthcare programs have reached remote areas, offering
                  medical assistance and promoting well-being among underserved
                  populations.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Sustainable Development
                </h3>
                <p>
                  We have implemented sustainable practices in local
                  communities, ensuring environmental conservation and economic
                  growth.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-primary cursor-pointer text-white font-semibold py-2 px-4 rounded mt-8 hover:bg-yellow-600 hover:text-white transition-colors duration-300">
                  Become a Volunteer
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
              alt="NGO Image"
              className="rounded-lg h-[500px]  shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const InterNationStudents = () => {
  return (
    <section className="bg-gray-100 py-12 mt-4  px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Inernational Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/ban4.jpeg"
              alt="Feeding Poor Children"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Feeding
              </h3>
              <p className="text-gray-600">
                We provide nutritious meals to underprivileged children to
                ensure their healthy growth and development.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/ban5.jpeg"
              alt="Educating Poor Children"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Educating
              </h3>
              <p className="text-gray-600">
                Our education programs are designed to give children the
                knowledge and skills they need to succeed in life.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/ban8.jpeg"
              alt="Helping Poor People"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Helping
              </h3>
              <p className="text-gray-600">
                We provide various forms of support to poor people, helping them
                to improve their quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterNationStudents;

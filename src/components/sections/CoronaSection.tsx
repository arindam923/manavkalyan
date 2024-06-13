const CoronaSection = () => {
  const images = [
    "/images/cor1.jpeg",
    "/images/cor2.jpeg",
    "/images/cor3.jpeg",
    "/images/cor4.jpeg",
  ];
  return (
    <section className="mx-auto  py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          COVID-19 Relief Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={`COVID-19 Relief Work ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoronaSection;

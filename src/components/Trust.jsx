export default function Trust() {
  const logos = [
    "/assets/logo1.png",
    "/assets/logo2.png",
    "/assets/logo3.png",
    "/assets/logo4.png",
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-12">
        Trusted by Businesses Like Yours
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Client ${i + 1}`}
            className="h-12 object-contain"
          />
        ))}
      </div>
    </section>
  );
}

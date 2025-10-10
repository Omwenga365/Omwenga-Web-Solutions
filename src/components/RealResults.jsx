import { motion } from "framer-motion";

export default function RealResults() {
  const results = [
    {
      name: "Grace Wanjiku",
      role: "CEO, Nairobi Fashion House",
      quote:
        "Websites by Omwenga transformed our outdated website into a modern, user-friendly platform that has significantly increased our online inquiries.",
    },
    {
      name: "Peter Kamau",
      role: "Director, Mombasa Tours & Travel",
      quote:
        "The booking system they built for us has revolutionized our business. We've seen a 300% increase in online bookings and our customers love how easy it is to book tours with us.",
    },
    {
      name: "David Ochieng",
      role: "Managing Partner, Kisumu Law Firm",
      quote:
        "Our new website has positioned us as the leading law firm in the region. The professional design and easy navigation have helped us attract high-quality clients and showcase our expertise.",
    },
    {
      name: "Sarah Akinyi",
      role: "Owner, Eldoret Organic Farm",
      quote:
        "The e-commerce platform they built has opened up new markets for our organic produce. We're now selling across Kenya and our revenue has doubled since launching the website.",
    },
  ];

  return (
    <section id="real-results" className="py-20 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        Real Results From Real Clients
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 container mx-auto">
        {results.map((r, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-600 italic mb-4">“{r.quote}”</p>
            <h3 className="font-semibold text-gray-800">{r.name}</h3>
            <p className="text-sm text-gray-500">{r.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

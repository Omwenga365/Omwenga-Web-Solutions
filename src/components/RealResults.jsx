import { motion } from "framer-motion";

export default function RealResults() {
  const results = [
    {
      quote: "Websites by Omwenga transformed our outdated website into a modern, user-friendly platform.",
      name: "Grace Wanjiku",
      role: "CEO, Nairobi Fashion House",
    },
    {
      quote: "The booking system they built for us has revolutionized our business. 300% increase in bookings!",
      name: "Peter Kamau",
      role: "Director, Mombasa Tours & Travel",
    },
    {
      quote: "Our new website positioned us as the leading law firm in the region.",
      name: "David Ochieng",
      role: "Managing Partner, Kisumu Law Firm",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        Real Results From Real Clients
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch px-6 container mx-auto">
        {results.map((r, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md flex-1 max-w-sm"
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

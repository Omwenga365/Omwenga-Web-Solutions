import { motion } from "framer-motion";

const results = [
  { stars: 5, quote: "Websites by Omwenga transformed our outdated website into a modern, user-friendly platform.", name: "Grace Wanjiku", role: "CEO, Nairobi Fashion House" },
  { stars: 5, quote: "The booking system they built for us has revolutionized our business. 300% increase in bookings!", name: "Peter Kamau", role: "Director, Mombasa Tours & Travel" },
  { stars: 5, quote: "Our new website positioned us as the leading law firm in the region.", name: "David Ochieng", role: "Managing Partner, Kisumu Law Firm" },
];

export default function RealResults() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-12">Real Results From Real Clients</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 container mx-auto">
        {results.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="flex gap-1 mb-4">
              {Array(r.stars).fill(0).map((_, idx) => (
                <span key={idx} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">“{r.quote}”</p>
            <h3 className="font-semibold text-gray-800">{r.name}</h3>
            <p className="text-sm text-gray-500">{r.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

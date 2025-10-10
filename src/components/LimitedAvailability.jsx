import { motion } from "framer-motion";

export default function LimitedAvailability() {
  return (
    <section id="limited-availability" className="py-20 bg-blue-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-6"
      >
        Limited Availability This Month
      </motion.h2>

      <p className="text-gray-700 mb-8 max-w-lg mx-auto">
        Only taking on 5 more projects this month to ensure quality delivery. Reserve your spot now.
      </p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Secure My Website Spot →
      </motion.a>
    </section>
  );
}

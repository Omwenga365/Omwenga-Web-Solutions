import { motion } from "framer-motion";

export default function LimitedAvailability() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
      >
        Limited Availability This Month
      </motion.h2>
      <p className="text-lg mb-6">
        Only taking on 5 more projects this month to ensure quality delivery. Reserve your spot now.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
      >
        Secure My Website Spot →
      </motion.button>
    </section>
  );
}

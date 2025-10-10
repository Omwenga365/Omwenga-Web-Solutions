import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "50+", label: "Websites Delivered" },
    { value: "5–10", label: "Days Average Delivery" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="stats" className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        Our Achievements
      </motion.h2>

      <div className="container mx-auto grid gap-8 md:grid-cols-3 px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center justify-center"
          >
            <span className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</span>
            <span className="text-gray-700 text-lg">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

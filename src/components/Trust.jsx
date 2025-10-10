import { motion } from "framer-motion";

export default function Trust() {
  const clients = ["E-commerce", "Local Business", "Education", "Restaurants"];

  return (
    <section className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        Trusted by Businesses Like Yours
      </motion.h2>

      <div className="container mx-auto flex flex-wrap justify-center gap-8 px-6">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-50 p-6 rounded-xl shadow-md flex-1 min-w-[180px] max-w-xs"
          >
            <h3 className="text-xl font-semibold text-gray-800">{client}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

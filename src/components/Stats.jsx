import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Websites Delivered", value: "50+" },
    { label: "Average Delivery", value: "5–10 Days" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  return (
    <section className="py-20 bg-blue-50 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md flex-1 max-w-xs"
          >
            <h3 className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

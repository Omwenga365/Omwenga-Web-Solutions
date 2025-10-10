import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Websites Delivered" },
  { number: "5–10 Days", label: "Average Delivery" },
  { number: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-2">{s.number}</h3>
            <p className="text-gray-700">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

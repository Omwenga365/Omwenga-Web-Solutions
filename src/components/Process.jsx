import { motion } from "framer-motion";

const steps = [
  { title: "Share Your Vision", desc: "Tell us about your business, goals, and what you need. We'll create a custom plan and quote for you." },
  { title: "We Build & Design", desc: "Our team creates your website while keeping you updated. You'll see progress and provide feedback along the way." },
  { title: "Launch & Grow", desc: "Your website goes live and starts attracting customers. We provide training and ongoing support as needed." },
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        Simple 3-Step Process
      </motion.h2>
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      title: "Share Your Vision",
      desc: "Tell us about your business, goals, and what you need. We'll create a custom plan and quote.",
    },
    {
      title: "We Build & Design",
      desc: "Our team creates your website while keeping you updated. You'll see progress and provide feedback.",
    },
    {
      title: "Launch & Grow",
      desc: "Your website goes live and starts attracting customers. We provide training and ongoing support.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        Simple 3-Step Process to Your New Website
      </motion.h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">{index + 1}. {step.title}</h3>
            <p className="text-gray-700">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

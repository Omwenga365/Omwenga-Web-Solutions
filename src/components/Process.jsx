import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Share Your Vision",
      description:
        "Tell us about your business, goals, and what you need. We'll create a custom plan and quote for you.",
    },
    {
      number: "2",
      title: "We Build & Design",
      description:
        "Our team creates your website while keeping you updated. You'll see progress and provide feedback along the way.",
    },
    {
      number: "3",
      title: "Launch & Grow",
      description:
        "Your website goes live and starts attracting customers. We provide training and ongoing support as needed.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        Simple 3-Step Process
      </motion.h2>

      <div className="container mx-auto grid gap-8 md:grid-cols-3 px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

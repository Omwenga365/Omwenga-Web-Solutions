import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, fast, and responsive websites built with React and the latest technologies.",
      icon: <Code2 size={40} className="text-blue-600" />,
    },
    {
      title: "UI/UX Design",
      description: "We design clean, intuitive interfaces that give users a seamless experience.",
      icon: <Palette size={40} className="text-green-500" />,
    },
    {
      title: "SEO Optimization",
      description: "Boost your visibility and ranking on search engines with our proven SEO strategies.",
      icon: <Rocket size={40} className="text-purple-500" />,
    },
    {
      title: "Website Maintenance",
      description: "Keep your site updated, secure, and performing at its best with our support plans.",
      icon: <Wrench size={40} className="text-yellow-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        Our Services
      </motion.h2>

      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

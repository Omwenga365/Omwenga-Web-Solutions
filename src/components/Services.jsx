import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Web Development",
      desc: "Modern, fast, and responsive websites built with React and the latest technologies.",
    },
    {
      icon: <Palette className="w-10 h-10 text-blue-600 mb-4" />,
      title: "UI/UX Design",
      desc: "We design clean, intuitive interfaces that give users a seamless experience.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-blue-600 mb-4" />,
      title: "SEO Optimization",
      desc: "Boost your visibility and ranking on search engines with our proven SEO strategies.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Website Maintenance",
      desc: "Keep your site updated, secure, and performing at its best with our support plans.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-10"
      >
        Our Services
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 container mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Code2 size={40} />, title: "Web Development", desc: "Modern, fast, and responsive websites built with React and the latest technologies." },
    { icon: <Palette size={40} />, title: "UI/UX Design", desc: "We design clean, intuitive interfaces that give users a seamless experience." },
    { icon: <Rocket size={40} />, title: "SEO Optimization", desc: "Boost your visibility and ranking on search engines with our proven SEO strategies." },
    { icon: <Wrench size={40} />, title: "Website Maintenance", desc: "Keep your site updated, secure, and performing at its best with our support plans." },
  ];

  return (
    <section id="services" className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-10"
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

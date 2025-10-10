import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // install lucide-react if not yet installed

const testimonials = [
  {
    name: "Jane M.",
    role: "Entrepreneur",
    quote:
      "Omwenga Web Solutions completely transformed my online presence! My business has grown so much thanks to their website design.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Michael O.",
    role: "Creative Director",
    quote:
      "Professional, fast, and creative. The team perfectly captured my brand’s personality — couldn’t be happier.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Linda K.",
    role: "Startup Founder",
    quote:
      "They built us a sleek, modern site that performs flawlessly on all devices. Highly recommend their services!",
    avatar: "https://via.placeholder.com/100",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        What Our Clients Say
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch px-6 container mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl flex-1 max-w-sm"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-blue-200"
            />
            <Quote className="mx-auto text-blue-300 mb-3" />
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <h3 className="font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

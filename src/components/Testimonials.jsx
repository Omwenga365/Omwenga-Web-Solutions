import { motion } from "framer-motion";

// Add avatar URLs or leave as placeholders
const testimonials = [
  {
    name: "Jane M.",
    role: "Entrepreneur",
    quote:
      "Omwenga Web Solutions completely transformed my online presence! My business has grown so much thanks to their website design.",
    avatar: "/assets/avatar1.jpg", // replace with actual image in /assets
  },
  {
    name: "Michael O.",
    role: "Creative Director",
    quote:
      "Professional, fast, and creative. The team perfectly captured my brand’s personality — couldn’t be happier.",
    avatar: "/assets/avatar2.jpg",
  },
  {
    name: "Linda K.",
    role: "Startup Founder",
    quote:
      "They built us a sleek, modern site that performs flawlessly on all devices. Highly recommend their services!",
    avatar: "/assets/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 container mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
            <h3 className="font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

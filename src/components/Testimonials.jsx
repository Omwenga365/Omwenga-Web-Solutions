import { motion } from "framer-motion";

const testimonials = [
  { name: "Jane M.", role: "Entrepreneur", quote: "Omwenga Web Solutions completely transformed my online presence! My business has grown so much thanks to their website design." },
  { name: "Michael O.", role: "Creative Director", quote: "Professional, fast, and creative. The team perfectly captured my brand’s personality — couldn’t be happier." },
  { name: "Linda K.", role: "Startup Founder", quote: "They built us a sleek, modern site that performs flawlessly on all devices. Highly recommend their services!" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-12"
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 container mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              {/* Placeholder for image */}
              <span className="text-gray-400 text-xl">{t.name.charAt(0)}</span>
            </div>
            <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
            <h3 className="font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

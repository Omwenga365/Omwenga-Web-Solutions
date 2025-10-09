import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

export default function Contact() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // movement sensitivity
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setMouse({ x, y });
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative py-20 bg-gradient-to-b from-blue-50 to-white text-center overflow-hidden"
    >
      {/* 🌊 Floating Icons Background */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        animate={{
          x: mouse.x / 4,
          y: mouse.y / 4,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div
          className="absolute top-10 left-16 text-blue-300"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mail size={48} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 text-indigo-300"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Phone size={56} />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 text-blue-200"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Globe size={64} />
        </motion.div>
      </motion.div>

      {/* ✉️ Contact Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-6 relative z-10"
      >
        Get In Touch
      </motion.h2>

      <p className="text-gray-600 mb-10 max-w-xl mx-auto relative z-10">
        Have a project in mind or want to learn more about our services?  
        We’d love to hear from you!
      </p>

      {/* 💬 Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        action="https://formspree.io/f/mkgqvdvw"
        method="POST"
        className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 border border-blue-100 relative z-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>

      {/* 🧭 Footer */}
      <footer className="mt-16 text-gray-500 text-sm relative z-10">
        © 2025 <span className="text-blue-600 font-semibold">Omwenga Web Solutions</span>.  
        Designed with ❤️ using React & TailwindCSS.
      </footer>
    </section>
  );
}

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-10"
      >
        Get In Touch
      </motion.h2>

      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Have a project in mind or want to learn more about our services?  
        We’d love to hear from you!
      </p>

      <form
        action="https://formspree.io/f/mkgqvdvw"
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none

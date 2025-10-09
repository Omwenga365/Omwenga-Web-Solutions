import { motion } from "framer-motion";
import heroBg from "../assets/tech-bg.jpg";

export default function Hello() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl mx-auto px-4 py-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Omwenga Web Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          We design and develop modern, responsive websites that help your
          business grow online.
        </p>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Explore Our Services
        </motion.a>
      </motion.div>
    </section>
  );
}

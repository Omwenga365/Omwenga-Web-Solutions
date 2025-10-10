import { motion } from "framer-motion";
import heroBg from "../assets/tech-bg.jpg"; // make sure the path is correct

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Omwenga Web Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl"
        >
          We design and develop modern, responsive websites that help your business grow online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <a
            href="#contact"
            className="btn-primary"
          >
            Get My Free Quote
          </a>
          <a
            href="#services"
            className="btn-primary bg-gray-700 hover:bg-gray-600"
          >
            See Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}

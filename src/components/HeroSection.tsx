import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated corner glow - top left */}
      <motion.div
        className="fixed top-0 left-0 w-1/4 h-1/4 pointer-events-none z-10"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold-start/10 via-gold-end/5 to-transparent blur-3xl" />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="relative z-20 text-center px-4"
      >
        {/* Company name */}
        <h1 className="font-heading tracking-tight uppercase mb-6">
          <span className="block text-6xl md:text-8xl lg:text-9xl text-white">
            CAPITAL
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl text-secondary">
            KNIT
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-secondary mt-6 mb-12 max-w-2xl mx-auto">
          Premium Knitwear Manufacturing Partner Since 1998
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/capabilities">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-base md:text-lg transition-transform"
            >
              Explore Our Capabilities
            </motion.button>
          </Link>
          
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full text-base md:text-lg hover:border-white/40 transition-all"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

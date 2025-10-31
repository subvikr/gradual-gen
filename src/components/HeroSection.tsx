import { motion } from "framer-motion";

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
        <h1 className="font-heading tracking-tight uppercase whitespace-nowrap">
          <span className="text-[9rem] md:text-[12rem] lg:text-[13.5rem] text-white">CAPITAL</span>
          <span className="text-[9rem] md:text-[12rem] lg:text-[13.5rem] text-secondary">KNIT</span>
        </h1>
      </motion.div>
    </section>
  );
}

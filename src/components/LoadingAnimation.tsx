import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animation duration: 2.5 seconds total
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const text = "CAPITAL KNIT";
  const letters = text.split("");

  // Stagger animation for each character
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex text-6xl md:text-8xl lg:text-9xl font-heading tracking-tight"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={child}
                className={index < 7 ? "text-white" : "text-secondary"}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

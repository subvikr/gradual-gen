import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="min-h-[60vh] bg-black py-20 px-4 relative overflow-hidden">
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Partner with a certified, experienced manufacturer trusted by global brands
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-gold text-black font-bold rounded-full text-xl shadow-2xl hover:shadow-yellow-400/20 transition-all"
            >
              Request a Quote
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

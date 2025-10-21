import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Award, Leaf, Cpu, Wrench, Globe } from "lucide-react";

export function CapabilitiesPreview() {
  const capabilities = [
    {
      icon: Sparkles,
      title: "Custom Knitwear Design",
      description: "Collaborative design process with CAD integration",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "AQL standards maintained throughout production",
    },
    {
      icon: Leaf,
      title: "Sustainable Production",
      description: "WRAP certified ethical manufacturing practices",
    },
    {
      icon: Cpu,
      title: "Technology Integration",
      description: "Advanced machinery and real-time monitoring",
    },
    {
      icon: Wrench,
      title: "Factory Re-Engineering",
      description: "Continuous process optimization and improvement",
    },
    {
      icon: Globe,
      title: "Global Logistics",
      description: "International shipping with full export expertise",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Our Capabilities
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            From concept to delivery, we offer comprehensive knitwear manufacturing services backed by world-class certifications and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-muted/50 border border-white/10 p-8 rounded-lg hover:border-white/30 transition-all hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 text-secondary mb-6 group-hover:text-white transition-colors" />
                <h3 className="font-heading text-2xl text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-secondary text-base">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/capabilities">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-base md:text-lg transition-transform"
            >
              View All Capabilities
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl">
            <span className="text-white">CAPITAL </span>
            <span className="text-secondary">KNIT</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

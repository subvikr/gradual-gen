import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageSquare, Layers, Package, Cog, CheckCircle, Truck } from "lucide-react";

export function ProcessOverview() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation & Design",
      description: "Understanding your vision",
    },
    {
      icon: Layers,
      title: "Sampling & Approval",
      description: "Prototype development",
    },
    {
      icon: Package,
      title: "Material Sourcing",
      description: "Premium yarn selection",
    },
    {
      icon: Cog,
      title: "Production",
      description: "Expert manufacturing",
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Rigorous testing",
    },
    {
      icon: Truck,
      title: "Packaging & Delivery",
      description: "Safe global shipping",
    },
  ];

  return (
    <section id="process" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Our Manufacturing Process
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            A proven workflow refined over 27 years
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-black border border-white/10 p-8 rounded-lg hover:border-white/30 hover:-translate-y-2 transition-all"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center font-heading text-black text-xl">
                  {index + 1}
                </div>
                <Icon className="w-10 h-10 text-secondary mb-4 mt-4" />
                <h3 className="font-heading text-xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm">
                  {step.description}
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
          <Link to="/process">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-base md:text-lg transition-transform"
            >
              Explore Detailed Process
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

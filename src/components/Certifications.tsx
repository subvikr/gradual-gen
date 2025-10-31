import { motion } from "framer-motion";
import { Shield, Lock, Award } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      icon: Award,
      name: "WRAP",
      fullName: "Worldwide Responsible Accredited Production",
      description: "Capital Knit is WRAP certified, ensuring ethical manufacturing practices, safe working conditions, and compliance with international labor standards. This certification demonstrates our commitment to social responsibility and worker welfare.",
    },
    {
      icon: Lock,
      name: "GSV",
      fullName: "Global Security Verification",
      description: "Our GSV certification validates our supply chain integrity, security protocols, and commitment to protecting client assets throughout the manufacturing process.",
    },
    {
      icon: Shield,
      name: "AEPC",
      fullName: "Apparel Export Promotion Council",
      description: "As a member of the Apparel Export Promotion Council, Capital Knit adheres to India's highest standards for export quality and business practices.",
    },
  ];

  return (
    <section id="certifications" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-black mb-6">
            Certified for Excellence, Ethics & Security
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-xl hover:border-yellow-400 hover:shadow-2xl transition-all"
              >
                <Icon className="w-16 h-16 text-yellow-500 mb-6" />
                <h3 className="font-heading text-3xl text-black mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-4">
                  {cert.fullName}
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

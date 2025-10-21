import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Sparkles, Award, Leaf, Cpu, Wrench, Globe } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Sparkles,
      title: "Integrated Manufacturing Excellence",
      description: [
        "Our full-spectrum production capabilities encompass every aspect of knitwear manufacturing. From cutting and sewing to finishing and packaging, we maintain complete control over the production process, ensuring consistency, quality, and efficiency.",
        "With advanced machinery spanning knitting, dyeing, printing, and garment construction, Capital Knit can handle projects of any scale—from small batch custom orders to large-scale production runs for major retailers. Our integrated approach eliminates the need for multiple vendors, streamlining timelines and reducing complexity.",
        "Our facility's capacity, combined with a skilled workforce of 200+ professionals, enables us to meet demanding schedules without compromising quality standards.",
      ],
      benefits: [
        "Complete production control from start to finish",
        "Flexible capacity for both custom and bulk orders",
        "Streamlined timelines through single-vendor approach",
        "Consistent quality across all production stages",
      ],
      stats: ["200+ skilled professionals", "27+ years of manufacturing experience", "State-of-the-art machinery fleet"],
    },
    {
      icon: Award,
      title: "Quality Assurance & AQL Standards",
      description: [
        "Quality is non-negotiable at Capital Knit. We maintain rigorous AQL (Acceptable Quality Limit) standards throughout every phase of production, backed by multi-stage inspection processes and dedicated quality control laboratories.",
        "Our QC team conducts comprehensive testing including fabric integrity checks, colorfastness testing, dimensional stability analysis, and garment construction verification. Every piece is inspected before it leaves our facility, ensuring only products that meet international standards reach our clients.",
        "Through continuous monitoring, data-driven process improvements, and investment in testing equipment, we've built a quality management system that consistently exceeds client expectations.",
      ],
      benefits: [
        "AQL standards compliance",
        "Multi-stage inspection protocols",
        "Dedicated QC laboratories",
        "Data-driven quality improvements",
      ],
      stats: ["<1% defect rate", "100% pre-shipment inspection", "ISO-compliant testing procedures"],
    },
    {
      icon: Leaf,
      title: "Sustainable & Ethical Production",
      description: [
        "As a WRAP-certified manufacturer, Capital Knit is committed to ethical manufacturing practices, worker welfare, and environmental responsibility. Our certification validates our adherence to international labor standards, safe working conditions, and fair employment practices.",
        "Sustainability is woven into every aspect of our operations—from energy-efficient machinery and water conservation systems to responsible waste management and eco-friendly material sourcing. We partner with suppliers who share our commitment to environmental stewardship.",
        "Our workforce enjoys safe working conditions, fair wages, and professional development opportunities. By investing in our people and our planet, we create value that extends far beyond the products we manufacture.",
      ],
      benefits: [
        "WRAP certified ethical manufacturing",
        "Environmental responsibility programs",
        "Fair labor practices and worker welfare",
        "Sustainable material sourcing options",
      ],
      stats: ["WRAP Certified", "GSV Certified", "Eco-friendly operations"],
    },
    {
      icon: Cpu,
      title: "Advanced Technology Integration",
      description: [
        "Capital Knit leverages cutting-edge technology to deliver precision, efficiency, and innovation. Our facility features sophisticated knitting machinery, computer-aided design (CAD) systems, and real-time production monitoring platforms that ensure optimal results.",
        "CAD integration enables seamless collaboration with clients, allowing for rapid prototyping, pattern adjustments, and design refinements before production begins. Our automated systems reduce human error while maintaining the craftsmanship that defines quality knitwear.",
        "From digital pattern-making to automated quality inspections, technology enhances every aspect of our workflow—enabling us to deliver complex designs with consistent accuracy and shorter lead times.",
      ],
      benefits: [
        "CAD/CAM design integration",
        "Automated knitting machinery",
        "Real-time production monitoring",
        "Rapid prototyping capabilities",
      ],
      stats: ["Computer-aided design systems", "Automated inspection equipment", "Digital pattern-making"],
    },
    {
      icon: Wrench,
      title: "Factory Re-Engineering & Optimization",
      description: [
        "Continuous improvement is embedded in Capital Knit's culture. We regularly analyze and optimize our value chain, production processes, and operational workflows to enhance efficiency, reduce waste, and improve outcomes.",
        "Our factory re-engineering initiatives include lean manufacturing principles, workflow optimization, productivity enhancement programs, and investment in workforce training. By identifying bottlenecks and implementing data-driven improvements, we've increased capacity while maintaining quality.",
        "This commitment to optimization benefits our clients through faster turnarounds, competitive pricing, and the ability to scale production without sacrificing standards.",
      ],
      benefits: [
        "Lean manufacturing principles",
        "Continuous process improvement",
        "Workforce productivity programs",
        "Value chain optimization",
      ],
      stats: ["30% efficiency improvement over 5 years", "Reduced lead times", "Enhanced production capacity"],
    },
    {
      icon: Globe,
      title: "Global Logistics & Export Excellence",
      description: [
        "With extensive international shipping experience, Capital Knit ensures your products reach their destination safely, on time, and with complete documentation. Our logistics team handles customs compliance, export paperwork, and coordination with global shipping partners.",
        "As members of the Apparel Export Promotion Council (AEPC), we adhere to India's highest export standards and maintain strong relationships with freight forwarders, ensuring reliable delivery to markets across Europe, North America, Asia-Pacific, and beyond.",
        "From packaging standards that protect products during transit to real-time shipment tracking, we make global logistics seamless for our clients.",
      ],
      benefits: [
        "International shipping expertise",
        "Customs and export compliance",
        "Professional packaging standards",
        "Delivery tracking and coordination",
      ],
      stats: ["Europe", "North America", "Asia-Pacific", "Middle East", "Global coverage"],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="bg-black min-h-screen">
        {/* Hero Banner */}
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black via-black to-muted/50 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Our Capabilities
            </h1>
            <p className="text-secondary text-xl md:text-2xl">
              Comprehensive manufacturing excellence backed by 27 years of experience
            </p>
          </motion.div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              Capital Knit offers a complete suite of knitwear manufacturing capabilities designed to serve international brands seeking reliability, quality, and ethical production. From initial design consultation through global delivery, our integrated approach ensures exceptional results at every stage.
            </p>
          </motion.div>
        </section>

        {/* Capability Sections */}
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          const isEven = index % 2 === 0;
          
          return (
            <section key={index} className={`py-20 px-4 ${isEven ? 'bg-black' : 'bg-muted/30'}`}>
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-12 items-start"
                >
                  <div>
                    <Icon className="w-16 h-16 text-secondary mb-6" />
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                      {capability.title}
                    </h2>
                    {capability.description.map((para, pIndex) => (
                      <p key={pIndex} className="text-secondary text-base md:text-lg leading-relaxed mb-4">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-heading text-xl text-white mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        {capability.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="text-secondary flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl text-white mb-4">
                        {index === 1 ? "Statistics" : index === 5 ? "Geographic Reach" : "Highlights"}
                      </h3>
                      <div className="space-y-2">
                        {capability.stats.map((stat, sIndex) => (
                          <div key={sIndex} className="bg-black/50 border border-white/10 p-4 rounded-lg">
                            <p className="text-secondary text-sm">{stat}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-8">
              Explore How We Can Support Your Brand
            </h2>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-gold text-black font-bold rounded-full text-xl shadow-2xl hover:shadow-yellow-400/20 transition-all"
              >
                Request a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Capabilities;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Sparkles, Award, Leaf, Cpu, Wrench, Globe, ArrowRight } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Sparkles,
      title: "Integrated Manufacturing Excellence",
      description: "Our full-spectrum production capabilities encompass every aspect of knitwear manufacturing. From cutting and sewing to finishing and packaging, we maintain complete control over the production process, ensuring consistency, quality, and efficiency.",
      fullText: "With advanced machinery spanning knitting, dyeing, printing, and garment construction, Capital Knit can handle projects of any scale—from small batch custom orders to large-scale production runs for major retailers. Our integrated approach eliminates the need for multiple vendors, streamlining timelines and reducing complexity. Our facility's capacity, combined with a skilled workforce of 200+ professionals, enables us to meet demanding schedules without compromising quality standards.",
      benefits: [
        "Complete production control from start to finish",
        "Flexible capacity for both custom and bulk orders",
        "Streamlined timelines through single-vendor approach",
        "Consistent quality across all production stages"
      ],
      stats: ["200+ skilled professionals", "27+ years of experience", "State-of-the-art machinery"]
    },
    {
      icon: Award,
      title: "Quality Assurance & AQL Standards",
      description: "Quality is non-negotiable at Capital Knit. We maintain rigorous AQL (Acceptable Quality Limit) standards throughout every phase of production, backed by multi-stage inspection processes and dedicated quality control laboratories.",
      fullText: "Our QC team conducts comprehensive testing including fabric integrity checks, colorfastness testing, dimensional stability analysis, and garment construction verification. Every piece is inspected before it leaves our facility, ensuring only products that meet international standards reach our clients. Through continuous monitoring, data-driven process improvements, and investment in testing equipment, we've built a quality management system that consistently exceeds client expectations.",
      benefits: [
        "AQL standards compliance",
        "Multi-stage inspection protocols",
        "Dedicated QC laboratories",
        "Data-driven quality improvements"
      ],
      stats: ["<1% defect rate", "100% pre-shipment inspection", "ISO-compliant testing"]
    },
    {
      icon: Leaf,
      title: "Sustainable & Ethical Production",
      description: "As a WRAP-certified manufacturer, Capital Knit is committed to ethical manufacturing practices, worker welfare, and environmental responsibility. Our certification validates our adherence to international labor standards, safe working conditions, and fair employment practices.",
      fullText: "Sustainability is woven into every aspect of our operations—from energy-efficient machinery and water conservation systems to responsible waste management and eco-friendly material sourcing. We partner with suppliers who share our commitment to environmental stewardship. Our workforce enjoys safe working conditions, fair wages, and professional development opportunities. By investing in our people and our planet, we create value that extends far beyond the products we manufacture.",
      benefits: [
        "WRAP certified ethical manufacturing",
        "Environmental responsibility programs",
        "Fair labor practices and worker welfare",
        "Sustainable material sourcing options"
      ],
      stats: ["WRAP Certified", "GSV Certified", "Safe working conditions"]
    },
    {
      icon: Cpu,
      title: "Advanced Technology Integration",
      description: "Capital Knit leverages cutting-edge technology to deliver precision, efficiency, and innovation. Our facility features sophisticated knitting machinery, computer-aided design (CAD) systems, and real-time production monitoring platforms that ensure optimal results.",
      fullText: "CAD integration enables seamless collaboration with clients, allowing for rapid prototyping, pattern adjustments, and design refinements before production begins. Our automated systems reduce human error while maintaining the craftsmanship that defines quality knitwear. From digital pattern-making to automated quality inspections, technology enhances every aspect of our workflow—enabling us to deliver complex designs with consistent accuracy and shorter lead times.",
      benefits: [
        "CAD/CAM design integration",
        "Automated knitting machinery",
        "Real-time production monitoring",
        "Rapid prototyping capabilities"
      ],
      stats: ["CAD systems", "Automated inspection", "Digital pattern-making"]
    },
    {
      icon: Wrench,
      title: "Factory Re-Engineering & Optimization",
      description: "Continuous improvement is embedded in Capital Knit's culture. We regularly analyze and optimize our value chain, production processes, and operational workflows to enhance efficiency, reduce waste, and improve outcomes.",
      fullText: "Our factory re-engineering initiatives include lean manufacturing principles, workflow optimization, productivity enhancement programs, and investment in workforce training. By identifying bottlenecks and implementing data-driven improvements, we've increased capacity while maintaining quality. This commitment to optimization benefits our clients through faster turnarounds, competitive pricing, and the ability to scale production without sacrificing standards.",
      benefits: [
        "Lean manufacturing principles",
        "Continuous process improvement",
        "Workforce productivity programs",
        "Value chain optimization"
      ],
      stats: ["30% efficiency improvement", "Reduced lead times", "Enhanced capacity"]
    },
    {
      icon: Globe,
      title: "Global Logistics & Export Excellence",
      description: "With extensive international shipping experience, Capital Knit ensures your products reach their destination safely, on time, and with complete documentation. Our logistics team handles customs compliance, export paperwork, and coordination with global shipping partners.",
      fullText: "As members of the Apparel Export Promotion Council (AEPC), we adhere to India's highest export standards and maintain strong relationships with freight forwarders, ensuring reliable delivery to markets across Europe, North America, Asia-Pacific, and beyond. From packaging standards that protect products during transit to real-time shipment tracking, we make global logistics seamless for our clients.",
      benefits: [
        "International shipping expertise",
        "Customs and export compliance",
        "Professional packaging standards",
        "Delivery tracking and coordination"
      ],
      stats: ["Global reach", "AEPC member", "Expert logistics team"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-400/5 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6">
              Our Capabilities
            </h1>
            <p className="text-secondary text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive manufacturing excellence backed by 27 years of experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-secondary text-lg md:text-xl leading-relaxed text-center"
          >
            Capital Knit offers a complete suite of knitwear manufacturing capabilities designed to serve international brands seeking reliability, quality, and ethical production. From initial design consultation through global delivery, our integrated approach ensures exceptional results at every stage.
          </motion.p>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
              >
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-gold rounded-lg">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl">
                      {capability.title}
                    </h2>
                  </div>
                  
                  <p className="text-secondary text-lg leading-relaxed mb-6">
                    {capability.description}
                  </p>
                  
                  <p className="text-secondary text-base leading-relaxed mb-8">
                    {capability.fullText}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {capability.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span className="text-secondary">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {capability.stats.map((stat, i) => (
                        <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                          <span className="text-white font-semibold">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border border-white/10" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Explore How We Can Support Your Brand
            </h2>
            <p className="text-secondary text-lg mb-8">
              Let's discuss how our capabilities can bring your vision to life
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-lg"
              >
                Request a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Capabilities;

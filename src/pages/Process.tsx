import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MessageSquare, Layers, Package, Cog, CheckCircle, Truck } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: 1,
      title: "Consultation & Design",
      timeline: "1-2 weeks",
      description:
        "Every successful project begins with understanding your vision. During the consultation phase, our team works closely with you to discuss requirements, review technical specifications, and explore design possibilities. We assess feasibility, provide recommendations based on our manufacturing expertise, and establish clear expectations for timelines, costs, and deliverables. Whether you arrive with complete tech packs or need collaborative design support, we tailor our approach to your needs.",
      involvement: [
        "Initial discussion of project requirements",
        "Design ideation and concept review",
        "Technical specifications approval",
        "Budget and timeline alignment",
      ],
      deliverables: ["Project scope document", "Initial design concepts", "Feasibility assessment", "Production timeline proposal"],
    },
    {
      icon: Layers,
      number: 2,
      title: "Sampling & Approval",
      timeline: "2-3 weeks",
      description:
        "Before full-scale production begins, we develop prototypes that bring your design to life. Our sampling process allows you to evaluate fit, fabric, construction, and overall quality before committing to bulk production. We encourage feedback and iterations during this phase. Whether adjustments involve sizing, material selection, or design details, our team works collaboratively to refine samples until they meet your exact specifications.",
      involvement: [
        "Sample review and evaluation",
        "Feedback on fit, fabric, and construction",
        "Approval of revisions",
        "Final sample sign-off",
      ],
      deliverables: ["Initial prototype samples", "Revised samples (if needed)", "Final approved sample", "Production-ready specifications"],
    },
    {
      icon: Package,
      number: 3,
      title: "Material Sourcing",
      timeline: "1-2 weeks",
      description:
        "With approved samples in hand, we proceed to source premium materials that match your specifications. Our relationships with trusted suppliers ensure access to high-quality yarns, fabrics, and trims that meet international standards. Every material undergoes testing and verification before entering production. We conduct fabric weight checks, colorfastness testing, and dimensional stability analysis to ensure consistency with approved samples.",
      involvement: [],
      deliverables: ["Confirmed material orders", "Material test reports", "Production inventory ready"],
    },
    {
      icon: Cog,
      number: 4,
      title: "Production & Manufacturing",
      timeline: "4-8 weeks (volume dependent)",
      description:
        "Production begins with cutting-edge knitting technology and skilled craftsmanship working in harmony. Our advanced machinery ensures precision and consistency, while our experienced workforce brings expertise that technology alone cannot replicate. Throughout production, we maintain real-time quality monitoring, progress tracking, and open communication. You'll receive regular updates on production status, allowing you to plan for downstream activities like marketing and distribution.",
      involvement: [
        "Regular progress updates",
        "Mid-production check-ins (for large orders)",
        "Communication on any adjustments needed",
      ],
      deliverables: ["Completed production batches", "Quality inspection reports"],
    },
    {
      icon: CheckCircle,
      number: 5,
      title: "Quality Control & Testing",
      timeline: "1 week",
      description:
        "Before any product leaves our facility, it undergoes rigorous quality control inspections based on AQL (Acceptable Quality Limit) standards. Our dedicated QC team conducts comprehensive checks on every garment, examining construction, measurements, finishing, and overall appearance. Testing includes fabric integrity verification, colorfastness assessment, dimensional stability checks, and detailed visual inspection. Only products that meet our strict criteria and your specifications proceed to packaging.",
      involvement: [],
      deliverables: ["QC inspection reports", "Test results documentation", "Defect resolution (if any issues identified)", "Final approval for shipment"],
    },
    {
      icon: Truck,
      number: 6,
      title: "Packaging & Global Delivery",
      timeline: "2-4 weeks (destination dependent)",
      description:
        "The final step in our process ensures your products reach their destination in perfect condition. We follow professional packaging standards tailored to your requirements, whether that involves individual poly bags, branded packaging, or specific labeling needs. Our logistics team coordinates international shipping, manages customs documentation, and partners with reliable freight forwarders to ensure on-time delivery. You'll receive tracking information and regular updates until your order arrives safely.",
      involvement: [
        "Packaging and labeling requirements confirmation",
        "Shipping method and destination coordination",
        "Delivery schedule alignment",
        "Receipt confirmation",
      ],
      deliverables: ["Professionally packaged products", "Complete export documentation", "Shipping tracking information", "Delivery confirmation"],
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
              Our Manufacturing Process
            </h1>
            <p className="text-secondary text-xl md:text-2xl">
              A proven workflow refined over 27 years
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
              Capital Knit's manufacturing process has been refined over nearly three decades to deliver consistent quality, efficient timelines, and transparent collaboration. From initial consultation through global delivery, every step is designed to meet the exacting standards of international brands.
            </p>
          </motion.div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-orange-400 to-yellow-400 hidden md:block" />

              <div className="space-y-20">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="md:pl-24">
                        {/* Step number badge */}
                        <div className="absolute left-0 md:left-4 -top-4 w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center font-heading text-black text-2xl z-10">
                          {step.number}
                        </div>

                        <div className="bg-muted/30 border border-white/10 p-8 rounded-lg hover:border-white/30 transition-colors">
                          <div className="flex items-start gap-4 mb-4">
                            <Icon className="w-10 h-10 text-secondary flex-shrink-0" />
                            <div className="flex-1">
                              <h3 className="font-heading text-2xl md:text-3xl text-white mb-2">
                                {step.title}
                              </h3>
                              <p className="text-yellow-400 text-sm font-semibold">
                                Timeline: {step.timeline}
                              </p>
                            </div>
                          </div>

                          <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
                            {step.description}
                          </p>

                          {step.involvement.length > 0 && (
                            <div className="mb-6">
                              <h4 className="font-heading text-white text-lg mb-3">Client Involvement</h4>
                              <ul className="space-y-2">
                                {step.involvement.map((item, idx) => (
                                  <li key={idx} className="text-secondary flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {step.deliverables.length > 0 && (
                            <div>
                              <h4 className="font-heading text-white text-lg mb-3">Deliverables</h4>
                              <ul className="space-y-2">
                                {step.deliverables.map((item, idx) => (
                                  <li key={idx} className="text-secondary flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">✓</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Summary */}
        <section className="py-16 px-4 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Total Process Timeline
            </h2>
            <p className="text-secondary text-lg md:text-xl mb-8">
              <span className="text-white font-bold">10-16 weeks</span> typical from consultation to delivery
            </p>
            <p className="text-secondary text-sm">
              Note: Timelines can be adjusted based on order volume, complexity, and urgency. Rush orders may be accommodated with advance planning.
            </p>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Ready to Begin Your Project?
            </h2>
            <p className="text-secondary text-lg md:text-xl mb-8">
              Our proven process ensures quality results from concept to delivery
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-gold text-black font-bold rounded-full text-xl shadow-2xl hover:shadow-yellow-400/20 transition-all"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Process;

import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MessageSquare, Layers, Package, Cog, CheckCircle, Truck } from "lucide-react";

const Process = () => {
  const navigate = useNavigate();
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Consultation & Design",
      timeline: "1-2 weeks",
      description: "Every successful project begins with understanding your vision. During the consultation phase, our team works closely with you to discuss requirements, review technical specifications, and explore design possibilities.",
      fullText: "We assess feasibility, provide recommendations based on our manufacturing expertise, and establish clear expectations for timelines, costs, and deliverables. Whether you arrive with complete tech packs or need collaborative design support, we tailor our approach to your needs.",
      clientInvolvement: [
        "Initial discussion of project requirements",
        "Design ideation and concept review",
        "Technical specifications approval",
        "Budget and timeline alignment"
      ],
      deliverables: [
        "Project scope document",
        "Initial design concepts",
        "Feasibility assessment",
        "Production timeline proposal"
      ]
    },
    {
      number: 2,
      icon: Layers,
      title: "Sampling & Approval",
      timeline: "2-3 weeks",
      description: "Before full-scale production begins, we develop prototypes that bring your design to life. Our sampling process allows you to evaluate fit, fabric, construction, and overall quality before committing to bulk production.",
      fullText: "We encourage feedback and iterations during this phase. Whether adjustments involve sizing, material selection, or design details, our team works collaboratively to refine samples until they meet your exact specifications.",
      clientInvolvement: [
        "Sample review and evaluation",
        "Feedback on fit, fabric, and construction",
        "Approval of revisions",
        "Final sample sign-off"
      ],
      qualityCheckpoints: [
        "Fabric quality verification",
        "Construction technique validation",
        "Sizing and fit assessment",
        "Color matching approval"
      ],
      deliverables: [
        "Initial prototype samples",
        "Revised samples (if needed)",
        "Final approved sample",
        "Production-ready specifications"
      ]
    },
    {
      number: 3,
      icon: Package,
      title: "Material Sourcing",
      timeline: "1-2 weeks",
      description: "With approved samples in hand, we proceed to source premium materials that match your specifications. Our relationships with trusted suppliers ensure access to high-quality yarns, fabrics, and trims that meet international standards.",
      fullText: "Every material undergoes testing and verification before entering production. We conduct fabric weight checks, colorfastness testing, and dimensional stability analysis to ensure consistency with approved samples.",
      qualityCheckpoints: [
        "Supplier verification and certification",
        "Material testing (colorfastness, weight, stability)",
        "Color matching with approved standards",
        "Inventory preparation and staging"
      ],
      deliverables: [
        "Confirmed material orders",
        "Material test reports",
        "Production inventory ready"
      ]
    },
    {
      number: 4,
      icon: Cog,
      title: "Production & Manufacturing",
      timeline: "4-8 weeks (volume dependent)",
      description: "Production begins with cutting-edge knitting technology and skilled craftsmanship working in harmony. Our advanced machinery ensures precision and consistency, while our experienced workforce brings expertise that technology alone cannot replicate.",
      fullText: "Throughout production, we maintain real-time quality monitoring, progress tracking, and open communication. You'll receive regular updates on production status, allowing you to plan for downstream activities like marketing and distribution.",
      clientInvolvement: [
        "Regular progress updates",
        "Mid-production check-ins (for large orders)",
        "Communication on any adjustments needed"
      ],
      qualityCheckpoints: [
        "In-line quality inspections",
        "Workmanship verification",
        "Construction consistency checks",
        "Periodic sampling during production run"
      ],
      processStages: [
        "Fabric knitting",
        "Cutting and pattern preparation",
        "Sewing and assembly",
        "Finishing and detailing",
        "Initial QC inspection"
      ]
    },
    {
      number: 5,
      icon: CheckCircle,
      title: "Quality Control & Testing",
      timeline: "1 week",
      description: "Before any product leaves our facility, it undergoes rigorous quality control inspections based on AQL (Acceptable Quality Limit) standards. Our dedicated QC team conducts comprehensive checks on every garment, examining construction, measurements, finishing, and overall appearance.",
      fullText: "Testing includes fabric integrity verification, colorfastness assessment, dimensional stability checks, and detailed visual inspection. Only products that meet our strict criteria and your specifications proceed to packaging.",
      qualityCheckpoints: [
        "AQL standard inspections (multi-level sampling)",
        "Measurement verification against specifications",
        "Colorfastness and fabric integrity testing",
        "Visual inspection for defects",
        "Finishing quality assessment",
        "Packaging readiness verification"
      ],
      testingProtocols: [
        "100% pre-shipment inspection",
        "Random sampling throughout batches",
        "Performance testing (wash, wear, durability)",
        "Documentation of all findings"
      ],
      deliverables: [
        "QC inspection reports",
        "Test results documentation",
        "Defect resolution (if any issues identified)",
        "Final approval for shipment"
      ]
    },
    {
      number: 6,
      icon: Truck,
      title: "Packaging & Global Delivery",
      timeline: "2-4 weeks (destination dependent)",
      description: "The final step in our process ensures your products reach their destination in perfect condition. We follow professional packaging standards tailored to your requirements, whether that involves individual poly bags, branded packaging, or specific labeling needs.",
      fullText: "Our logistics team coordinates international shipping, manages customs documentation, and partners with reliable freight forwarders to ensure on-time delivery. You'll receive tracking information and regular updates until your order arrives safely.",
      clientInvolvement: [
        "Packaging and labeling requirements confirmation",
        "Shipping method and destination coordination",
        "Delivery schedule alignment",
        "Receipt confirmation"
      ],
      processStages: [
        "Professional packaging per specifications",
        "Export documentation preparation",
        "Customs compliance verification",
        "Shipping coordination with freight partners",
        "Delivery tracking and updates"
      ],
      deliverables: [
        "Professionally packaged products",
        "Complete export documentation",
        "Shipping tracking information",
        "Delivery confirmation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-400/5 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6">
              Our Manufacturing Process
            </h1>
            <p className="text-secondary text-xl md:text-2xl max-w-3xl mx-auto">
              A proven workflow refined over 27 years
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-secondary text-lg md:text-xl leading-relaxed text-center"
          >
            Capital Knit's manufacturing process has been refined over nearly three decades to deliver consistent quality, efficient timelines, and transparent collaboration. From initial consultation through global delivery, every step is designed to meet the exacting standards of international brands.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-400 to-yellow-400 hidden md:block" />
          
          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:grid-flow-dense'}`}
                >
                  {/* Number Badge - Center on desktop */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                      <span className="font-heading text-2xl text-black">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`${isEven ? 'md:pr-16' : 'md:pl-16 md:col-start-2'} pl-20 md:pl-0 pt-4`}>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/30 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <Icon className="w-8 h-8 text-yellow-400" />
                        <div>
                          <h3 className="font-heading text-2xl md:text-3xl">
                            {step.title}
                          </h3>
                          <p className="text-yellow-400 text-sm font-semibold">
                            {step.timeline}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-secondary text-base leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      <p className="text-secondary text-sm leading-relaxed mb-6">
                        {step.fullText}
                      </p>
                      
                      {step.clientInvolvement && (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-2">Client Involvement:</h4>
                          <ul className="space-y-1">
                            {step.clientInvolvement.map((item, i) => (
                              <li key={i} className="text-secondary text-sm">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {step.qualityCheckpoints && (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-2">Quality Checkpoints:</h4>
                          <ul className="space-y-1">
                            {step.qualityCheckpoints.map((item, i) => (
                              <li key={i} className="text-secondary text-sm">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {step.processStages && (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-2">Process Stages:</h4>
                          <ul className="space-y-1">
                            {step.processStages.map((item, i) => (
                              <li key={i} className="text-secondary text-sm">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {step.testingProtocols && (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-2">Testing Protocols:</h4>
                          <ul className="space-y-1">
                            {step.testingProtocols.map((item, i) => (
                              <li key={i} className="text-secondary text-sm">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {step.deliverables && (
                        <div>
                          <h4 className="text-white font-semibold mb-2">Deliverables:</h4>
                          <ul className="space-y-1">
                            {step.deliverables.map((item, i) => (
                              <li key={i} className="text-secondary text-sm">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white/5 border border-white/10 rounded-lg p-8"
          >
            <h3 className="font-heading text-2xl mb-6">Full Process Timeline</h3>
            <p className="text-white font-semibold mb-4">Total Timeline: 10-16 weeks (typical)</p>
            <ul className="space-y-2 text-secondary">
              <li>• Consultation & Design: 1-2 weeks</li>
              <li>• Sampling & Approval: 2-3 weeks</li>
              <li>• Material Sourcing: 1-2 weeks</li>
              <li>• Production: 4-8 weeks</li>
              <li>• Quality Control: 1 week</li>
              <li>• Packaging & Delivery: 2-4 weeks</li>
            </ul>
            <p className="text-secondary text-sm mt-6 italic">
              Note: Timelines can be adjusted based on order volume, complexity, and urgency. Rush orders may be accommodated with advance planning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              Ready to Begin Your Project?
            </h2>
            <p className="text-secondary text-lg mb-8">
              Our proven process ensures quality results from concept to delivery
            </p>
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-lg hover:scale-105 transition-transform"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;

import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Award } from "lucide-react";

const Certifications = () => {
  const navigate = useNavigate();
  const certifications = [
    {
      icon: Award,
      name: "WRAP",
      fullName: "Worldwide Responsible Accredited Production",
      description: "Capital Knit is WRAP certified, ensuring ethical manufacturing practices, safe working conditions, and compliance with international labor standards. This certification demonstrates our commitment to social responsibility and worker welfare.",
      principles: [
        "Compliance with laws and workplace regulations",
        "Prohibition of forced labor",
        "Prohibition of child labor",
        "Prohibition of harassment or abuse",
        "Fair compensation and benefits",
        "Reasonable working hours",
        "Prohibition of discrimination",
        "Health and safety standards",
        "Freedom of association",
        "Environment protection",
        "Customs compliance",
        "Security protocols"
      ]
    },
    {
      icon: Lock,
      name: "GSV",
      fullName: "Global Security Verification",
      description: "Our GSV certification validates our supply chain integrity, security protocols, and commitment to protecting client assets throughout the manufacturing process.",
      principles: [
        "Physical security measures",
        "Personnel security screening",
        "Procedural security controls",
        "Access control systems",
        "Cargo security protocols",
        "Information technology security",
        "Business partner requirements",
        "Security training programs"
      ]
    },
    {
      icon: Shield,
      name: "AEPC",
      fullName: "Apparel Export Promotion Council",
      description: "As a member of the Apparel Export Promotion Council, Capital Knit adheres to India's highest standards for export quality and business practices.",
      benefits: [
        "Export quality compliance",
        "Industry best practices adherence",
        "Trade facilitation support",
        "International market access",
        "Business development resources",
        "Regulatory guidance",
        "Industry networking opportunities",
        "Export promotion support"
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
              Certified for Excellence
            </h1>
            <p className="text-secondary text-xl md:text-2xl max-w-3xl mx-auto">
              Ethics, Security & Quality Standards
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
            Capital Knit holds internationally recognized certifications that validate our commitment to ethical manufacturing, supply chain security, and export excellence. These certifications are not just badges—they represent our unwavering dedication to operating with integrity, protecting worker welfare, and delivering quality that meets global standards.
          </p>
        </div>
      </section>

      {/* Detailed Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-6 bg-gradient-gold rounded-2xl">
                      <Icon className="w-12 h-12 text-black" />
                    </div>
                    <div>
                      <h2 className="font-heading text-4xl md:text-5xl mb-2">
                        {cert.name}
                      </h2>
                      <p className="text-yellow-400 text-sm font-semibold">
                        {cert.fullName}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-secondary text-lg leading-relaxed mb-8">
                    {cert.description}
                  </p>
                  
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border border-white/10" />
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                  <h3 className="text-white font-semibold text-xl mb-4">
                    {cert.principles ? "Core Principles" : "Key Benefits"}
                  </h3>
                  <ul className="space-y-3">
                    {(cert.principles || cert.benefits)?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Why Certifications Matter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-3">For Your Brand</h3>
                <p className="text-secondary text-sm">
                  Partner with confidence knowing your supplier meets international ethical and security standards. Protect your brand reputation with certified manufacturing.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-3">For Your Customers</h3>
                <p className="text-secondary text-sm">
                  Demonstrate transparency and commitment to ethical sourcing. Today's consumers demand accountability from brands they support.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-3">For Our Team</h3>
                <p className="text-secondary text-sm">
                  These certifications ensure our workforce enjoys safe conditions, fair treatment, and dignity in their work—values we never compromise on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              Partner With a Certified Manufacturer
            </h2>
            <p className="text-secondary text-lg mb-8">
              Learn more about how our certifications benefit your brand
            </p>
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-lg hover:scale-105 transition-transform"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;

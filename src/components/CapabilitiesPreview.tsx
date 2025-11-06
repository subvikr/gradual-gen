import { useNavigate } from "react-router-dom";
import { Sparkles, Award, Leaf, Cpu, Wrench, Globe } from "lucide-react";

export function CapabilitiesPreview() {
  const navigate = useNavigate();
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
    <section id="capabilities" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Our Capabilities
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            From concept to delivery, we offer comprehensive knitwear manufacturing services backed by world-class certifications and technology.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="group relative bg-muted/50 border border-white/10 p-8 rounded-lg hover:border-white/30 transition-all hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 text-secondary mb-6 group-hover:text-white transition-colors" />
                <h3 className="font-heading text-2xl bg-gradient-gold bg-clip-text text-transparent mb-3">
                  {capability.title}
                </h3>
                <p className="text-secondary text-base">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              navigate("/capabilities");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            className="px-8 py-4 bg-muted/50 border border-white/10 font-bold rounded-full text-base md:text-lg transition-transform hover:border-white/30 hover:scale-105"
          >
            <span className="bg-gradient-gold bg-clip-text text-transparent">View All Capabilities</span>
          </button>
        </div>
      </div>
    </section>
  );
}

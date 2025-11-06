import { useNavigate } from "react-router-dom";
import { MessageSquare, Layers, Package, Cog, CheckCircle, Truck } from "lucide-react";

export function ProcessOverview() {
  const navigate = useNavigate();
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
    <section id="process" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-black mb-6">
            Our Manufacturing Process
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            A proven workflow refined over 27 years
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white border-2 border-yellow-400 p-8 rounded-lg hover:border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary border-2 border-yellow-400 rounded-full flex items-center justify-center font-heading text-white text-xl">
                  {index + 1}
                </div>
                <Icon className="w-10 h-10 text-yellow-500 mb-4 mt-4" />
                <h3 className="font-heading text-xl text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              navigate("/process");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            className="px-8 py-4 bg-white border-2 border-gray-200 font-bold rounded-full text-base md:text-lg transition-all hover:border-yellow-400 hover:shadow-xl hover:scale-105"
          >
            <span className="bg-gradient-gold bg-clip-text text-transparent">Explore Detailed Process</span>
          </button>
        </div>
      </div>
    </section>
  );
}

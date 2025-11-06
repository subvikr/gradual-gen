import { useNavigate } from "react-router-dom";

export function CTASection() {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section id="contact" className="min-h-[60vh] bg-black py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Partner with a certified, experienced manufacturer trusted by global brands
          </p>
          <button
            onClick={handleQuoteClick}
            className="px-12 py-6 bg-gradient-gold text-black font-bold rounded-full text-xl shadow-2xl hover:shadow-yellow-400/20 transition-all hover:scale-105"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}

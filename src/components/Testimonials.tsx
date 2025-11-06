import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Capital Knit's attention to detail and commitment to quality has made them our go-to manufacturing partner for over 2 decades.",
      brand: "KUHL",
      isKuhl: true,
    },
    {
      quote: "Their certifications and ethical practices align perfectly with our values. Reliable, professional, and efficient.",
      brand: "Cyrillus",
      isCyrillus: true,
    },
    {
      quote: "From sampling to delivery, the entire process was seamless. Highly recommended for international brands.",
      brand: "Bellerose",
      isBellerose: true,
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/50 border border-white/10 p-8 rounded-lg hover:border-white/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white text-lg italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="text-secondary text-sm flex items-center gap-2">
                {(testimonial as any).isKuhl ? (
                  <>
                    <img src="https://www.kuhl.com/images/favicon/favicon-svg.svg" alt="KUHL Logo" className="w-4 h-4" />
                    <span className="font-bold">{testimonial.brand}</span>
                  </>
                ) : (testimonial as any).isCyrillus ? (
                  <>
                    <img src="https://cyrillus.com/cdn/shop/files/logo_380x.svg?v=1676480959" alt="Cyrillus Logo" className="w-4 h-4" />
                    <span className="font-bold">{testimonial.brand}</span>
                  </>
                ) : (testimonial as any).isBellerose ? (
                  <>
                    <img src="https://bellerose.com/cdn/shop/t/860/assets/logo-placeholder.svg?v=72526173786033627491738314553" alt="Bellerose Logo" className="w-4 h-4" />
                    <span className="font-bold">{testimonial.brand}</span>
                  </>
                ) : (
                  <>— {testimonial.brand}</>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

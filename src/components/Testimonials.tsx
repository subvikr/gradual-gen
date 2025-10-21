import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Capital Knit's attention to detail and commitment to quality has made them our go-to manufacturing partner for over 5 years.",
      brand: "International Fashion Brand",
    },
    {
      quote: "Their certifications and ethical practices align perfectly with our values. Reliable, professional, and efficient.",
      brand: "Global Retail Chain",
    },
    {
      quote: "From sampling to delivery, the entire process was seamless. Highly recommended for international brands.",
      brand: "Premium Clothing Label",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-muted/50 border border-white/10 p-8 rounded-lg hover:border-white/30 transition-colors"
            >
              <Quote className="w-12 h-12 text-yellow-400 mb-6" />
              <p className="text-white text-lg italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="text-secondary text-sm font-semibold">
                — {testimonial.brand}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export function AboutSection() {
  const stats = [
    {
      number: "27+",
      label: "Years of Manufacturing Excellence",
    },
    {
      number: "200+",
      label: "Skilled Professionals",
    },
    {
      number: "3",
      label: "WRAP, GSV & AEPC Certified",
    },
    {
      number: "Global",
      label: "Shipping Capabilities",
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Sticky text content */}
          <div className="md:sticky md:top-32 md:self-start space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-white"
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-secondary italic"
            >
              Crafting Quality Since 1998
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-secondary text-base md:text-lg leading-relaxed"
            >
              <p>
                Since our founding in 1998, Capital Knit has been driven by a singular vision: to become India's premier knitwear manufacturing partner for global brands. What started as an ambitious endeavor has evolved into a thriving operation backed by cutting-edge technology, a skilled workforce, and an unwavering commitment to quality.
              </p>

              <p>
                Through strategic investments in factory re-engineering, advanced machinery, and workforce development programs, we've built a globally competitive operation that delivers exceptional value at every stage of the production process. Our integrated approach combines traditional craftsmanship with modern manufacturing excellence.
              </p>

              <p>
                Today, we proudly serve international fashion brands, retailers, and corporate clients who demand reliability, ethical practices, and uncompromising quality standards.
              </p>
            </motion.div>
          </div>

          {/* Right side - Scrollable statistics cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted/50 border border-white/10 p-8 rounded-lg hover:border-white/20 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-heading bg-gradient-gold bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <div className="text-white text-lg md:text-xl">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

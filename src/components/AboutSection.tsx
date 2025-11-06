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
        {/* About Us Heading - Full width on desktop */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          About Us
        </h2>
        <p className="text-xl md:text-2xl text-secondary italic mb-12">
          Crafting Quality Since 1998
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4 text-secondary text-base md:text-lg leading-relaxed">
              <p>
                Since our founding in 1998, Capital Knit has been driven by a singular vision: to become India's premier knitwear manufacturing partner for global brands. What started as an ambitious endeavor has evolved into a thriving operation backed by cutting-edge technology, a skilled workforce, and an unwavering commitment to quality.
              </p>

              <p>
                Through strategic investments in factory re-engineering, advanced machinery, and workforce development programs, we've built a globally competitive operation that delivers exceptional value at every stage of the production process. Our integrated approach combines traditional craftsmanship with modern manufacturing excellence.
              </p>

              <p>
                Today, we proudly serve international fashion brands, retailers, and corporate clients who demand reliability, ethical practices, and uncompromising quality standards.
              </p>
            </div>
          </div>

          {/* Right side - Statistics cards in 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 lg:gap-[50px]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-muted/50 border border-white/10 p-6 rounded-lg hover:border-white/20 transition-colors w-48 h-36 md:w-40 md:h-32 lg:w-60 flex flex-col justify-center"
              >
                <div className="text-2xl md:text-3xl font-heading bg-gradient-gold bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

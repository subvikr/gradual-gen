import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shirt, Wind, Zap, Sparkles, Activity, PenTool } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Shirt,
      title: "T-Shirts & Polos",
      description:
        "Our t-shirt and polo production encompasses a wide variety of styles, fabrics, and finishing options. From classic crew necks to performance-driven athletic tees, we manufacture garments that combine comfort, durability, and style. With expertise in single jersey, pique, rib knit, and specialty fabrics, we can accommodate diverse design requirements while maintaining consistent quality across production runs.",
      styles: ["Crew neck t-shirts", "V-neck t-shirts", "Polo shirts", "Henley shirts", "Long-sleeve and short-sleeve options"],
      fabrics: ["Single jersey (various weights)", "Pique knit (classic polo fabric)", "Rib knit", "Slub jersey", "Performance blends"],
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Wind,
      title: "Sweaters & Cardigans",
      description:
        "Our sweater and cardigan production capabilities span a full range of knit patterns, yarn weights, and construction techniques. From classic cable knits to contemporary designs, we manufacture garments that deliver warmth, style, and quality craftsmanship. Whether your collection requires lightweight layering pieces or heavy winter sweaters, our facility is equipped to handle diverse yarn types and complex knit patterns.",
      styles: ["Crew neck pullovers", "V-neck pullovers", "Turtleneck sweaters", "Button-front cardigans", "Zip-up cardigans"],
      fabrics: ["Cable knit", "Ribbed knit", "Jacquard patterns", "Cotton, wool, cashmere blends", "Sustainable/recycled yarns"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Zap,
      title: "Hoodies & Sweatshirts",
      description:
        "Hoodies and sweatshirts are among our most requested product categories, serving fashion brands, athletic labels, and corporate clients alike. We manufacture both classic and contemporary styles with attention to fit, fabric quality, and construction details. Our capabilities include French terry, fleece, and loop knit fabrics, with options for custom branding, specialty washes, and performance features.",
      styles: ["Pullover hoodies", "Zip-up hoodies", "Crew neck sweatshirts", "Oversized/relaxed fits", "Athletic/slim fits"],
      fabrics: ["French terry", "Fleece (brushed and unbrushed)", "Loop knit", "Performance fleece", "Heavyweight and lightweight options"],
      gradient: "from-pink-500/20 to-red-500/20",
    },
    {
      icon: Sparkles,
      title: "Dresses & Skirts",
      description:
        "Our knit dress and skirt production capabilities cater to fashion brands seeking comfortable, versatile garments that combine style with wearability. From casual jersey dresses to structured knit skirts, we manufacture pieces that meet the demands of contemporary fashion. With expertise in various knit constructions and finishing techniques, we can bring diverse design visions to life.",
      styles: ["T-shirt dresses", "Midi and maxi dresses", "Bodycon/fitted styles", "A-line skirts", "Pencil skirts", "Wrap styles"],
      fabrics: ["Jersey knit", "Ribbed knit", "Ponte knit (structured)", "Sweater knit", "Stretch knits"],
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      icon: Activity,
      title: "Activewear & Performance Knits",
      description:
        "The activewear sector demands specialized fabrics, construction techniques, and performance features. Capital Knit manufactures technical knitwear that meets the functional requirements of athletic brands while maintaining style and comfort. Our performance knit capabilities include moisture-wicking fabrics, four-way stretch materials, and specialized finishing processes that enhance durability and function.",
      styles: ["Sports bras and athletic tops", "Leggings and athletic pants", "Performance t-shirts", "Athletic shorts", "Tank tops"],
      fabrics: ["Moisture-wicking technology", "Four-way stretch fabrics", "Technical polyester blends", "Compression fabrics", "Quick-dry properties"],
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      icon: PenTool,
      title: "Custom Design Solutions",
      description:
        "Beyond our standard product categories, Capital Knit offers fully customized knitwear manufacturing for brands with unique design visions. Our collaborative approach combines your creative direction with our technical expertise to develop bespoke garments from concept to completion. Whether you're launching a new collection, creating limited-edition pieces, or developing private label products, our custom design services provide the flexibility and support you need.",
      styles: ["Collaborative design development", "CAD integration", "Material sourcing", "Prototype development", "Private label services"],
      fabrics: ["Complex knit patterns", "Specialty yarns and blends", "Intricate embellishments", "Unique color combinations", "Innovative techniques"],
      gradient: "from-yellow-500/20 to-orange-500/20",
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
              Product Range
            </h1>
            <p className="text-secondary text-xl md:text-2xl">
              Versatile knitwear solutions for every need
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
              Capital Knit manufactures a comprehensive range of knitwear products for international brands across fashion, retail, corporate, and activewear sectors. Whether you need classic basics, performance knits, or custom designs, our capabilities span the full spectrum of knitwear production.
            </p>
          </motion.div>
        </section>

        {/* Product Categories */}
        {products.map((product, index) => {
          const Icon = product.icon;
          const isEven = index % 2 === 0;
          
          return (
            <section key={index} className={`py-20 px-4 ${isEven ? 'bg-black' : 'bg-muted/30'}`}>
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-12 items-start"
                >
                  <div>
                    <Icon className="w-16 h-16 text-secondary mb-6" />
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                      {product.title}
                    </h2>
                    <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Visual card */}
                    <div className={`relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br ${product.gradient}`}>
                      <div className="absolute inset-0 bg-black/60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-24 h-24 text-white/30" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-heading text-xl text-white mb-4">Styles Available</h3>
                      <ul className="space-y-2">
                        {product.styles.map((style, sIndex) => (
                          <li key={sIndex} className="text-secondary flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>{style}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl text-white mb-4">Fabric & Features</h3>
                      <ul className="space-y-2">
                        {product.fabrics.map((fabric, fIndex) => (
                          <li key={fIndex} className="text-secondary flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>{fabric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}

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
              Let's Create Your Next Collection
            </h2>
            <p className="text-secondary text-lg md:text-xl mb-8">
              From classic basics to custom designs, we bring your vision to life
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-gold text-black font-bold rounded-full text-xl shadow-2xl hover:shadow-yellow-400/20 transition-all"
              >
                Request Product Consultation
              </motion.button>
            </Link>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Products;

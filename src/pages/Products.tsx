import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shirt, Wind, CloudSnow, Dumbbell, Sparkles, Palette } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Shirt,
      title: "T-Shirts & Polos",
      gradient: "from-blue-500/20 to-purple-500/20",
      description: "Our t-shirt and polo production encompasses a wide variety of styles, fabrics, and finishing options. From classic crew necks to performance-driven athletic tees, we manufacture garments that combine comfort, durability, and style.",
      fullText: "With expertise in single jersey, pique, rib knit, and specialty fabrics, we can accommodate diverse design requirements while maintaining consistent quality across production runs.",
      styles: [
        "Crew neck t-shirts",
        "V-neck t-shirts",
        "Polo shirts (2-button, 3-button, placket variations)",
        "Henley shirts",
        "Long-sleeve and short-sleeve options",
        "Raglan sleeve styles"
      ],
      fabrics: [
        "Single jersey (various weights)",
        "Pique knit (classic polo fabric)",
        "Rib knit",
        "Slub jersey",
        "Performance blends (moisture-wicking)"
      ],
      customization: [
        "Screen printing",
        "Embroidery",
        "Appliqué",
        "Custom labels and tags",
        "Inside neck printing",
        "Specialty finishing (garment dyeing, enzyme wash)"
      ]
    },
    {
      icon: Wind,
      title: "Sweaters & Cardigans",
      gradient: "from-purple-500/20 to-pink-500/20",
      description: "Our sweater and cardigan production capabilities span a full range of knit patterns, yarn weights, and construction techniques. From classic cable knits to contemporary designs, we manufacture garments that deliver warmth, style, and quality craftsmanship.",
      fullText: "Whether your collection requires lightweight layering pieces or heavy winter sweaters, our facility is equipped to handle diverse yarn types and complex knit patterns.",
      styles: [
        "Crew neck pullovers",
        "V-neck pullovers",
        "Turtleneck sweaters",
        "Button-front cardigans",
        "Zip-up cardigans",
        "Shawl collar styles"
      ],
      patterns: [
        "Cable knit",
        "Ribbed knit",
        "Jacquard patterns",
        "Fair Isle designs",
        "Textured knits",
        "Intarsia (color blocking)"
      ],
      yarns: [
        "Cotton",
        "Wool and wool blends",
        "Acrylic",
        "Cashmere blends",
        "Alpaca",
        "Sustainable/recycled yarns"
      ]
    },
    {
      icon: CloudSnow,
      title: "Hoodies & Sweatshirts",
      gradient: "from-pink-500/20 to-red-500/20",
      description: "Hoodies and sweatshirts are among our most requested product categories, serving fashion brands, athletic labels, and corporate clients alike. We manufacture both classic and contemporary styles with attention to fit, fabric quality, and construction details.",
      fullText: "Our capabilities include French terry, fleece, and loop knit fabrics, with options for custom branding, specialty washes, and performance features.",
      styles: [
        "Pullover hoodies",
        "Zip-up hoodies (full zip, half zip)",
        "Crew neck sweatshirts",
        "Hooded sweatshirts",
        "Oversized/relaxed fits",
        "Athletic/slim fits"
      ],
      fabrics: [
        "French terry",
        "Fleece (brushed and unbrushed)",
        "Loop knit",
        "Performance fleece (moisture-wicking)",
        "Heavyweight and lightweight options"
      ],
      features: [
        "Drawstring hoods",
        "Kangaroo pockets",
        "Ribbed cuffs and waistbands",
        "Metal or plastic zippers",
        "Custom linings",
        "Thumbholes (for athletic styles)"
      ]
    },
    {
      icon: Palette,
      title: "Dresses & Skirts",
      gradient: "from-red-500/20 to-orange-500/20",
      description: "Our knit dress and skirt production capabilities cater to fashion brands seeking comfortable, versatile garments that combine style with wearability. From casual jersey dresses to structured knit skirts, we manufacture pieces that meet the demands of contemporary fashion.",
      fullText: "With expertise in various knit constructions and finishing techniques, we can bring diverse design visions to life.",
      dresses: [
        "T-shirt dresses",
        "Midi and maxi dresses",
        "Bodycon/fitted styles",
        "A-line dresses",
        "Wrap dresses",
        "Sweater dresses"
      ],
      skirts: [
        "A-line skirts",
        "Pencil skirts",
        "Pleated skirts",
        "Maxi skirts",
        "Mini skirts",
        "Wrap skirts"
      ],
      fabrics: [
        "Jersey knit (various weights)",
        "Ribbed knit",
        "Ponte knit (structured)",
        "Sweater knit",
        "Stretch knits"
      ]
    },
    {
      icon: Dumbbell,
      title: "Activewear & Performance Knits",
      gradient: "from-green-500/20 to-teal-500/20",
      description: "The activewear sector demands specialized fabrics, construction techniques, and performance features. Capital Knit manufactures technical knitwear that meets the functional requirements of athletic brands while maintaining style and comfort.",
      fullText: "Our performance knit capabilities include moisture-wicking fabrics, four-way stretch materials, and specialized finishing processes that enhance durability and function.",
      products: [
        "Sports bras and athletic tops",
        "Leggings and athletic pants",
        "Performance t-shirts",
        "Athletic shorts",
        "Tank tops",
        "Track jackets and pants"
      ],
      features: [
        "Moisture-wicking technology",
        "Four-way stretch fabrics",
        "Breathable mesh panels",
        "Flatlock seaming (prevents chafing)",
        "Anti-microbial finishing",
        "UV protection (UPF rated)",
        "Quick-dry properties"
      ],
      technologies: [
        "Technical polyester blends",
        "Nylon-spandex combinations",
        "Compression fabrics",
        "Mesh knits",
        "Brushed fleece for cold-weather wear"
      ]
    },
    {
      icon: Sparkles,
      title: "Custom Design Solutions",
      gradient: "from-yellow-500/20 to-orange-500/20",
      description: "Beyond our standard product categories, Capital Knit offers fully customized knitwear manufacturing for brands with unique design visions. Our collaborative approach combines your creative direction with our technical expertise to develop bespoke garments from concept to completion.",
      fullText: "Whether you're launching a new collection, creating limited-edition pieces, or developing private label products, our custom design services provide the flexibility and support you need.",
      services: [
        "Collaborative design development",
        "CAD integration and digital pattern-making",
        "Material sourcing and selection",
        "Prototype and sample development",
        "Full production capabilities",
        "Private label services"
      ],
      process: [
        "Concept Discussion - Share your vision, sketches, or inspiration",
        "Technical Development - We translate concepts into production-ready specs",
        "Material Selection - Explore fabric and trim options",
        "Sampling - Develop prototypes and refine designs",
        "Production - Manufacture to your exact specifications",
        "Quality Assurance - Rigorous QC and testing"
      ],
      idealFor: [
        "Emerging fashion brands",
        "Private label programs",
        "Limited-edition collections",
        "Experimental designs",
        "Brands requiring unique constructions"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6">
              Product Range
            </h1>
            <p className="text-secondary text-xl md:text-2xl max-w-3xl mx-auto">
              Versatile knitwear solutions for every need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-secondary text-lg md:text-xl leading-relaxed text-center"
          >
            Capital Knit manufactures a comprehensive range of knitwear products for international brands across fashion, retail, corporate, and activewear sectors. Whether you need classic basics, performance knits, or custom designs, our capabilities span the full spectrum of knitwear production.
          </motion.p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-gold rounded-lg">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl">
                      {product.title}
                    </h2>
                  </div>
                  
                  <p className="text-secondary text-lg leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  <p className="text-secondary text-base leading-relaxed mb-8">
                    {product.fullText}
                  </p>
                  
                  <div className={`aspect-video rounded-lg bg-gradient-to-br ${product.gradient} border border-white/10`} />
                </div>
                
                <div className="space-y-6">
                  {product.styles && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Styles Available</h3>
                      <ul className="space-y-2">
                        {product.styles.map((style, i) => (
                          <li key={i} className="text-secondary">• {style}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.fabrics && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Fabric Options</h3>
                      <ul className="space-y-2">
                        {product.fabrics.map((fabric, i) => (
                          <li key={i} className="text-secondary">• {fabric}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.customization && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Customization</h3>
                      <ul className="space-y-2">
                        {product.customization.map((custom, i) => (
                          <li key={i} className="text-secondary">• {custom}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.patterns && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Knit Patterns</h3>
                      <ul className="space-y-2">
                        {product.patterns.map((pattern, i) => (
                          <li key={i} className="text-secondary">• {pattern}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.yarns && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Yarn Options</h3>
                      <ul className="space-y-2">
                        {product.yarns.map((yarn, i) => (
                          <li key={i} className="text-secondary">• {yarn}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.features && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Features & Details</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-secondary">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.dresses && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Dress Styles</h3>
                      <ul className="space-y-2">
                        {product.dresses.map((dress, i) => (
                          <li key={i} className="text-secondary">• {dress}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.skirts && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Skirt Styles</h3>
                      <ul className="space-y-2">
                        {product.skirts.map((skirt, i) => (
                          <li key={i} className="text-secondary">• {skirt}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.products && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Product Types</h3>
                      <ul className="space-y-2">
                        {product.products.map((prod, i) => (
                          <li key={i} className="text-secondary">• {prod}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.technologies && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Fabric Technologies</h3>
                      <ul className="space-y-2">
                        {product.technologies.map((tech, i) => (
                          <li key={i} className="text-secondary">• {tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.services && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">What We Offer</h3>
                      <ul className="space-y-2">
                        {product.services.map((service, i) => (
                          <li key={i} className="text-secondary">• {service}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.process && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Our Process</h3>
                      <ul className="space-y-2">
                        {product.process.map((step, i) => (
                          <li key={i} className="text-secondary">• {step}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.idealFor && (
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3">Ideal For</h3>
                      <ul className="space-y-2">
                        {product.idealFor.map((item, i) => (
                          <li key={i} className="text-secondary">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              Let's Create Your Next Collection
            </h2>
            <p className="text-secondary text-lg mb-8">
              From classic basics to custom designs, we bring your vision to life
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-lg"
              >
                Request Product Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;

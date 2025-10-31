import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function ProductsPreview() {
  const products = [
    {
      title: "T-Shirts & Polos",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Sweaters & Cardigans",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Hoodies & Sweatshirts",
      gradient: "from-pink-500/20 to-red-500/20",
    },
    {
      title: "Dresses & Skirts",
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      title: "Activewear & Performance Knits",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Custom Design Solutions",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <section id="products" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Product Range
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            Versatile knitwear solutions for every need
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:border-white/30 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="font-heading text-xl md:text-2xl text-white text-center group-hover:scale-105 transition-transform">
                  {product.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-base md:text-lg transition-transform"
            >
              View Full Product Range
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

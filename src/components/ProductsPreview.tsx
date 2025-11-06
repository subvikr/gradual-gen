import { useNavigate } from "react-router-dom";

export function ProductsPreview() {
  const navigate = useNavigate();
  const products = [
    {
      title: "T-Shirts & Polos",
      image: "/products/tshirts-polos.png",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Sweaters & Cardigans",
      image: "/products/sweaters-cardigans.png",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Hoodies & Sweatshirts",
      image: "/products/hoodies-sweatshirts.png",
      gradient: "from-pink-500/20 to-red-500/20",
    },
    {
      title: "Dresses & Skirts",
      image: "/products/dresses-skirts.png",
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      title: "Activewear & Performance Knits",
      image: "/products/activewear-performance-knits.png",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Custom Design Solutions",
      image: "/products/custom-design-solutions.png",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <section id="products" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Product Range
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            Versatile knitwear solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:border-yellow-400/50 transition-all cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition-all"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="font-heading text-xl md:text-2xl text-white text-center group-hover:scale-105 transition-transform">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              navigate("/products");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-base md:text-lg transition-transform hover:scale-105"
          >
            View Full Product Range
          </button>
        </div>
      </div>
    </section>
  );
}

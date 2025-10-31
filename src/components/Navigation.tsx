import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", isScroll: false },
    { name: "About", path: "/#about", isScroll: true },
    { name: "Capabilities", path: "/capabilities", isScroll: false },
    { name: "Process", path: "/process", isScroll: false },
    { name: "Products", path: "/products", isScroll: false },
    { name: "Certifications", path: "/#certifications", isScroll: true },
    { name: "Contact", path: "/contact", isScroll: false },
  ];

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // If we're on a different page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4"
    >
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-white hover:text-primary transition-colors"
            aria-label="Home"
          >
            <Home className="h-6 w-6" />
          </Link>
          
          <ul className="flex items-center gap-4 md:gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.isScroll ? (
                <a
                  href={link.path}
                  onClick={(e) => handleScrollLink(e, link.path.split("#")[1])}
                  className="text-sm md:text-base text-secondary hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm md:text-base transition-colors ${
                    location.pathname === link.path
                      ? "text-white font-semibold"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </motion.nav>
  );
}

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero section
      const shouldShow = window.scrollY > window.innerHeight;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -20 
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
        <ul className="flex items-center gap-6 md:gap-8">
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
    </motion.nav>
  );
}

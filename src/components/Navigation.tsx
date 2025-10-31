import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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
    <>
      {/* CK Logo - Separate from navbar */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 text-2xl font-bold text-white hover:text-primary transition-colors"
      >
        CK
      </Link>

      {/* Centered Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
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
    </>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Corner Animation - Top-left */}
      <motion.div
        className="fixed top-0 left-0 w-1/4 h-1/4 pointer-events-none z-40"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-400/5 to-transparent blur-3xl" />
      </motion.div>

      {/* Sticky Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 mt-4"
      >
        <div className="max-w-fit mx-auto bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
          <ul className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isScroll ? (
                  <a
                    href={link.path}
                    onClick={(e) => handleScrollLink(e, link.path.split("#")[1])}
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
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

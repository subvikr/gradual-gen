import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileLogo, setShowMobileLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show logo when scrolled past hero section (> 100vh)
      setShowMobileLogo(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/", isScroll: true, isHome: true },
    { name: "About", path: "/#about", isScroll: true },
    { name: "Capabilities", path: "/#capabilities", isScroll: true },
    { name: "Process", path: "/#process", isScroll: true },
    { name: "Products", path: "/#products", isScroll: true },
    { name: "Clients", path: "/#clients", isScroll: true },
    { name: "Certifications", path: "/#certifications", isScroll: true },
    { name: "Contact", path: "/#contact", isScroll: true },
  ];

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If we're on a different page, navigate to home with hash
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    // If we're already on home, scroll directly
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If we're on a different page, navigate to home
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* CK Logo - Desktop always visible, Mobile/Tablet visible when scrolled or on non-home pages */}
      <a
        href="/"
        onClick={handleHomeClick}
        className={`fixed top-6 left-6 z-[100] items-center gap-2 text-2xl font-bold text-white hover:text-primary transition-colors cursor-pointer ${
          showMobileLogo || location.pathname !== "/" ? "flex" : "hidden md:flex"
        }`}
      >
        <img src="/logo.png" alt="Capital Knit Logo" className="w-10 h-10 pointer-events-none" />
      </a>

      {/* Mobile/Tablet Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 bg-black z-50"></div>

      {/* Hamburger Menu Button - Mobile/Tablet only */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-[100] md:hidden text-white"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation Bar - Hidden on Mobile/Tablet */}
      <div className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center">
        <nav>
          <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
            <ul className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={(e) => (link as any).isHome ? handleHomeClick(e) : handleScrollLink(e, link.path.split("#")[1])}
                className="text-sm md:text-base text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Tablet and Mobile only */}
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-3/4 bg-black border-l border-white/10 z-[90] md:hidden transition-transform duration-300">
          <nav className="flex flex-col h-full px-6 py-20">
            <ul className="flex flex-col justify-around h-3/4 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => (link as any).isHome ? handleHomeClick(e) : handleScrollLink(e, link.path.split("#")[1])}
                    className="text-lg text-gray-400 hover:text-white transition-colors cursor-pointer block text-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

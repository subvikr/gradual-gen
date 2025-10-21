import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="font-heading text-2xl mb-4">
              <span className="text-white">CAPITAL </span>
              <span className="text-secondary">KNIT</span>
            </h3>
            <p className="text-secondary text-sm mb-4">
              Quality Knitwear Manufacturing Since 1998
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-secondary hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-secondary hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-secondary hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Certifications */}
          <div>
            <h4 className="font-heading text-white text-lg mb-4">Certifications</h4>
            <ul className="space-y-2 text-secondary text-sm">
              <li>WRAP Certified</li>
              <li>GSV Certified</li>
              <li>AEPC Member</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-secondary text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@capitalknit.net" className="hover:text-white transition-colors">
                  info@capitalknit.net
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-secondary text-sm">
            © {currentYear} Capital Knit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

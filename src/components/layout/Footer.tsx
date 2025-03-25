
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-review-darkblue border-t border-review-cyan/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/70 text-sm mt-4 max-w-xs">
              Re-View is a software-based company focused on creating innovative games, applications, and educational technology kits.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-review-cyan/30 text-review-cyan hover:bg-review-cyan/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-review-cyan/30 text-review-cyan hover:bg-review-cyan/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-review-cyan/30 text-review-cyan hover:bg-review-cyan/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-review-cyan/30 text-review-cyan hover:bg-review-cyan/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/games" className="text-white/70 hover:text-review-cyan transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/studios" className="text-white/70 hover:text-review-cyan transition-colors">
                  Apps & Websites
                </Link>
              </li>
              <li>
                <Link to="/labs" className="text-white/70 hover:text-review-cyan transition-colors">
                  Project Kits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-review-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-review-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-review-cyan transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-review-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-review-cyan transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Re-View. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

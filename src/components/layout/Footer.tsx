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
            <p>reviewrv25@gmail.com</p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/share/1XVwdmm6fe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-review-cyan/30 text-review-cyan hover:bg-review-cyan/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/re_view.official?igsh=MW04emczang1ZDQxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-review-cyan/30 text-review-cyan hover:bg-review-cyan/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="http://linkedin.com/company/re-viewrv25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-review-cyan/30 text-review-cyan hover:bg-review-cyan/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://x.com/review_rvoffl?t=Oa80sXJUn9hlZVDUD1rs-w&s=08" 
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
            <h4 className="text-white font-semibold mb-4">Check Out </h4>
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
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/webpages/about.html" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-review-cyan transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/webpages/contact.html" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-review-cyan transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/webpages/faq.html" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-review-cyan transition-colors">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/webpages/policy.html" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-review-cyan transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/webpages/service.html" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-review-cyan transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Re-View. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">
            See Beyond Possibilities....
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Re-Games", path: "/games" },
    { name: "View-Studios", path: "/studios" },
    { name: "N-8 Labs", path: "/labs" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo size="md" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-base ${isActive(link.path) ? "nav-link-active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Link
              to="/login"
              className="btn-primary"
            >
              Login / Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white hover:text-review-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism animate-fade-in border-t border-review-cyan/20">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-review-cyan bg-review-cyan/10"
                    : "text-white hover:text-review-cyan hover:bg-review-cyan/5"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="btn-primary mt-4 text-center"
            >
              Login / Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

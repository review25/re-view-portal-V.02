
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import Logo from "../ui/Logo";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, userData, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);

  const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Re-Games", path: "/games", protected: true },
  { name: "View-Studios", path: "/studios", protected: true },
];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsUserMenuOpen(false);
  };

  // Format user data for display
  const formatUserInfo = () => {
    if (!userData) return null;
    
    return (
      <div className="px-4 py-3">
        {userData.name && (
          <p className="text-sm font-medium text-review-cyan mb-1">{userData.name}</p>
        )}
        {userData.email && (
          <p className="text-xs text-white/70 truncate mb-1">{userData.email}</p>
        )}
        {userData.phone && (
          <p className="text-xs text-white/70 truncate">{userData.phone}</p>
        )}
        {userData.isEmployee && (
          <p className="text-xs text-amber-400 font-medium mt-1">Employee Account</p>
        )}
      </div>
    );
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
                to={link.protected && !isLoggedIn ? "/login" : link.path}
                className={`nav-link text-review-cyan text-base font-medium ${isActive(link.path) ? "nav-link-active" : ""}`}
                onClick={(e) => {
                  if (link.protected && !isLoggedIn) {
                    e.preventDefault();
                    navigate("/login");
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  className="flex items-center space-x-2 bg-review-cyan/10 hover:bg-review-cyan/20 text-review-cyan rounded-full py-1 px-3 transition-colors"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <User size={18} />
                  <span>{userData?.name || "User"}</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 glass-morphism rounded-md shadow-lg py-2 z-50">
                    <div className="border-b border-review-cyan/20 pb-2 mb-2">
                      {formatUserInfo()}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-review-cyan/10 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="btn-primary"
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-review-cyan hover:brightness-125 transition-colors"
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
                to={link.protected && !isLoggedIn ? "/login" : link.path}
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-review-cyan bg-review-cyan/10"
                    : "text-review-cyan hover:text-review-cyan hover:bg-review-cyan/5"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={(e) => {
                  if (link.protected && !isLoggedIn) {
                    e.preventDefault();
                    navigate("/login");
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
            
            {isLoggedIn ? (
              <div className="space-y-2 border-t border-review-cyan/20 pt-4 mt-2">
                {formatUserInfo()}
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-lg font-medium py-2 px-4 rounded-md text-review-cyan hover:bg-review-cyan/5 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn-primary mt-4 text-center"
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

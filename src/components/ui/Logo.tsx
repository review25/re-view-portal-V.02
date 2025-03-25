
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  withText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", withText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 group ${className}`}
      aria-label="Re-View Home"
    >
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden`}>
        <div className="absolute inset-0 bg-review-cyan/20 rounded-full animate-pulse-glow"></div>
        <img
          src="/lovable-uploads/e469f6d3-da2d-43a5-ab25-f72c91ca5fe3.png"
          alt="Re-View Logo"
          className={`${sizeClasses[size]} object-contain rounded-full neon-glow transition-all duration-500 group-hover:animate-pulse-glow`}
        />
      </div>
      
      {withText && (
        <div className="font-bold tracking-wider text-white flex items-center">
          <span className="text-review-cyan neon-text transition-all duration-300 group-hover:brightness-125">Re</span>
          <span className="text-white">-View</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;

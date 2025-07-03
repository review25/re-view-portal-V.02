
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-background opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-review-black/95"></div>
      
      {/* Large Eye Graphic - this stays as the revolving logo background */}
      <div className="absolute right-[-15%] top-[15%] md:right-[-5%] opacity-30 pointer-events-none">
        <div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px]">
          <img 
            src="/lovable-uploads/e469f6d3-da2d-43a5-ab25-f72c91ca5fe3.png" 
            alt="Re-View Eye" 
            className="w-full h-full object-contain animate-rotate-slow opacity-30 rounded-full neon-glow"
          />
        </div>
      </div>
      
      {/* Circular Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full radial-gradient from-review-cyan/5 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div 
              className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-review-cyan bg-review-cyan/10 rounded-full mb-4">
                AI & IT Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-review-cyan neon-text">Re-View</span>{" "}
                
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white text-[50px]">See Beyond Possibilities...</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-lg">
              Applications that innovate, Games that captivate, and cutting-edge AI 
                solutions that transform how we interact with technology.
              </p>
            </div>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Link to="/games" className="btn-primary flex items-center justify-center gap-2">
                Explore Games
                <ChevronRight size={18} />
              </Link>
              <Link to="/studios" className="btn-secondary flex items-center justify-center gap-2">
                View Applications
                <ChevronRight size={18} />
              </Link>
            </div>
            
            <div 
              className={`flex items-center gap-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">IT</div>
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">AI</div>
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">IOT</div>
              </div>
              <p className="text-sm text-white/70">
                Advancing technology through<br />Artificial Intelligence & IOT
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center relative h-full">
            {/* Display the round logo with glow effect */}
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-review-cyan/20 rounded-full animate-pulse-glow"></div>
              <div className="w-full h-full p-4">
                <img
                  src="/lovable-uploads/e469f6d3-da2d-43a5-ab25-f72c91ca5fe3.png"
                  alt="Re-View Logo"
                  className="w-full h-full object-contain rounded-full neon-glow"
                />
              </div>
              <div className="absolute inset-0 bg-transparent rounded-full shadow-neon-strong animate-pulse-glow"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-88 h-88 border-2 border-review-cyan/40 rounded-full animate-pulse-glow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-review-cyan/30 rounded-full"></div>
            
            {/* Binary code floating effect */}
            
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;


import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
            className="w-full h-full object-contain animate-rotate-slow opacity-30 rounded-full"
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
                AI, ML & Cybersecurity Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Re-View</span>{" "}
                <span className="text-white">Your Digital Experience</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-lg">
                Games that captivate, applications that innovate, and cutting-edge AI 
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
              </Link>
            </div>
            
            <div 
              className={`flex items-center gap-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">AI</div>
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">ML</div>
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">CS</div>
              </div>
              <p className="text-sm text-white/70">
                Advancing technology through<br />Artificial Intelligence & Cybersecurity
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center relative h-full">
            {/* Instead of the image, we'll just have decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-review-cyan/30 rounded-full animate-pulse-glow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-review-cyan/40 rounded-full"></div>
            
            {/* Binary code floating effect */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute top-0 left-1/4 text-review-cyan animate-float" style={{ animationDelay: '0.5s' }}>01001</div>
              <div className="absolute top-1/4 right-1/4 text-review-cyan animate-float" style={{ animationDelay: '1.2s' }}>10110</div>
              <div className="absolute bottom-1/4 left-1/3 text-review-cyan animate-float" style={{ animationDelay: '0.8s' }}>01101</div>
              <div className="absolute bottom-1/3 right-1/3 text-review-cyan animate-float" style={{ animationDelay: '1.5s' }}>10010</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div 
          className={`w-6 h-10 rounded-full border-2 border-review-cyan/50 flex items-start justify-center p-1 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-1 h-2 bg-review-cyan rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

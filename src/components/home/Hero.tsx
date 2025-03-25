
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
      
      {/* Large Eye Graphic */}
      <div className="absolute right-[-15%] top-[15%] md:right-[-5%] opacity-30 pointer-events-none">
        <div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px]">
          <img 
            src="/lovable-uploads/e469f6d3-da2d-43a5-ab25-f72c91ca5fe3.png" 
            alt="Re-View Eye" 
            className="w-full h-full object-contain animate-rotate-slow opacity-30"
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
                Innovative Software Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Re-View</span>{" "}
                <span className="text-white">Your Digital Experience</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-lg">
                Games that captivate, applications that innovate, and educational technology 
                that inspires. Experience the future with Re-View.
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
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">AR</div>
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">VR</div>
                <div className="w-10 h-10 rounded-full bg-review-gray border-2 border-review-cyan flex items-center justify-center text-xs font-bold text-review-cyan">3D</div>
              </div>
              <p className="text-sm text-white/70">
                Cutting-edge technologies<br />for immersive experiences
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div 
              className={`glass-card rounded-2xl overflow-hidden aspect-square max-w-md mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <img 
                src="/lovable-uploads/e469f6d3-da2d-43a5-ab25-f72c91ca5fe3.png" 
                alt="Re-View Technology" 
                className="w-full h-full object-cover filter brightness-110 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-review-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Visionary Technology</h3>
                <p className="text-white/70 text-sm mt-2">
                  Redefining how we interact with digital content
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-review-cyan/20 rounded-full"></div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 border border-review-cyan/30 rounded-full"></div>
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


import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Lightbulb, Cpu, FlaskConical } from "lucide-react";
import AnimatedCard from "../components/shared/AnimatedCard";

const Labs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "N-8 Labs | Educational Project Kits";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-review-black">
      {/* Lab animation elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Lightbulb animation */}
        <div className="absolute top-1/4 left-20 opacity-5 animate-pulse-glow" style={{ animationDuration: "4s" }}>
          <Lightbulb size={120} />
        </div>
        
        {/* Flask animation */}
        <div className="absolute bottom-1/4 right-20 opacity-5 animate-float" style={{ animationDuration: "10s" }}>
          <FlaskConical size={100} />
        </div>
        
        {/* Chip animation */}
        <div className="absolute top-2/3 left-1/3 opacity-5 animate-float" style={{ animationDuration: "15s", animationDelay: "2s" }}>
          <Cpu size={80} />
        </div>
        
        {/* Chemistry pattern */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="opacity-5">
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" fill="none" stroke="rgba(10, 255, 255, 0.2)" strokeWidth="0.5"></polygon>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons)"></rect>
          </svg>
        </div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <section className="section">
          <div className="container mx-auto text-center">
            <AnimatedCard>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">N-8 Labs</span>
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto">
                Discover our innovative ECE/EEE project kits for B.Tech students, featuring AI-powered educational tools and machine learning interfaces. The complete N-8 Labs catalog is coming soon with detailed project information.
              </p>
            </AnimatedCard>
            
            {/* Placeholder for kit grid - will be properly implemented later */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <AnimatedCard key={item} delay={item * 150} className="glass-card rounded-xl p-6 h-64 flex flex-col justify-center items-center">
                  <FlaskConical className="w-12 h-12 text-review-cyan mb-4" />
                  <h3 className="text-white font-semibold text-xl">Coming Soon</h3>
                  <p className="text-white/60 mt-2">Educational kits are in development</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Labs;

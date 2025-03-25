
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Laptop, Smartphone, Code } from "lucide-react";
import AnimatedCard from "../components/shared/AnimatedCard";

const Studios = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "View-Studios | Professional Web Applications";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-review-black">
      {/* Tech animation elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Laptop animation */}
        <div className="absolute top-1/3 left-10 opacity-5 animate-float" style={{ animationDuration: "20s" }}>
          <Laptop size={150} />
        </div>
        
        {/* Phone animation */}
        <div className="absolute bottom-1/3 right-10 opacity-5 animate-float" style={{ animationDuration: "15s", animationDelay: "3s" }}>
          <Smartphone size={100} />
        </div>
        
        {/* Code symbols */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Code size={200} />
        </div>
        
        {/* Circuit pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: "linear-gradient(rgba(10, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 255, 255, 0.03) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }}></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <section className="section">
          <div className="container mx-auto text-center">
            <AnimatedCard>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">View-Studios</span>
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto">
                Explore our professionally designed web applications and websites powered by AI, ML, and secure Cybersecurity infrastructure. The complete View-Studios page is coming soon with our full portfolio.
              </p>
            </AnimatedCard>
            
            {/* Placeholder for project grid - will be properly implemented later */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <AnimatedCard key={item} delay={item * 150} className="glass-card rounded-xl p-6 h-64 flex flex-col justify-center items-center">
                  <Code className="w-12 h-12 text-review-cyan mb-4" />
                  <h3 className="text-white font-semibold text-xl">Coming Soon</h3>
                  <p className="text-white/60 mt-2">Innovative AI applications in development</p>
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

export default Studios;

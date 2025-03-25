
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Gamepad2, GameController } from "lucide-react";
import AnimatedCard from "../components/shared/AnimatedCard";

const Games = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Re-Games | Mobile & Web Gaming Experiences";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-review-black">
      {/* Gaming animation elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Controller animation */}
        <div className="absolute top-1/4 left-20 opacity-5 animate-float" style={{ animationDuration: "15s" }}>
          <Gamepad2 size={120} />
        </div>
        
        {/* Console animation */}
        <div className="absolute bottom-1/4 right-20 opacity-5 animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}>
          <GameController size={100} />
        </div>
        
        {/* Gaming pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#0AFFFF_1px,transparent_1px)] opacity-5" style={{ backgroundSize: "30px 30px" }}></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <section className="section">
          <div className="container mx-auto text-center">
            <AnimatedCard>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Re-Games</span>
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto">
                Discover our collection of immersive gaming experiences powered by cutting-edge AI technology. The full Re-Games page is coming soon with exciting gaming content.
              </p>
            </AnimatedCard>
            
            {/* Placeholder for game grid - will be properly implemented later */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <AnimatedCard key={item} delay={item * 150} className="glass-card rounded-xl p-6 h-64 flex flex-col justify-center items-center">
                  <Gamepad2 className="w-12 h-12 text-review-cyan mb-4" />
                  <h3 className="text-white font-semibold text-xl">Coming Soon</h3>
                  <p className="text-white/60 mt-2">Exciting games are on the way</p>
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

export default Games;


import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Gamepad2, Joystick } from "lucide-react";

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
          <Joystick size={100} />
        </div>
        
        {/* Gaming pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#0AFFFF_1px,transparent_1px)] opacity-5" style={{ backgroundSize: "30px 30px" }}></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <section className="section">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Re-Games</span>
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our collection of immersive gaming experiences powered by cutting-edge AI technology.
              </p>
            </div>
            
            {/* Game list in HTML structure */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-review-cyan mb-6">Featured Games</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Game 1 */}
                <div className="glass-card rounded-xl p-6 flex flex-col">
                  <div className="mb-4 text-review-cyan">
                    <Gamepad2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">Game Name 1</h3>
                  <p className="text-white/60 mb-4">Game description goes here. Replace this text with your game information.</p>
                  <div className="mt-auto">
                    <a href="#" className="btn-primary inline-block">Play Now</a>
                  </div>
                </div>
                
                {/* Game 2 */}
                <div className="glass-card rounded-xl p-6 flex flex-col">
                  <div className="mb-4 text-review-cyan">
                    <Gamepad2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">Game Name 2</h3>
                  <p className="text-white/60 mb-4">Game description goes here. Replace this text with your game information.</p>
                  <div className="mt-auto">
                    <a href="#" className="btn-primary inline-block">Play Now</a>
                  </div>
                </div>
                
                {/* Game 3 */}
                <div className="glass-card rounded-xl p-6 flex flex-col">
                  <div className="mb-4 text-review-cyan">
                    <Gamepad2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">Game Name 3</h3>
                  <p className="text-white/60 mb-4">Game description goes here. Replace this text with your game information.</p>
                  <div className="mt-auto">
                    <a href="#" className="btn-primary inline-block">Play Now</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Upcoming Games Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-review-cyan mb-6">Upcoming Releases</h2>
              
              <div className="glass-card rounded-xl p-8">
                <div className="mb-4 text-center">
                  <p className="text-white/70 mb-6">
                    We're constantly developing new gaming experiences. Check back soon for our upcoming releases!
                  </p>
                  
                  <h3 className="text-white text-lg font-semibold mb-2">Want to be notified about new games?</h3>
                  
                  {/* Simple email signup form */}
                  <div className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-review-black/50 border border-review-cyan/30 rounded px-4 py-2 text-white flex-grow"
                      />
                      <button className="btn-primary">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
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

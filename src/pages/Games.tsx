
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Gamepad2, Joystick, Timer } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Games = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Re-Games | Mobile & Web Gaming Experiences";
  }, []);

  const handlePlayNow = (gameName: string) => {
    toast.success(`Loading ${gameName}... Get ready to play!`);
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    
    if (emailInput && emailInput.value) {
      toast.success(`Thanks for subscribing! We'll notify you about our upcoming games.`);
      emailInput.value = '';
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Gaming animation elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Controller animation */}
        <div className="absolute top-1/4 left-20 opacity-10 animate-float" style={{ animationDuration: "15s" }}>
          <Gamepad2 size={120} className="text-blue-500" />
        </div>
        
        {/* Console animation */}
        <div className="absolute bottom-1/4 right-20 opacity-10 animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}>
          <Joystick size={100} className="text-blue-500" />
        </div>
        
        {/* Timer animation */}
        <div className="absolute top-1/3 right-1/4 opacity-10 animate-float" style={{ animationDuration: "12s", animationDelay: "1s" }}>
          <Timer size={80} className="text-blue-500" />
        </div>
        
        {/* Gaming pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] opacity-5" style={{ backgroundSize: "30px 30px" }}></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <section className="section">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
                Re-Games
              </h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our collection of immersive gaming experiences powered by cutting-edge AI technology.
              </p>
            </div>
            
            {/* Game list in Cards */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Featured Games</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Game 1 */}
                <Card className="border-blue-100 shadow-md bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 text-blue-500">
                      <Gamepad2 className="w-12 h-12" />
                    </div>
                    <CardTitle className="text-blue-700">Cyber Racers</CardTitle>
                    <CardDescription className="text-gray-600">
                      A high-speed racing game set in a futuristic cyberpunk world. Customize your vehicle and compete against AI or human players.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-2">
                      <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Racing</span>
                      <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Multiplayer</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => handlePlayNow("Cyber Racers")}
                    >
                      Play Now
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Game 2 */}
                <Card className="border-blue-100 shadow-md bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 text-blue-500">
                      <Gamepad2 className="w-12 h-12" />
                    </div>
                    <CardTitle className="text-blue-700">Cosmic Defenders</CardTitle>
                    <CardDescription className="text-gray-600">
                      An epic space adventure game where you defend your galaxy against alien invaders. Upgrade your weapons and unlock new abilities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-2">
                      <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Action</span>
                      <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Strategy</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => handlePlayNow("Cosmic Defenders")}
                    >
                      Play Now
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Game 3 */}
                <Card className="border-blue-100 shadow-md bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 text-blue-500">
                      <Gamepad2 className="w-12 h-12" />
                    </div>
                    <CardTitle className="text-blue-700">Puzzle Master</CardTitle>
                    <CardDescription className="text-gray-600">
                      Challenge your brain with hundreds of unique puzzles. From simple to mind-bending, there's something for everyone.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-2">
                      <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Puzzle</span>
                      <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Casual</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => handlePlayNow("Puzzle Master")}
                    >
                      Play Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            {/* Upcoming Games Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Upcoming Releases</h2>
              
              <Card className="border-blue-100 shadow-md bg-white p-6">
                <div className="text-center">
                  <p className="text-gray-700 mb-6">
                    We're constantly developing new gaming experiences. Check back soon for our upcoming releases!
                  </p>
                  
                  <h3 className="text-blue-700 text-lg font-semibold mb-2">Want to be notified about new games?</h3>
                  
                  {/* Email signup form */}
                  <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Your email address" 
                        className="bg-white border border-blue-200 rounded px-4 py-2 text-gray-700 flex-grow"
                      />
                      <Button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
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

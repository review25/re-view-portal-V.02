
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";

const Labs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "N-8 Labs | Educational Project Kits";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-review-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">N-8 Labs</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover our innovative ECE/EEE project kits for B.Tech students. The complete N-8 Labs catalog is coming soon with detailed project information.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Labs;

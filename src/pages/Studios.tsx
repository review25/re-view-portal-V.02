
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";

const Studios = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "View-Studios | Professional Web Applications";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-review-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">View-Studios</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore our professionally designed web applications and websites. The complete View-Studios page is coming soon with our full portfolio.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Studios;

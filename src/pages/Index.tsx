
import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import AboutSection from "../components/home/AboutSection";
import ChatBot from "../components/home/ChatBot";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Re-View | Innovative Digital Experiences";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-review-darkblue">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AboutSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;

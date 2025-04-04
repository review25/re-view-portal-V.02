
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Laptop, Smartphone, Code } from "lucide-react";

const Studios = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "View-Studios | Professional Web Applications";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Tech animation elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Laptop animation */}
        <div className="absolute top-1/3 left-10 opacity-5 animate-float" style={{ animationDuration: "20s" }}>
          <Laptop size={150} className="text-blue-500" />
        </div>
        
        {/* Phone animation */}
        <div className="absolute bottom-1/3 right-10 opacity-5 animate-float" style={{ animationDuration: "15s", animationDelay: "3s" }}>
          <Smartphone size={100} className="text-blue-500" />
        </div>
        
        {/* Code symbols */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Code size={200} className="text-blue-500" />
        </div>
        
        {/* Circuit pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: "linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }}></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <section className="section">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
                View-Studios
              </h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Professionally designed web applications and websites powered by AI, ML, and secure Cybersecurity infrastructure.
              </p>
            </div>
            
            {/* Services in HTML structure */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-blue-700 text-xl font-semibold mb-3">Web Development</h3>
                  <p className="text-gray-600">Custom websites and web applications built with the latest technologies.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-blue-700 text-xl font-semibold mb-3">Mobile Apps</h3>
                  <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-blue-700 text-xl font-semibold mb-3">AI Integration</h3>
                  <p className="text-gray-600">Adding artificial intelligence capabilities to your applications.</p>
                </div>
              </div>
            </div>
            
            {/* Projects in HTML structure */}
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Featured Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <Code className="w-16 h-16 text-blue-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-blue-700 font-semibold text-xl mb-2">Project Name 1</h3>
                    <p className="text-gray-600 mb-4">Project description goes here. Replace this text with your project details.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">AI</span>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Node.js</span>
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">View Project →</a>
                  </div>
                </div>
                
                {/* Project 2 */}
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <Code className="w-16 h-16 text-blue-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-blue-700 font-semibold text-xl mb-2">Project Name 2</h3>
                    <p className="text-gray-600 mb-4">Project description goes here. Replace this text with your project details.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">AI</span>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Machine Learning</span>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Python</span>
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">View Project →</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="mt-16 glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Contact Us</h2>
              
              <form className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full bg-white border border-blue-200 rounded px-4 py-2 text-gray-700" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full bg-white border border-blue-200 rounded px-4 py-2 text-gray-700" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full bg-white border border-blue-200 rounded px-4 py-2 text-gray-700" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-blue-200 rounded px-4 py-2 text-gray-700"></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary">Send Message</button>
                </div>
              </form>
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


import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Lightbulb, Cpu, FlaskConical } from "lucide-react";

const Labs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "N-8 Labs | Educational Project Kits";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-review-darkblue">
      {/* Lab animation elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Lightbulb animation */}
        <div className="absolute top-1/4 left-20 opacity-10 animate-pulse-glow" style={{ animationDuration: "4s" }}>
          <Lightbulb size={120} className="text-review-cyan" />
        </div>
        
        {/* Flask animation */}
        <div className="absolute bottom-1/4 right-20 opacity-10 animate-float" style={{ animationDuration: "10s" }}>
          <FlaskConical size={100} className="text-review-cyan" />
        </div>
        
        {/* Chip animation */}
        <div className="absolute top-2/3 left-1/3 opacity-10 animate-float" style={{ animationDuration: "15s", animationDelay: "2s" }}>
          <Cpu size={80} className="text-review-cyan" />
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
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-review-cyan">
                N-8 Labs
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Innovative ECE/EEE project kits for B.Tech students, featuring AI-powered educational tools and machine learning interfaces.
              </p>
            </div>
            
            {/* Project Categories */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-review-cyan mb-6">Project Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto bg-review-cyan/10 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="w-8 h-8 text-review-cyan" />
                  </div>
                  <h3 className="text-review-cyan text-xl font-semibold mb-2">Mini Projects</h3>
                  <p className="text-gray-300">Smaller-scale projects perfect for beginners and short timeframes.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto bg-review-cyan/10 rounded-full flex items-center justify-center mb-4">
                    <FlaskConical className="w-8 h-8 text-review-cyan" />
                  </div>
                  <h3 className="text-review-cyan text-xl font-semibold mb-2">Major Projects</h3>
                  <p className="text-gray-300">Comprehensive projects ideal for final year students and deeper learning.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto bg-review-cyan/10 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-8 h-8 text-review-cyan" />
                  </div>
                  <h3 className="text-review-cyan text-xl font-semibold mb-2">Research Projects</h3>
                  <p className="text-gray-300">Cutting-edge research-oriented projects with publication potential.</p>
                </div>
              </div>
            </div>
            
            {/* Featured Projects */}
            <div>
              <h2 className="text-2xl font-bold text-review-cyan mb-6">Featured Project Kits</h2>
              
              <div className="space-y-6">
                {/* Project 1 */}
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex items-center justify-center p-4 bg-review-cyan/5 rounded-lg">
                      <FlaskConical className="w-16 h-16 text-review-cyan" />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-review-cyan font-semibold text-xl mb-2">IoT-Based Smart Home Automation System</h3>
                      <p className="text-gray-300 mb-4">
                        A comprehensive kit for building a smart home system using IoT technologies, with motion sensors, temperature control, and smartphone app integration.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">IoT</span>
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">Arduino</span>
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">App Development</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-review-cyan font-semibold">₹5,999</span>
                        <a href="#" className="btn-primary">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project 2 */}
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex items-center justify-center p-4 bg-review-cyan/5 rounded-lg">
                      <Cpu className="w-16 h-16 text-review-cyan" />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-review-cyan font-semibold text-xl mb-2">AI-Powered Facial Recognition System</h3>
                      <p className="text-gray-300 mb-4">
                        Build a facial recognition system using machine learning algorithms, with complete hardware and software components.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">AI</span>
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">Machine Learning</span>
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">Computer Vision</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-review-cyan font-semibold">₹7,499</span>
                        <a href="#" className="btn-primary">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project 3 */}
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex items-center justify-center p-4 bg-review-cyan/5 rounded-lg">
                      <Lightbulb className="w-16 h-16 text-review-cyan" />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-review-cyan font-semibold text-xl mb-2">Renewable Energy Monitoring System</h3>
                      <p className="text-gray-300 mb-4">
                        A solar and wind energy monitoring system with real-time data analytics and energy efficiency calculations.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">Renewable Energy</span>
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">Data Analytics</span>
                        <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">Sensors</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-review-cyan font-semibold">₹6,299</span>
                        <a href="#" className="btn-primary">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Form */}
            <div className="mt-16 glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-review-cyan mb-6 text-center">Request Project Kit Information</h2>
              
              <form className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-review-black/50 border border-review-cyan/20 rounded px-4 py-2 text-gray-200" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input type="email" className="w-full bg-review-black/50 border border-review-cyan/20 rounded px-4 py-2 text-gray-200" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2">College/University</label>
                    <input type="text" className="w-full bg-review-black/50 border border-review-cyan/20 rounded px-4 py-2 text-gray-200" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Project Type</label>
                    <select className="w-full bg-review-black/50 border border-review-cyan/20 rounded px-4 py-2 text-gray-200">
                      <option value="">Select a project type</option>
                      <option value="mini">Mini Project</option>
                      <option value="major">Major Project</option>
                      <option value="research">Research Project</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Project Area of Interest</label>
                  <input type="text" className="w-full bg-review-black/50 border border-review-cyan/20 rounded px-4 py-2 text-gray-200" placeholder="e.g., IoT, Machine Learning, Robotics" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Additional Requirements</label>
                  <textarea rows={4} className="w-full bg-review-black/50 border border-review-cyan/20 rounded px-4 py-2 text-gray-200"></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary">Submit Request</button>
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

export default Labs;

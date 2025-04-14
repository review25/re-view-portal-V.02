
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Lightbulb, Cpu, FlaskConical, Satellite, Cloud, Database, Smartphone, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import AnimatedCard from "@/components/shared/AnimatedCard";

const Labs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;
  const totalPages = 3;

  useEffect(() => {
    // Scroll to top when component mounts or page changes
    window.scrollTo(0, 0);
    document.title = "N-8 Labs | Educational Project Kits";
  }, [currentPage]);

  // All projects data
  const allProjects = [
    // Page 1
    {
      id: 1,
      title: "IoT-Based Smart Home Automation System",
      description: "A comprehensive kit for building a smart home system using IoT technologies, with motion sensors, temperature control, and smartphone app integration.",
      tags: ["IoT", "Arduino", "App Development"],
      price: "₹5,999",
      icon: <FlaskConical className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 2,
      title: "AI-Powered Facial Recognition System",
      description: "Build a facial recognition system using machine learning algorithms, with complete hardware and software components.",
      tags: ["AI", "Machine Learning", "Computer Vision"],
      price: "₹7,499",
      icon: <Cpu className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 3,
      title: "Renewable Energy Monitoring System",
      description: "A solar and wind energy monitoring system with real-time data analytics and energy efficiency calculations.",
      tags: ["Renewable Energy", "Data Analytics", "Sensors"],
      price: "₹6,299",
      icon: <Lightbulb className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 4,
      title: "Industrial Automation Control System",
      description: "A scalable PLC-based industrial automation system with touch interface and remote monitoring capabilities.",
      tags: ["PLC", "Industrial", "Automation"],
      price: "₹8,999",
      icon: <Database className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 5,
      title: "Wireless Sensor Network Kit",
      description: "Design and implement wireless sensor networks with multiple nodes for environmental monitoring applications.",
      tags: ["Wireless", "Sensors", "Networks"],
      price: "₹4,799",
      icon: <Radio className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 6,
      title: "Embedded Systems Development Platform",
      description: "Complete development platform for learning and building embedded systems with ARM microcontrollers.",
      tags: ["Embedded", "ARM", "Microcontroller"],
      price: "₹6,499",
      icon: <Cpu className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 7,
      title: "Smart Agriculture Monitoring System",
      description: "IoT-based solution for monitoring soil moisture, temperature, and automating irrigation in agricultural settings.",
      tags: ["Agriculture", "IoT", "Automation"],
      price: "₹5,799",
      icon: <Cloud className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 8,
      title: "Digital Signal Processing Kit",
      description: "Hardware and software tools for learning and implementing digital signal processing applications.",
      tags: ["DSP", "Signal Processing", "FPGA"],
      price: "₹7,299",
      icon: <Satellite className="w-16 h-16 text-review-cyan" />
    },
    // Page 2
    {
      id: 9,
      title: "Robotics Learning Platform",
      description: "Educational robotics kit with programmable arm, sensors, and comprehensive learning materials.",
      tags: ["Robotics", "Programming", "Education"],
      price: "₹9,299",
      icon: <Cpu className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 10,
      title: "Smart Energy Meter",
      description: "IoT-enabled energy monitoring system with load control and consumption analytics dashboard.",
      tags: ["Energy", "IoT", "Analytics"],
      price: "₹4,999",
      icon: <Lightbulb className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 11,
      title: "Autonomous Drone Development Kit",
      description: "Build and program autonomous drones with computer vision capabilities for various applications.",
      tags: ["Drone", "Autonomous", "Vision"],
      price: "₹12,999",
      icon: <FlaskConical className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 12,
      title: "Biomedical Signal Acquisition System",
      description: "Hardware setup for capturing and analyzing ECG, EMG, and other biomedical signals.",
      tags: ["Biomedical", "Signal Processing", "Healthcare"],
      price: "₹8,499",
      icon: <Radio className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 13,
      title: "Smart Traffic Management System",
      description: "Model traffic system with cameras, sensors, and AI-based traffic flow optimization algorithms.",
      tags: ["Traffic", "AI", "Urban Planning"],
      price: "₹7,999",
      icon: <Database className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 14,
      title: "RFID-Based Access Control System",
      description: "Complete security access control solution using RFID technology with user management interface.",
      tags: ["RFID", "Security", "Access Control"],
      price: "₹5,499",
      icon: <Cpu className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 15,
      title: "Electric Vehicle Charging Station",
      description: "Model EV charging station with monitoring, payment system integration, and load management.",
      tags: ["EV", "Charging", "Energy"],
      price: "₹9,999",
      icon: <Lightbulb className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 16,
      title: "Water Quality Monitoring System",
      description: "IoT-based water quality monitoring system with multiple sensors and remote data visualization.",
      tags: ["Water", "IoT", "Environmental"],
      price: "₹6,799",
      icon: <Cloud className="w-16 h-16 text-review-cyan" />
    },
    // Page 3
    {
      id: 17,
      title: "Voice-Controlled Home Assistant",
      description: "Build your own voice-controlled assistant with customizable commands and home automation integration.",
      tags: ["Voice", "AI", "Automation"],
      price: "₹7,499",
      icon: <Smartphone className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 18,
      title: "CNC Machine Learning Platform",
      description: "Educational CNC system with programming interface and material processing capabilities.",
      tags: ["CNC", "Manufacturing", "Programming"],
      price: "₹14,999",
      icon: <Database className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 19,
      title: "Blockchain Development Kit",
      description: "Hardware and software tools for learning and implementing blockchain-based applications.",
      tags: ["Blockchain", "Crypto", "Security"],
      price: "₹8,299",
      icon: <FlaskConical className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 20,
      title: "Advanced Weather Station",
      description: "Professional-grade weather monitoring system with multiple sensors and predictive analytics.",
      tags: ["Weather", "Sensors", "Analytics"],
      price: "₹6,999",
      icon: <Cloud className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 21,
      title: "Smart Greenhouse Controller",
      description: "Automated greenhouse system with climate control, irrigation, and remote monitoring capabilities.",
      tags: ["Agriculture", "Automation", "Climate"],
      price: "₹8,799",
      icon: <Lightbulb className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 22,
      title: "AR/VR Development Platform",
      description: "Complete toolkit for developing augmented and virtual reality applications for education and training.",
      tags: ["AR", "VR", "Development"],
      price: "₹10,499",
      icon: <Cpu className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 23,
      title: "Industrial IoT Gateway",
      description: "Edge computing platform for connecting industrial equipment to cloud platforms with data processing capabilities.",
      tags: ["IIoT", "Edge Computing", "Industry 4.0"],
      price: "₹9,299",
      icon: <Radio className="w-16 h-16 text-review-cyan" />
    },
    {
      id: 24,
      title: "Quantum Computing Simulator",
      description: "Educational platform for learning quantum computing principles with visual programming interface.",
      tags: ["Quantum", "Computing", "Education"],
      price: "₹11,999",
      icon: <Database className="w-16 h-16 text-review-cyan" />
    }
  ];

  // Get current page projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {currentProjects.map((project, index) => (
                  <AnimatedCard key={project.id} delay={index * 100} className="h-full">
                    <div className="glass-card rounded-xl p-6 h-full flex flex-col">
                      <div className="flex items-center justify-center p-4 bg-review-cyan/5 rounded-lg mb-4">
                        {project.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-review-cyan font-semibold text-xl mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-review-cyan font-semibold">{project.price}</span>
                        <Button className="btn-primary">View Details</Button>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 mb-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'} text-review-cyan border border-review-cyan/30`}
                      />
                    </PaginationItem>
                    {[1, 2, 3].map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          isActive={currentPage === page}
                          onClick={() => handlePageChange(page)}
                          className={`cursor-pointer ${
                            currentPage === page
                              ? 'bg-review-cyan text-review-black border border-review-cyan'
                              : 'text-review-cyan border border-review-cyan/30'
                          }`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'} text-review-cyan border border-review-cyan/30`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              
              {/* Upcoming Projects Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-review-cyan mb-6">Upcoming Project Kits</h2>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="text-center">
                    <p className="text-gray-300 mb-6">
                      We're constantly developing new educational project kits. Check back soon for our upcoming releases!
                    </p>
                    
                    <h3 className="text-review-cyan text-lg font-semibold mb-2">Want to be notified about new project kits?</h3>
                    
                    {/* Email signup form */}
                    <form className="max-w-md mx-auto">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input 
                          type="email" 
                          name="email"
                          placeholder="Your email address" 
                          className="bg-review-black/50 border border-review-cyan/20 rounded px-4 py-2 text-gray-200 flex-grow"
                        />
                        <Button 
                          type="submit"
                          className="bg-review-black hover:bg-gray-900 text-review-cyan border border-review-cyan/30"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </form>
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

export default Labs;

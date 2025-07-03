
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Laptop, Smartphone, Code, Building, BarChart, FileCheck, Landmark, Shield, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCard from "@/components/shared/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "sonner";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Studios = () => {
  const [isJagruthiOpen, setIsJagruthiOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;
  const totalPages = 3;

  // Coming soon projects data
  const allProjects = [
    // Page 1
    { 
      id: 1, 
      title: "JAGRUTHI (PROTOTYPE)", 
      isLive: true,
      description: "Smart Citizen Issue Management System for reporting, tracking, and resolving civic issues.",
      detailedDescription: "JAGRUTHI is a state-of-the-art web-based platform developed to streamline the reporting, tracking, and resolution of civic issues. Designed with user-centric principles, the system provides citizens with an intuitive interface to report problems in their community. The platform delivers real-time updates on the status of reported issues, fostering transparency and enhancing communication between citizens and authorities.",
      tags: ["PUBLIC", "AI", "PROTOTYPE"],
      icon: <img 
              src="/lovable-uploads/5c17870b-8597-4392-b50b-9899f699e190.png"
              alt="JAGRUTHI Logo"
              className="h-32 object-contain"
            />,
      logoBackground: "bg-[#F2FCE2]/20",
      tagBackground: "bg-[#004d00]/20",
      tagText: "text-[#00b300]",
      buttonBackground: "bg-[#00b300]",
      buttonHover: "hover:bg-[#009900]",
      url: "https://jagruthi.reviewrv25.com"
    },
    { 
      id: 2, 
      title: "Smart City Dashboard", 
      description: "Centralized monitoring and analytics platform for urban infrastructure and services.",
      tags: ["React", "D3.js", "Node.js"],
      icon: <Building className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 3, 
      title: "EcoTrack", 
      description: "Environmental monitoring application for collecting and visualizing ecological data.",
      tags: ["React Native", "Firebase", "Maps API"],
      icon: <Shield className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 4, 
      title: "FinViz", 
      description: "Financial data visualization platform with predictive analytics capabilities.",
      tags: ["Vue.js", "TypeScript", "Express"],
      icon: <BarChart className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 5, 
      title: "DocuFlow", 
      description: "Document management system with automated workflow and approval processes.",
      tags: ["Angular", "MongoDB", "AWS"],
      icon: <FileCheck className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 6, 
      title: "HealthSync", 
      description: "Healthcare information exchange platform for medical facilities.",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      icon: <Landmark className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 7, 
      title: "GovPortal", 
      description: "Citizen services portal for government agencies with secure authentication.",
      tags: ["React", "Redux", "Java Spring"],
      icon: <Building className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 8, 
      title: "SmartHome", 
      description: "IoT platform for connected home devices with energy optimization algorithms.",
      tags: ["React", "Node.js", "MQTT"],
      icon: <Smartphone className="w-16 h-16 text-review-cyan" />
    },
    // Page 2
    { 
      id: 9, 
      title: "EducateConnect", 
      description: "Online learning platform with integrated virtual classroom and course management.",
      tags: ["React", "Socket.io", "MongoDB"],
      icon: <Laptop className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 10, 
      title: "SupplyChain Pro", 
      description: "End-to-end supply chain management system with blockchain verification.",
      tags: ["React", "Blockchain", "Node.js"],
      icon: <Building className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 11, 
      title: "HealthTracker", 
      description: "Comprehensive health monitoring and fitness tracking mobile application.",
      tags: ["Flutter", "Firebase", "Health API"],
      icon: <Smartphone className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 12, 
      title: "RecipeHub", 
      description: "Community-driven recipe sharing platform with AI-powered meal planning.",
      tags: ["React", "FastAPI", "PostgreSQL"],
      icon: <FileCheck className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 13, 
      title: "EventMaster", 
      description: "Event planning and management platform with integrated ticketing system.",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      icon: <BarChart className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 14, 
      title: "RetailAnalytics", 
      description: "Retail business analytics platform with customer behavior insights.",
      tags: ["React", "Python", "TensorFlow"],
      icon: <Landmark className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 15, 
      title: "PropertyHub", 
      description: "Real estate listing and property management platform with virtual tours.",
      tags: ["Next.js", "Three.js", "MongoDB"],
      icon: <Building className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 16, 
      title: "StockTrader Pro", 
      description: "Stock market trading platform with real-time analytics and alerts.",
      tags: ["React", "WebSockets", "Redis"],
      icon: <BarChart className="w-16 h-16 text-review-cyan" />
    },
    // Page 3
    { 
      id: 17, 
      title: "JobConnect", 
      description: "AI-powered job matching platform connecting employers with qualified candidates.",
      tags: ["React", "Node.js", "TensorFlow"],
      icon: <Landmark className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 18, 
      title: "TravelPlanner", 
      description: "All-in-one travel planning platform with itinerary building and booking.",
      tags: ["React", "GraphQL", "MongoDB"],
      icon: <Smartphone className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 19, 
      title: "MusicStudio", 
      description: "Digital music production platform with collaborative editing features.",
      tags: ["React", "Web Audio API", "Firebase"],
      icon: <FileCheck className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 20, 
      title: "LegalAssist", 
      description: "Legal document preparation and management system with AI assistance.",
      tags: ["Next.js", "NLP", "PostgreSQL"],
      icon: <Shield className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 21, 
      title: "AgriTech", 
      description: "Smart agriculture platform with crop monitoring and yield prediction.",
      tags: ["React", "IoT", "Machine Learning"],
      icon: <Building className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 22, 
      title: "FoodDelivery Plus", 
      description: "Restaurant ordering and delivery management system with driver tracking.",
      tags: ["React Native", "Node.js", "MongoDB"],
      icon: <Smartphone className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 23, 
      title: "eLearning LMS", 
      description: "Complete learning management system for educational institutions.",
      tags: ["React", "Django", "PostgreSQL"],
      icon: <Laptop className="w-16 h-16 text-review-cyan" />
    },
    { 
      id: 24, 
      title: "CryptoTracker", 
      description: "Cryptocurrency portfolio management and market analysis platform.",
      tags: ["React", "WebSockets", "Redis"],
      icon: <BarChart className="w-16 h-16 text-review-cyan" />
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

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    
    if (emailInput && emailInput.value) {
      toast.success(`Thanks for subscribing! We'll notify you about our upcoming projects.`);
      emailInput.value = '';
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "View-Studios | Professional Web Applications";
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-review-darkblue">
      {/* Tech animation elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Laptop animation */}
        <div className="absolute top-1/3 left-10 opacity-5 animate-float" style={{ animationDuration: "20s" }}>
          <Laptop size={150} className="text-review-cyan" />
        </div>
        
        {/* Phone animation */}
        <div className="absolute bottom-1/3 right-10 opacity-5 animate-float" style={{ animationDuration: "15s", animationDelay: "3s" }}>
          <Smartphone size={100} className="text-review-cyan" />
        </div>
        
        {/* Code symbols */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Code size={200} className="text-review-cyan" />
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
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-review-cyan">
                View-Studios
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Professionally designed web applications and websites powered by AI, ML, and secure Cybersecurity infrastructure.
              </p>
            </div>
            
            {/* Services in HTML structure */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-review-cyan mb-6">Our Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-review-cyan text-xl font-semibold mb-3">Web Development</h3>
                  <p className="text-gray-300">Custom websites and web applications built with the latest technologies.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-review-cyan text-xl font-semibold mb-3">Mobile Apps</h3>
                  <p className="text-gray-300">Native and cross-platform mobile applications for iOS and Android.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-review-cyan text-xl font-semibold mb-3">AI Integration</h3>
                  <p className="text-gray-300">Adding artificial intelligence capabilities to your applications.</p>
                </div>
              </div>
            </div>
            
            {/* Projects in HTML structure */}
            <div>
              <h2 className="text-2xl font-bold text-review-cyan mb-6">Featured Projects</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Projects */}
                {currentProjects.map((project, index) => (
                  <AnimatedCard key={project.id} delay={index * 100} className="h-full">
                    <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
                      <div className={`h-48 ${project.logoBackground || 'bg-review-black/30'} flex items-center justify-center`}>
                        {project.icon}
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-review-cyan font-semibold text-xl mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span 
                              key={i} 
                              className={`text-xs ${project.tagBackground || 'bg-review-cyan/10'} ${project.tagText || 'text-review-cyan'} px-2 py-1 rounded`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-auto">
                          {project.isLive ? (
                            <div className="flex items-center gap-3">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-[#00b300] hover:text-[#007d00] hover:bg-[#004d00]/10 transition-colors flex items-center gap-1 p-0"
                                onClick={() => setIsJagruthiOpen(!isJagruthiOpen)}
                              >
                                {isJagruthiOpen ? (
                                  <>
                                    Show Less <ChevronUp className="h-4 w-4" />
                                  </>
                                ) : (
                                  <>
                                    Know More <ChevronDown className="h-4 w-4" />
                                  </>
                                )}
                              </Button>
                              
                              <Button 
                                className="bg-[#00b300] hover:bg-[#009900] text-white flex items-center gap-2"
                                onClick={() => window.open("https://jagruthi.reviewrv25.com", "_blank")}
                                size="sm"
                              >
                                Visit Website <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <div className="bg-review-cyan/20 text-review-cyan py-1 px-3 rounded text-sm inline-block">
                              Coming Soon
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {project.isLive && (
                        <Collapsible open={isJagruthiOpen} className="w-full">
                          <CollapsibleContent className="p-6 pt-0 border-t border-[#004d00]/20 mt-4 animate-accordion-down">
                            <div className="text-gray-300 text-sm">
                              <p>{project.detailedDescription}</p>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      )}
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
                <h2 className="text-2xl font-bold text-review-cyan mb-6">Upcoming Projects</h2>
                
                <Card className="border-review-cyan/20 shadow-md bg-review-black/30 p-6">
                  <div className="text-center">
                    <p className="text-gray-300 mb-6">
                      We're constantly developing new web applications and solutions. Check back soon for our upcoming projects!
                    </p>
                    
                    <h3 className="text-review-cyan text-lg font-semibold mb-2">Want to be notified about new projects?</h3>
                    
                    {/* Email signup form */}
                    <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
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
                </Card>
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

export default Studios;

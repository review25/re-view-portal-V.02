
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/home/ChatBot";
import { Laptop, Smartphone, Code, Building, BarChart, FileCheck, Landmark, Shield, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCard from "@/components/shared/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Studios = () => {
  const [isJagruthiOpen, setIsJagruthiOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "View-Studios | Professional Web Applications";
  }, []);

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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* JAGRUTHI Project - New Project */}
                <AnimatedCard delay={100} className="glass-card rounded-xl overflow-hidden">
                  <div className="h-48 bg-[#F2FCE2]/20 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/5c17870b-8597-4392-b50b-9899f699e190.png"
                      alt="JAGRUTHI Logo"
                      className="h-32 object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-review-cyan font-semibold text-xl mb-2">JAGRUTHI (PROTOTYPE)</h3>
                    <p className="text-gray-300 mb-4">
                      Smart Citizen Issue Management System for reporting, tracking, and resolving civic issues with real-time updates and analytics.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-[#004d00]/20 text-[#00b300] px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-[#004d00]/20 text-[#00b300] px-2 py-1 rounded">Netlify</span>
                      <span className="text-xs bg-[#004d00]/20 text-[#00b300] px-2 py-1 rounded">Serverless</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Collapsible className="w-full">
                        <div className="flex items-center gap-3">
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-[#00b300] hover:text-[#007d00] hover:bg-[#004d00]/10 transition-colors flex items-center gap-1 p-0"
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
                          </CollapsibleTrigger>
                          
                          <Button 
                            className="bg-[#00b300] hover:bg-[#009900] text-white flex items-center gap-2"
                            onClick={() => window.open("https://jagruthi.reviewrv25.com", "_blank")}
                            size="sm"
                          >
                            Visit Website <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <CollapsibleContent className="mt-4 space-y-4 animate-accordion-down">
                          <div className="text-gray-300 text-sm">
                            <p className="mb-3">
                              JAGRUTHI is a state-of-the-art web-based platform developed to streamline the reporting, tracking, 
                              and resolution of civic issues. Designed with user-centric principles, the system provides citizens 
                              with an intuitive interface to report problems in their community.
                            </p>
                            <p className="mb-3">
                              The platform delivers real-time updates on the status of reported issues, fostering transparency 
                              and enhancing communication between citizens and authorities.
                            </p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </div>
                </AnimatedCard>
                
                {/* Project 1 */}
                <AnimatedCard delay={200} className="glass-card rounded-xl overflow-hidden">
                  <div className="h-48 bg-review-black/30 flex items-center justify-center">
                    <Code className="w-16 h-16 text-review-cyan" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-review-cyan font-semibold text-xl mb-2">Project Name 1</h3>
                    <p className="text-gray-300 mb-4">Project description goes here. Replace this text with your project details.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">AI</span>
                      <span className="text-xs bg-review-cyan/10 text-review-cyan px-2 py-1 rounded">Node.js</span>
                    </div>
                    <a href="#" className="text-review-cyan hover:text-review-cyan/80 transition-colors">View Project →</a>
                  </div>
                </AnimatedCard>
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

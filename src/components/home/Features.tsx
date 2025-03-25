
import { Gamepad2, Code2, Cpu } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Re-Games",
    description: "Immersive gaming experiences designed for various platforms including mobile, web, and downloadable APKs.",
    icon: Gamepad2,
    color: "from-purple-500 to-blue-500",
    path: "/games",
    buttonText: "Explore Games"
  },
  {
    title: "View-Studios",
    description: "Professional web applications and websites with elegant, scientifically-inspired designs and functionality.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    path: "/studios",
    buttonText: "View Applications"
  },
  {
    title: "N-8 Labs",
    description: "Educational ECE/EEE project kits for B.Tech students, including both mini and major project solutions.",
    icon: Cpu,
    color: "from-cyan-500 to-teal-500",
    path: "/labs",
    buttonText: "Discover Kits"
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-review-darkblue relative" ref={ref}>
      <div className="absolute inset-0 tech-background opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-review-cyan bg-review-cyan/10 rounded-full mb-4">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Digital <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-white/70">
            From immersive games to professional applications and educational technology, 
            we create digital experiences that inspire and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`glass-card rounded-xl p-6 transition-all duration-700 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="text-white h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 mb-6">{feature.description}</p>
              
              <Link 
                to={feature.path} 
                className="inline-flex items-center text-review-cyan hover:text-white transition-colors gap-1 font-medium"
              >
                {feature.buttonText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

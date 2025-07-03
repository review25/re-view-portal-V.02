
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section bg-review-black relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
           <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-review-cyan bg-review-cyan/10 rounded-full mb-4">
  About Us
</span>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
  Building the Future of
</h2>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
   <span className="text-gradient">AI Technology</span>
</h2>
<div className="space-y-4 text-white/70">
  <p>
    At Re-View, we don’t just develop software—we create dynamic digital experiences. As a technology-driven company, we build our own cutting-edge apps and games while also offering comprehensive IT services to businesses of all sizes.
  </p>
  <p>
    Our expertise spans across multiple industries, delivering high-quality mobile and web applications, immersive gaming experiences, and robust IT solutions that empower businesses and individuals alike. We believe in leveraging technology to solve real-world problems and enhance everyday digital interactions.
  </p>
  <p>
    With a commitment to innovation and excellence, we specialize in:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>Developing intuitive mobile and web applications that drive user engagement.</li>
    <li>Providing end-to-end IT services, from software development to system integration and support.</li>
  </ul>
  <p>
    Our mission is to push the boundaries of what’s possible, ensuring that every project we undertake is not just functional but transformative. At Re-View, the future of digital innovation is built today.
  </p>
</div>
</div>
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="glass-card rounded-xl overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-review-cyan/20 to-purple-500/20 opacity-60 mix-blend-overlay"></div>
              <div className="p-8 relative h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Our Vision</h3>
                    <p className="text-white/80"> To transform the way people interact with technology by developing innovative, intelligent, and efficient software solutions.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Our Approach</h3>
                    <p className="text-white/80"> We combine technical expertise with creative problem-solving to engineer software that is powerful, adaptable, and built for the future.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white"></div>
                    <div className="text-sm text-white/70"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white"></div>
                    <div className="text-sm text-white/70"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white"></div>
                    <div className="text-sm text-white/70"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-review-cyan/30 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-review-cyan/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

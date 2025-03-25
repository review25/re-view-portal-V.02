
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
              Redefining Digital <span className="text-gradient">Experiences</span>
            </h2>
            <div className="space-y-4 text-white/70">
              <p>
                Re-View, meaning "to view again," is a software-based company focused on creating
                innovative digital solutions across multiple platforms.
              </p>
              <p>
                Our mission is to combine cutting-edge technology with intuitive design, delivering
                experiences that captivate, educate, and inspire users across our three main divisions.
              </p>
              <p>
                From immersive games that push creative boundaries to professional applications that
                streamline workflows, and educational technology kits that make learning interactive,
                we're committed to excellence in every project we undertake.
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
                    <p className="text-white/80">To redefine how users interact with technology through innovation and design excellence.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Our Approach</h3>
                    <p className="text-white/80">We combine technical expertise with creative thinking to deliver solutions that exceed expectations.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-white/70">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">20+</div>
                    <div className="text-sm text-white/70">Games</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-white/70">Kits</div>
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

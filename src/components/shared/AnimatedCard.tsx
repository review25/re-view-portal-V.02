
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedCard = ({ 
  children, 
  delay = 0, 
  className = ""
}: AnimatedCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;

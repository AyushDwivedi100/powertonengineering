import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { StaggeredList } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";

// Counter Component for animated counting with intersection observer
function AnimatedCounter({ 
  target, 
  suffix = ""
}: { 
  target: number; 
  suffix?: string; 
}) {
  const [count, setCount] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const duration = 2000; // Always 2 seconds
    const startValue = 1;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCount(Math.max(1, currentCount)); // Ensure minimum value is 1
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure we end at exactly the target
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target, hasAnimated]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary to-blue-800 text-white overflow-hidden"
      role="banner"
    >
      {/* Blurred Background Image - Industrial Engineering */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')",
            backgroundPosition: 'center 20%'
          }}
          aria-label="ID-810: Industrial engineering facility background"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Secondary blurred layer for depth */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')",
            backgroundPosition: 'center 30%'
          }}
          aria-label="ID-811: Secondary industrial background for depth"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.4 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Gradient overlay for brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-blue-800/60 to-primary/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-responsive-hero font-bold mb-6 sm:mb-8 leading-tight will-animate"
            variants={itemVariants}
          >
            Comprehensive Solutions for <span className="text-secondary">Industrial Success</span>
          </motion.h1>
          
          <motion.p 
            className="text-responsive-body mb-6 sm:mb-8 opacity-90 leading-relaxed will-animate"
            variants={itemVariants}
          >
            Our broad portfolio of products and services provides all-encompassing solutions that drive industrial success, ensuring that every aspect of your engineering needs is covered.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants}>
              <Link href="/services" className="w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 transition-all duration-200">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Link href="/quote" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-white text-secondary hover:bg-white hover:text-primary hover-lift transition-all duration-300"
                >
                  Request Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Key Features */}
          <StaggeredList 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            stagger={0.15}
          >
            <div className="flex items-center space-x-3 will-animate">
              <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
              <span className="text-lg">15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-3 will-animate">
              <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
              <span className="text-lg">24/7 Technical Support</span>
            </div>
            <div className="flex items-center space-x-3 will-animate">
              <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
              <span className="text-lg">Pan-India Service</span>
            </div>
          </StaggeredList>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        className="relative bg-white bg-opacity-10 backdrop-blur-sm border-t border-white border-opacity-20"
        initial="hidden"
        animate="visible"
        variants={statsVariants}
      >
        <div className="container-responsive container-padding py-8">
          <StaggeredList 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            stagger={0.1}
            delay={0.3}
          >
            <div className="will-animate">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                <AnimatedCounter target={15} suffix="+" />
              </div>
              <div className="text-sm lg:text-base opacity-90">Years Experience</div>
            </div>
            <div className="will-animate">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                <AnimatedCounter target={1200} suffix="+" />
              </div>
              <div className="text-sm lg:text-base opacity-90">Projects Completed</div>
            </div>
            <div className="will-animate">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                <AnimatedCounter target={450} suffix="+" />
              </div>
              <div className="text-sm lg:text-base opacity-90">Happy Clients</div>
            </div>
            <div className="will-animate">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                <span>24/7</span>
              </div>
              <div className="text-sm lg:text-base opacity-90">Support Available</div>
            </div>
          </StaggeredList>
        </div>
      </motion.div>
    </section>
  );
}

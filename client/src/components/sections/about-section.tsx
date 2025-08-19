import { Button } from "@/components/ui/button";
import { Cog, Wrench, Sun, Settings } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AnimatedSection, StaggeredList } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const features = [
    {
      icon: Cog,
      title: "Electrical & Instrumentation",
      description: "Complete range of control systems"
    },
    {
      icon: Wrench,
      title: "Mechanical Pumps",
      description: "Durable pump solutions & spares"
    },
    {
      icon: Sun,
      title: "Solar Solutions",
      description: "Sustainable energy installations"
    },
    {
      icon: Settings,
      title: "Industrial Tools",
      description: "Professional grade equipment"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <AnimatedSection 
            animation="fadeInLeft" 
            delay={0.2}
            duration={0.8}
            className="order-2 lg:order-1"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Professional Indian engineers working on industrial automation and control systems" 
              className="rounded-xl shadow-2xl w-full hover-lift will-animate"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fadeInRight" 
            delay={0.1}
            duration={0.8}
            className="order-1 lg:order-2"
          >
            <motion.span 
              className="text-secondary font-semibold text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              About Us
            </motion.span>
            <motion.h2 
              className="text-responsive-xl font-bold text-primary mt-2 sm:mt-4 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Welcome to Powerton Engineering Pvt. Ltd.
            </motion.h2>
            <motion.p 
              className="text-responsive-sm text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Your trusted partner in delivering high-quality engineering solutions and services. Founded with a vision to empower industries through innovation and excellence, we specialize in providing a comprehensive range of electrical and instrumentation products.
            </motion.p>
            
            <StaggeredList 
              className="grid-responsive-2 mb-6 sm:mb-8"
              stagger={0.15}
              delay={0.6}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-3 hover-scale will-animate">
                    <motion.div 
                      className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </StaggeredList>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link href="/about">
                <Button className="btn-primary hover-lift">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

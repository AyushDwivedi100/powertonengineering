import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/data/constants";
import { 
  Cpu, 
  Gauge, 
  Wrench, 
  PlayCircle, 
  Shield, 
  Settings 
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AnimatedSection, StaggeredList } from "@/hooks/use-scroll-animation";

const iconMap = {
  "microchip": Cpu,
  "tachometer-alt": Gauge,
  "tools": Wrench,
  "play-circle": PlayCircle,
  "shield-alt": Shield,
  "cog": Settings
};

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative section-padding overflow-hidden" 
      role="main"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-white/92"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 to-gray-50/85"></div>
      
      {/* Content */}
      <div className="relative z-10">
      <div className="container-responsive container-padding">
        <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
          <div className="text-center mb-12 sm:mb-16">
            <motion.span 
              className="text-secondary font-semibold text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Services
            </motion.span>
            <motion.h2 
              className="text-responsive-xl font-bold text-primary mt-2 sm:mt-4 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Expert solutions for all needs, delivered with exceptional care
            </motion.h2>
            <motion.p 
              className="text-responsive-sm text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              From process automation to maintenance contracts, we provide comprehensive engineering solutions tailored to your industrial requirements.
            </motion.p>
          </div>
        </AnimatedSection>

        <StaggeredList 
          className="grid-responsive-3"
          stagger={0.15}
          delay={0.3}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Settings;
            
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="border border-gray-100 group hover:shadow-xl transition-all duration-300 hover-lift will-animate">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                    </motion.div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                    
                    <motion.ul 
                      className="space-y-2 mb-6"
                      initial="hidden"
                      whileInView="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={feature} 
                          className="text-sm text-gray-600 flex items-center"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                    
                    <Link href="/services">
                      <Button 
                        variant="ghost" 
                        className="text-secondary hover:text-secondary/80 p-0 font-semibold hover-scale"
                      >
                        Learn More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </StaggeredList>

        <AnimatedSection animation="fadeInUp" delay={0.5} duration={0.6}>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="btn-primary text-lg px-8 py-4 hover-lift">
                View All Services
              </Button>
            </Link>
          </div>
        </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

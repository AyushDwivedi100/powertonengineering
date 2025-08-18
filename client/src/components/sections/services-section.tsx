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

const iconMap = {
  "microchip": Cpu,
  "tachometer-alt": Gauge,
  "tools": Wrench,
  "play-circle": PlayCircle,
  "shield-alt": Shield,
  "cog": Settings
};

export default function ServicesSection() {
  // Service background images
  const serviceImages = {
    "process-automation": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    "instrumentation": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    "site-installation": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    "commissioning": "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    "amc": "https://images.unsplash.com/photo-1581092335878-1c43d93b6e07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    "customized": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  };

  return (
    <section id="services" className="section-padding bg-white" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-secondary font-semibold text-sm sm:text-base md:text-lg">Our Services</span>
          <h2 className="text-responsive-xl font-bold text-primary mt-2 sm:mt-4 mb-4 sm:mb-6">
            Expert solutions for all needs, delivered with exceptional care
          </h2>
          <p className="text-responsive-sm text-foreground/70 max-w-3xl mx-auto">
            From process automation to maintenance contracts, we provide comprehensive engineering solutions tailored to your industrial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;
            
            return (
              <Card 
                key={service.id} 
                className="border border-border group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img 
                    src={serviceImages[service.id as keyof typeof serviceImages]} 
                    alt={`${service.title} - ${service.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6 md:p-8">
                  
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/70 flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/services">
                    <Button 
                      variant="ghost" 
                      className="text-secondary hover:text-secondary/80 p-0 font-semibold"
                    >
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 space-x-4">
          <Link href="/services">
            <Button className="btn-primary text-lg px-8 py-4">
              View All Services
            </Button>
          </Link>
          <Link href="/quote">
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

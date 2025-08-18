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
  return (
    <section id="services" className="section-padding bg-white" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-secondary font-semibold text-sm sm:text-base md:text-lg">Our Services</span>
          <h2 className="text-responsive-xl font-bold text-primary mt-2 sm:mt-4 mb-4 sm:mb-6">
            Expert solutions for all needs, delivered with exceptional care
          </h2>
          <p className="text-responsive-sm text-gray-600 max-w-3xl mx-auto">
            From process automation to maintenance contracts, we provide comprehensive engineering solutions tailored to your industrial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Settings;
            
            return (
              <Card 
                key={service.id} 
                className="border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-600 flex items-center">
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

        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="btn-primary text-lg px-8 py-4">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

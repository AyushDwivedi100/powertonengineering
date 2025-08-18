import { Button } from "@/components/ui/button";
import { Cog, Wrench, Sun, Settings } from "lucide-react";
import { Link } from "wouter";

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
    <section id="about" className="section-padding bg-muted/30" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092335878-1c43d93b6e07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Professional Indian engineers working on industrial automation and control systems" 
                className="w-full h-auto object-cover animate-fade-in transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="animate-slide-in-right order-1 lg:order-2">
            <span className="text-secondary font-semibold text-sm sm:text-base md:text-lg">About Us</span>
            <h2 className="text-responsive-xl font-bold text-primary mt-2 sm:mt-4 mb-4 sm:mb-6">
              Welcome to Powerton Engineering Pvt. Ltd.
            </h2>
            <p className="text-responsive-sm text-foreground/70 mb-6 leading-relaxed">
              Your trusted partner in delivering high-quality engineering solutions and services. Founded with a vision to empower industries through innovation and excellence, we specialize in providing a comprehensive range of electrical and instrumentation products.
            </p>
            
            <div className="grid-responsive-2 mb-6 sm:mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-foreground/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              <Link href="/about">
                <Button className="btn-primary mr-4">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/quote">
                <Button 
                  variant="outline" 
                  className="btn-outline border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

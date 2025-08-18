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
    <section id="about" className="section-padding bg-gray-50" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Indian engineers working on industrial control systems in modern facility" 
              className="rounded-xl shadow-2xl w-full animate-fade-in"
              loading="lazy"
            />
          </div>
          
          <div className="animate-slide-in-right order-1 lg:order-2">
            <span className="text-secondary font-semibold text-sm sm:text-base md:text-lg">About Us</span>
            <h2 className="text-responsive-xl font-bold text-primary mt-2 sm:mt-4 mb-4 sm:mb-6">
              Welcome to Powerton Engineering Pvt. Ltd.
            </h2>
            <p className="text-responsive-sm text-gray-600 mb-6 leading-relaxed">
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
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/about">
              <Button className="btn-primary">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

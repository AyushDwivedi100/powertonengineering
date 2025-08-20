import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Industrial Control Panel Installation",
      category: "Electrical Systems",
      description: "Advanced control panel setup for manufacturing facility"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Process Automation Implementation",
      category: "Automation",
      description: "Complete SCADA system deployment for chemical plant"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Safety System Integration",
      category: "Safety & Protection",
      description: "Comprehensive safety relay and protection system installation"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Solar Power Installation",
      category: "Renewable Energy",
      description: "10MW solar farm with complete monitoring systems"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Instrumentation Setup",
      category: "Measurement Systems",
      description: "Precision measurement and calibration equipment installation"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Pump Station Automation",
      category: "Mechanical Systems",
      description: "Automated pump control and monitoring system"
    }
  ];

  const categoryColors = {
    "Electrical Systems": "bg-primary/10 text-primary border-primary/20",
    "Automation": "bg-secondary/10 text-secondary border-secondary/20",
    "Safety & Protection": "bg-destructive/10 text-destructive border-destructive/20",
    "Renewable Energy": "bg-accent/10 text-accent-foreground border-accent/20",
    "Measurement Systems": "bg-primary/15 text-primary border-primary/30",
    "Mechanical Systems": "bg-secondary/15 text-secondary border-secondary/30"
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30 dark:bg-gray-800/30" role="main">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-secondary font-semibold text-responsive-sm">Our Work</span>
          <h2 className="text-responsive-xl font-bold text-primary mt-2 sm:mt-4 mb-4 sm:mb-6">
            Engineering Excellence in Action
          </h2>
          <p className="text-responsive-base text-foreground/70 max-w-3xl mx-auto">
            Explore our portfolio of successful installations, automation projects, and industrial solutions 
            delivered across various sectors and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {galleryImages.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 card-hover border-none"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`ID-${String(80 + item.id).padStart(3, '0')}: ${item.title}`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <Badge 
                      className={`mb-2 ${
                        categoryColors[item.category as keyof typeof categoryColors] || 
                        "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics Row */}
        <div className="bg-background border border-border rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">250+</div>
              <div className="text-foreground/70 text-xs sm:text-sm lg:text-base">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">150+</div>
              <div className="text-foreground/70 text-xs sm:text-sm lg:text-base">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">15+</div>
              <div className="text-foreground/70 text-xs sm:text-sm lg:text-base">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">50+</div>
              <div className="text-foreground/70 text-xs sm:text-sm lg:text-base">Cities Served</div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <Link href="/projects">
            <Button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}